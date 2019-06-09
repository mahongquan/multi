var window = require('./myglobal.js');
var toned = require('./toned.js');
tonedClass = toned.TonedJS();
var parser = require('./parser.js');
var mynum=0;
var fs = require('fs');
function resetCanvas() {
    window.canvas = getCanvas(innerWidth, innerHeight, true);
    window.context = canvas.getContext('2d');
    body.appendChild(canvas);
}
function spriteUnravel(colors) {
    //console.log("before unravel"+colors.length);
    var paletteref = getPaletteReferenceStarting(window.palette)
    var digitsize = window.digitsize
    var clength = colors.length
    var current, rep, nixloc, newp, i, len, output = '', loc = 0;
    while (loc < clength) {
        switch (colors[loc]) {
        case 'x':
            nixloc = colors.indexOf(',', ++loc);
            current = tonedClass.makeDigit(paletteref[colors.slice(loc, loc += digitsize)], window.digitsize);
            rep = Number(colors.slice(loc, nixloc));
            while (rep--)
                output += current;
            loc = nixloc + 1;
            break;
        case 'p':
            if (colors[++loc] == '[') {
                nixloc = colors.indexOf(']');
                paletteref = getPaletteReference(colors.slice(loc + 1, nixloc).split(','));
                loc = nixloc + 1;
                digitsize = 1;
            } else {
                paletteref = getPaletteReference(window.palette);
                digitsize = window.digitsize;
            }
            break;
        default:
            output += tonedClass.makeDigit(paletteref[colors.slice(loc, loc += digitsize)], window.digitsize);
            break;
        }
    }
    return output;
}
function spriteExpand(colors) {
    //console.log("before expand"+colors.length);
    var output = ''
    var clength = colors.length
    var current, i = 0, j;
    while (i < clength) {
        current = colors.slice(i, i += window.digitsize);
        //console.log("current=",current);
        //console.log(window.scale);
        for (j = 0; j < window.scale; ++j)
            output += current;
    }
    return output;
}
function spriteGetArray(colors) {
    //console.log("before getarray"+colors.length);
    var clength = colors.length
    var numcolors = clength / window.digitsize
    var split = colors.match(new RegExp('.{1,' + window.digitsize + '}', 'g'))
    var olength = numcolors * 4
    var output = new Uint8ClampedArray(olength);
    //console.log("len="+olength);
    var reference, i, j, k;
    for (i = 0, j = 0; i < numcolors; ++i) {
        reference = window.palette[Number(split[i])];
        for (k = 0; k < 4; ++k)
            output[j + k] = reference[k];
        j += 4;
    }
    //console.log(output);
    
    return output;
}
function setThingSprite(thing) {
    if (thing.hidden || !thing.title)
        return;
    var cache = window.library.cache
    var width = thing.spritewidth
    var height = thing.spriteheight
    var title = thing.title
    var className = thing.className; 
    //console.log("classname"+className);
    var classes = className;//.split(/\s+/g).slice(1).sort()
    var key = title + ' ' + classes
    var cached = cache[key];
    var sprite = getSpriteFromLibrary(thing);
    if (!sprite) {
        console.log('Could not get sprite from library on ' + thing.title);
        return;
    }
    if (sprite.multiple) {
        expandObtainedSpriteMultiple(sprite, thing, width, height);
        thing.sprite_type = sprite.type;
    } else {
        expandObtainedSprite(sprite, thing, width, height);
        thing.sprite_type = 'normal';
    }
}
function getSpriteFromLibrary(thing) {
    var cache = window.library.cache, title = thing.title, libtype = thing.libtype, className = thing.className;
    var classes = className;//.split(/\s+/g).slice(1).sort(), 
    var setting = {};
    var key, cached, sprite, i;
    for (i in setting)
        classes.unshift(setting[i]);
    key = title + ' ' + classes;
    cached = cache[key], sprite;
    if (!cached) {
        sprite = window.library.sprites[libtype][title];
        if (!sprite || !sprite.constructor) {
            console.log('Error in checking for sprite of ' + title + '.');
            console.log('Title ' + title, '\nLibtype ' + libtype, '\n', thing, '\n');
            return;
        }
        if (sprite.constructor != Uint8ClampedArray) {
            sprite = findSpriteInLibrary(thing, sprite, classes);
        }
        cached = cache[key] = { raw: sprite };
    } else
        sprite = cached.raw;
    return sprite;
}
function expandObtainedSprite(sprite, thing, width, height, norefill) {
    var parsed = new Uint8ClampedArray(sprite.length * window.scale), rowsize = width * window.unitsizet4, heightscale = height * window.scale, readloc = 0, writeloc = 0, si, sj;
    for (si = 0; si < heightscale; ++si) {
        for (sj = 0; sj < window.scale; ++sj) {
            memcpyU8(sprite, parsed, readloc, writeloc, rowsize);
            writeloc += rowsize;
        }
        readloc += rowsize;
    }
    if (!norefill) {
        thing.num_sprites = 1;
        thing.sprite = parsed;
        //refillThingCanvas(thing);
    }
    return parsed;
}
function expandObtainedSpriteMultiple(sprites, thing, width, height) {
    var parsed = {}, sprite, part;
    thing.num_sprites = 0;
    for (part in sprites) {
        if ((sprite = sprites[part]) instanceof Uint8ClampedArray) {
            ++thing.num_sprites;
            parsed[part] = expandObtainedSprite(sprite, thing, width, height, true);
        } else if (typeof sprite == 'number')
            parsed[part] = sprite * scale;
        else
            parsed[part] = sprite;
    }
    thing.sprite = parsed.middle;
    thing.sprites = parsed;
    //refillThingCanvases(thing, parsed);
}
function findSpriteInLibrary(thing, current, classes) {
    var nogood, check, i, prev = current;
    if (current.multiple)
        return current;
    var loop_num = 0;
    while (nogood = true) {
        if (++loop_num > 49) {
            alert(thing.title);
            //console.log(thing.title, classes, current);
        }
        for (i in classes) {
            if (check = current[classes[i]]) {
                current = check;
                classes.splice(i, 1);
                nogood = false;
                break;
            }
        }
        if (nogood) {
            if (check = current.normal) {
                nogood = false;
                switch (check.constructor.name) {
                case 'Uint8ClampedArray':
                case 'SpriteMultiple':
                    return check;
                case 'Object':
                    current = check;
                    break;
                default:
                    current = current[check];
                    break;
                }
            } else
                nogood = true;
        }
        if (!nogood && current) {
            switch (current.constructor.name) {
            case 'Uint8ClampedArray':
            case 'SpriteMultiple':
                return current;
            case 'Object':
                continue;
            }
        } else {
            console.log('\nSprite not found! Title: ' + thing.title);
            console.log('Classname:', thing.className);
            console.log('Remaining', classes);
            console.log('Current', current);
            console.log('Prev', prev);
            return new Uint8ClampedArray(thing.spritewidth * thing.spriteheight);
        }
    }
}
function refillThingCanvas(thing) {
    var canvas = thing.canvas, context = thing.context, imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    memcpyU8(thing.sprite, imageData.data);
    context.putImageData(imageData, 0, 0);
}
function refillThingCanvases(thing, parsed) {
    var canvases = thing.canvases = {}, width = thing.spritewidthpixels, height = thing.spriteheightpixels, part, imageData, canvas, context, i;
    thing.num_sprites = 1;
    for (i in parsed) {
        if ((part = parsed[i]) instanceof Uint8ClampedArray) {
            ++thing.num_sprites;
            canvases[i] = canvas = { canvas: getCanvas(width, height) };
            canvas.context = context = canvas.canvas.getContext('2d');
            imageData = context.getImageData(0, 0, width, height);
            memcpyU8(part, imageData.data);
            context.putImageData(imageData, 0, 0);
        } else {
            canvases[i] = part;
        }
    }
    canvas = canvases.middle;
    thing.canvas = canvas.canvas;
    thing.context = canvas.context;
}
function refillCanvas() {
    var canvas = window.canvas, context = window.context, things, thing, left, top, i;
    context.fillStyle = area.fillStyle;
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (i = scenery.length - 1; i >= 0; --i)
        drawThingOnCanvas(context, scenery[i]);
    for (i = solids.length - 1; i >= 0; --i)
        drawThingOnCanvas(context, solids[i]);
    for (i = characters.length - 1; i >= 0; --i)
        drawThingOnCanvas(context, characters[i]);
}
function drawThingOnCanvas(context, me) {
    if (me.hidden)
        return;
    var leftc = me.left, topc = me.top;
    if (leftc > innerWidth)
        return;
    if (me.num_sprites == 1)
        drawThingOnCanvasSingle(context, me.canvas, me, leftc, topc);
    else
        drawThingOnCanvasMultiple(context, me.canvases, me.canvas, me, leftc, topc);
}
function drawThingOnCanvasSingle(context, canvas, me, leftc, topc) {
    if (me.repeat)
        drawPatternOnCanvas(context, canvas, leftc, topc, me.unitwidth, me.unitheight);
    else
        context.drawImage(canvas, leftc, topc);
}
function drawThingOnCanvasMultiple(context, canvases, canvas, me, leftc, topc) {
    var topreal = topc, leftreal = leftc, rightreal = me.right, bottomreal = me.bottom, widthreal = me.unitwidth, heightreal = me.unitheight, spritewidthpixels = me.spritewidthpixels, spriteheightpixels = me.spriteheightpixels, sdiff, canvasref;
    if (me.sprite_type[0] == 'v') {
        if (canvasref = canvases.bottom) {
            sdiff = canvases.bottomheight || me.spriteheightpixels;
            drawPatternOnCanvas(context, canvasref.canvas, leftreal, bottomreal - sdiff, spritewidthpixels, min(heightreal, spriteheightpixels));
            bottomreal -= sdiff;
            heightreal -= sdiff;
        }
        if (canvasref = canvases.top) {
            sdiff = canvases.topheight || me.spriteheightpixels;
            drawPatternOnCanvas(context, canvasref.canvas, leftreal, topreal, spritewidthpixels, min(heightreal, spriteheightpixels));
            topreal += sdiff;
            heightreal -= sdiff;
        }
    } else if (me.sprite_type[0] == 'h') {
        if (canvasref = canvases.left) {
            sdiff = canvases.leftwidth || me.spritewidthpixels;
            drawPatternOnCanvas(context, canvasref.canvas, leftreal, topreal, min(widthreal, spritewidthpixels), spriteheightpixels);
            leftreal += sdiff;
            widthreal -= sdiff;
        }
        if (canvasref = canvases.right) {
            sdiff = canvases.rightwidth || me.spritewidthpixels;
            drawPatternOnCanvas(context, canvasref.canvas, rightreal - sdiff, topreal, min(widthreal, spritewidthpixels), spriteheightpixels);
            rightreal -= sdiff;
            widthreal -= sdiff;
        }
    }
    if (topreal < bottomreal && leftreal < rightreal) {
        drawPatternOnCanvas(context, canvas, leftreal, topreal, widthreal, heightreal);
    }
}
function getPaletteReferenceStarting(palette) {
    var output = {};
    for (var i = 0; i < palette.length; ++i)
        output[tonedClass.makeDigit(i, window.digitsize)] = tonedClass.makeDigit(i, window.digitsize);
    return output;
}
function getPaletteReference(palette) {
    var output = {};
    var digitsize = parser.getDigitSize(palette);
    for (var i = 0; i < palette.length; ++i)
        output[tonedClass.makeDigit(i, digitsize)] = tonedClass.makeDigit(palette[i], digitsize);
    return output;
}
function flipSpriteArrayHoriz(sprite, thing) {
    var length = sprite.length, width = thing.spritewidth, height = thing.spriteheight, newsprite = new Uint8ClampedArray(length), rowsize = width * unitsizet4, newloc, oldloc, i, j, k;
    for (i = 0; i < length; i += rowsize) {
        newloc = i;
        oldloc = i + rowsize - 4;
        for (j = 0; j < rowsize; j += 4) {
            for (k = 0; k < 4; ++k)
                newsprite[newloc + k] = sprite[oldloc + k];
            newloc += 4;
            oldloc -= 4;
        }
    }
    return newsprite;
}
function flipSpriteArrayVert(sprite, thing) {
    var length = sprite.length, width = thing.spritewidth, height = thing.spriteheight, newsprite = new Uint8ClampedArray(length), rowsize = width * unitsizet4, newloc = 0, oldloc = length - rowsize, i, j, k;
    while (newloc < length) {
        for (i = 0; i < rowsize; i += 4) {
            for (j = 0; j < 4; ++j) {
                newsprite[newloc + i + j] = sprite[oldloc + i + j];
            }
        }
        newloc += rowsize;
        oldloc -= rowsize;
    }
    return newsprite;
}
function flipSpriteArrayBoth(sprite) {
    var length = sprite.length, newsprite = new Uint8ClampedArray(length), oldloc = sprite.length - 4, newloc = 0, i;
    while (newloc < length) {
        for (i = 0; i < 4; ++i)
            newsprite[newloc + i] = sprite[oldloc + i];
        newloc += 4;
        oldloc -= 4;
    }
    return newsprite;
}
function drawPatternOnCanvas(context, source, leftc, topc, unitwidth, unitheight) {
    context.translate(leftc, topc);
    context.fillStyle = context.createPattern(source, 'repeat');
    context.fillRect(0, 0, unitwidth, unitheight);
    context.translate(-leftc, -topc);
}
function clearAllSprites(clearcache) {
    var arrs = [
            window.solids,
            window.characters,
            window.scenery
        ], arr, i;
    for (arr in arrs)
        for (i in arr = arrs[arr])
            setThingSprite(arr[i]);
    if (clearcache)
        library.cache = {};
}
function memcpyU8(source, destination, readloc, writeloc, writelength) {
    if (!source || !destination || readloc < 0 || writeloc < 0 || writelength <= 0)
        return;
    if (readloc >= source.length || writeloc >= destination.length) {
        return;
    }
    if (readloc == null)
        readloc = 0;
    if (writeloc == null)
        writeloc = 0;
    if (writelength == null)
        writelength = max(0, min(source.length, destination.length));
    while (writelength--)
        destination[writeloc++] = source[readloc++];
}
function canvasDisableSmoothing(canvas, context) {
    context = context || canvas.getContext('2d');
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
}
exports.spriteUnravel = spriteUnravel;
exports.spriteExpand = spriteExpand;
exports.spriteGetArray = spriteGetArray;exports.resetCanvas=resetCanvas
exports.spriteUnravel=spriteUnravel
exports.spriteExpand=spriteExpand
exports.spriteGetArray=spriteGetArray
exports.setThingSprite=setThingSprite
exports.getSpriteFromLibrary=getSpriteFromLibrary
exports.expandObtainedSprite=expandObtainedSprite
exports.expandObtainedSpriteMultiple=expandObtainedSpriteMultiple
exports.findSpriteInLibrary=findSpriteInLibrary
exports.refillThingCanvas=refillThingCanvas
exports.refillThingCanvases=refillThingCanvases
exports.refillCanvas=refillCanvas
exports.drawThingOnCanvas=drawThingOnCanvas
exports.drawThingOnCanvasSingle=drawThingOnCanvasSingle
exports.drawThingOnCanvasMultiple=drawThingOnCanvasMultiple
exports.getPaletteReferenceStarting=getPaletteReferenceStarting
exports.getPaletteReference=getPaletteReference
exports.flipSpriteArrayHoriz=flipSpriteArrayHoriz
exports.flipSpriteArrayVert=flipSpriteArrayVert
exports.flipSpriteArrayBoth=flipSpriteArrayBoth
exports.drawPatternOnCanvas=drawPatternOnCanvas
exports.clearAllSprites=clearAllSprites
exports.memcpyU8=memcpyU8
exports.canvasDisableSmoothing=canvasDisableSmoothing
