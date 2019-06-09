var num_files, dropzone, curlist, outlist, numdisplay, files, scale_x = 1, scale_y = 1, digitsize = 1, palette, palettes, palette_name, palette_names, palette_elem, palette_elems, max = Math.max, min = Math.min, round = Math.round, abs = Math.abs;
function load() {
    dropzone = document.getElementById('dropzone');
    curlist = document.getElementById('curlist');
    outlist = document.getElementById('outlist');
    numdisplay = document.getElementById('num_files');
    num_files = 0;
    dropzone.onchange = handleInputChange;
    dropzone.ondragover = handleDragOver;
    dropzone.ondragleave = handleDragOff;
    dropzone.ondrop = handleFileSelect;
    initializePalettes();
}
function handleInputChange(event) {
    dropzone.ondragleave();
    event.target.ondragleave();
    console.log(window.e = event);
}
function handleFileSelect(event) {
    preventAll(event);
    this.style.backgroundColor = '';
    var files = window.files = event.dataTransfer.files, output = [], type;
    for (var i = 0, f; f = files[i]; i++) {
        type = f.type.split('/')[1];
        if (type == 'gif' || type == 'png' || type == 'jpeg' || type == 'jpg') {
            ++num_files;
            output.push('<li><strong>', f.name, '</strong> <grey>(', type, ')</grey>');
            outlist.appendChild(getWorkerElement(f));
        } else
            output.push('<li>Only images are supported! <grey>(' + type + ')</grey></li>');
    }
    dropzone.innerHTML = files.length + ' file' + (files.length == 1 ? '' : 's') + ' selected';
    curlist.innerHTML = output.join('');
}
function getWorkerElement(file) {
    var element = getOutputListElement(file.name), reader = new FileReader();
    reader.onprogress = updateProgress;
    reader.element = element;
    reader.onloadend = startWorking;
    reader.readAsDataURL(file);
    return element;
}
function getOutputListElement(name) {
    var element = document.createElement('li'), status = document.createElement('div'), progress = document.createElement('div'), base64 = document.createElement('div'), results = document.createElement('div'), close = document.createElement('div');
    element.name = name;
    element.statusbase = status.innerText = 'Uploading ' + name + '...';
    element.status = status;
    element.progress = progress;
    element.base64 = base64, element.results = results;
    element.close = close;
    element.appendChild(status);
    element.appendChild(progress);
    element.appendChild(base64);
    element.appendChild(results);
    element.appendChild(close);
    status.className = 'status';
    element.className = 'output';
    progress.className = 'progress';
    base64.className = 'base64';
    results.className = 'results';
    close.className = 'close';
    setTextDisplayer(base64, 'Base 64');
    setTextDisplayer(results, 'Sprite');
    return element;
}
function updateProgress(event) {
    if (event.lengthComputable) {
        var percentLoaded = round(event.loaded / event.total * 100);
        if (percentLoaded <= 100) {
            this.element.status.innerText = this.element.statusbase + ' (' + percentLoaded + '%)';
            this.element.progress.style.width = percentLoaded + '%';
        }
    }
}
function startWorking(event) {
    var reader = event.currentTarget, element = reader.element, result = reader.result;
    setTimeout(function () {
        element.status.innerText = 'Working on ' + element.name + '...';
        element.progress.style.backgroundColor = 'rgb(117,175,245)';
    }, 350);
    setDisplayerText(element.base64, result);
    var canvas = document.createElement('canvas'), context = canvas.getContext('2d');
    var img = document.createElement('image');
    img.src = result;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        var data = context.getImageData(0, 0, img.width, img.height), output;
        setTimeout(function () {
            element.status.innerHTML = '<strong>' + element.name + '</strong><weak><grey style=\'text-shadow:none;\'>(' + palette_name + ')</grey></weak>';
            element.status.style.color = 'white';
            element.progress.style.backgroundColor = 'rgb(35,35,70)';
            output = parseData(data.data, element, palette);
            setDisplayerText(element.results, output);
        }, 350);
    };
}
function parseData(data, element) {
    var outs = [], occurences = {}, me, i, j, len = data.length;
    for (i = 0, j = 0; i < len; i += 4, ++j) {
        me = outs[j] = getClosestPalette([
            data[i],
            data[i + 1],
            data[i + 2],
            data[i + 3]
        ]);
        if (occurences[me])
            ++occurences[me];
        else
            occurences[me] = 1;
    }
    return combineSimilarChars(outs, getNewPaletteFromOccurences(occurences));
}
function combineSimilarChars(textraw, paletteinfo) {
    var newpalette = paletteinfo[0], digitsize = paletteinfo[1], threshold = max(3, round(4 / digitsize)), text = '', i, j, len, cur;
    //console.log(digitsize);
    for (i = 0, len = textraw.length; i < len; ++i) {
        j = i + 1;
        cur = textraw[i];
        while (cur == textraw[j])
            ++j;
        if (j - i > threshold) {
            text += 'x' + makedigit(cur, digitsize, newpalette) + String(j - i) + ',';
            i = j - 1;
        } else
            text += makedigit(cur, digitsize, newpalette);
    }
    return 'p[' + grabKeys(newpalette) + ']' + text;
}
function getNewPaletteFromOccurences(occurences) {
    var counts = [], key, len = 0;
    for (key in occurences) {
        counts[key] = len;
        ++len;
    }
    //console.log(len);
    return [
        counts,
        getDigitSizeFromLength(len)
    ];
}
function makedigit(num, digitsize, newpalette) {
    return fillChars(max(0, digitsize - String(num).length), '0') + newpalette[num];
}
function fillChars(num, a) {
    var text = '';
    while (num--)
        text += a;
    return text;
}
function grabKeys(object) {
    var output = [], i;
    for (i in object)
        output.push(i);
    return output.join(',');
}
function getClosestPalette(rgba) {
    var i, bestloc, diff, bestdiff = Infinity;
    for (i = palette.length - 1; i >= 0; --i) {
        diff = arrayDiff(rgba, palette[i]);
        if (diff < bestdiff) {
            bestdiff = diff;
            bestloc = i;
        }
    }
    return bestloc;
}
function arrayDiff(a, b) {
    var sum = 0, i;
    for (i = a.length - 1; i >= 0; --i)
        sum += abs(a[i] - b[i]);
    return sum;
}
function arrayEquals(a, b) {
    return !(a < b || b < a);
}
function handleDragOver(event) {
    preventAll(event);
    event.dataTransfer.dropEffect = 'copy';
    this.style.backgroundColor = 'lightgrey';
}
function handleDragOff(event) {
    this.style.backgroundColor = '';
}
function preventAll(event) {
    event.stopPropagation();
    event.preventDefault();
}
function setTextDisplayer(element, intitle) {
    element.className += ' displayer';
    var title = element.title = document.createElement('div'), display = element.display = document.createElement('input'), copyout = element.copyout = document.createElement('div');
    title.innerText = intitle + ': ';
    title.className = 'title';
    display.className = 'display';
    element.appendChild(title);
    element.appendChild(display);
}
function setDisplayerText(element, text) {
    element.display.value = text;
}
function initializePalettes() {
    palettes = [
        [
            [
                0,
                0,
                0,
                0
            ],
            [
                255,
                255,
                255,
                255
            ],
            [
                0,
                0,
                0,
                255
            ]
        ],
        [
            [
                0,
                0,
                0,
                0
            ],
            [
                255,
                255,
                255,
                255
            ],
            [
                0,
                0,
                0,
                255
            ],
            [
                199,
                199,
                192,
                255
            ],
            [
                128,
                128,
                128,
                255
            ]
        ],
        [
            [
                0,
                0,
                0,
                0
            ],
            [
                255,
                255,
                255,
                255
            ],
            [
                0,
                0,
                0,
                255
            ],
            [
                188,
                188,
                188,
                255
            ],
            [
                116,
                116,
                116,
                255
            ],
            [
                252,
                216,
                168,
                255
            ],
            [
                252,
                152,
                56,
                255
            ],
            [
                252,
                116,
                180,
                255
            ],
            [
                216,
                40,
                0,
                255
            ],
            [
                200,
                76,
                12,
                255
            ],
            [
                136,
                112,
                0,
                255
            ],
            [
                124,
                7,
                0,
                255
            ],
            [
                168,
                250,
                188,
                255
            ],
            [
                128,
                208,
                16,
                255
            ],
            [
                0,
                168,
                0,
                255
            ],
            [
                24,
                60,
                92,
                255
            ],
            [
                0,
                128,
                136,
                255
            ],
            [
                32,
                56,
                236,
                255
            ],
            [
                156,
                252,
                240,
                255
            ],
            [
                60,
                188,
                252,
                255
            ],
            [
                92,
                148,
                252,
                255
            ]
        ]
    ];
    palette_names = [
        'Black & White',
        'GameBoy',
        'Mario'
    ];
    var container = document.getElementById('palettes'), i, j, len, current, mine, square, squarein;
    palette_elems = [];
    for (i = 0, len = palettes.length; i < len; ++i) {
        current = palettes[i];
        palette_elems[i] = mine = document.createElement('div');
        mine.innerHTML = '<p class=\'palettename\'>' + palette_names[i] + '</p>';
        for (j = 0; j < current.length; ++j) {
            square = document.createElement('div');
            squarein = document.createElement('div');
            square.className = 'square';
            squarein.className = 'squarein';
            squarein.style.background = getColorFromArray(current[j]);
            square.appendChild(squarein);
            mine.appendChild(square);
        }
        mine.palettenum = i;
        mine.onclick = setCurrentPalette;
        mine.className = 'squares';
        container.appendChild(mine);
    }
    palette_elems[localStorage.palette_num || 0].click();
}
function getColorFromArray(arr) {
    return 'rgba(' + arr.join(', ') + ')';
}
function setCurrentPalette(event) {
    var num = this.palettenum;
    palette = palettes[num];
    palette_name = palette_names[num];
    digitsize = getDigitSize(palette);
    digitsize = palette.length >= 10 ? 2 : 1;
    if (palette_elem)
        palette_elem.className = 'squares';
    palette_elem = this;
    this.className = 'squares selected';
    localStorage.palette_num = num;
}
function getDigitSize(palette) {
    return Number(String(palette.length).length);
}
function getDigitSizeFromLength(length) {
    return Number(String(length).length);
}
function setScaleValue(event) {
    window['scale_' + this.alpha] = Number(this.value) || 1;
}
function sum(a, b) {
    return Number(a) + Number(b);
}
exports.getDigitSize = getDigitSize;exports.load=load
exports.handleInputChange=handleInputChange
exports.handleFileSelect=handleFileSelect
exports.getWorkerElement=getWorkerElement
exports.getOutputListElement=getOutputListElement
exports.updateProgress=updateProgress
exports.startWorking=startWorking
exports.parseData=parseData
exports.combineSimilarChars=combineSimilarChars
exports.getNewPaletteFromOccurences=getNewPaletteFromOccurences
exports.makedigit=makedigit
exports.fillChars=fillChars
exports.grabKeys=grabKeys
exports.getClosestPalette=getClosestPalette
exports.arrayDiff=arrayDiff
exports.arrayEquals=arrayEquals
exports.handleDragOver=handleDragOver
exports.handleDragOff=handleDragOff
exports.preventAll=preventAll
exports.setTextDisplayer=setTextDisplayer
exports.setDisplayerText=setDisplayerText
exports.initializePalettes=initializePalettes
exports.getColorFromArray=getColorFromArray
exports.setCurrentPalette=setCurrentPalette
exports.getDigitSize=getDigitSize
exports.getDigitSizeFromLength=getDigitSizeFromLength
exports.setScaleValue=setScaleValue
exports.sum=sum
