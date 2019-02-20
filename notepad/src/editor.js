import React, { Component } from 'react';
import DlgAbout from './DlgAbout';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/tomorrow_night';
import data from './Data';
import Browser from './Browser2';
import MyFs from './MyFs';
import 'brace/theme/tomorrow_night';
import 'brace/mode/javascript';
import 'brace/mode/jsx';
import 'brace/mode/css';
import 'brace/mode/markdown';
import 'brace/mode/html';
import 'brace/mode/python';
import DropdownButton from './DropdownButton';
import MenuItem from '@material-ui/core/MenuItem';
const path = window.require('path');
const fs = window.require('fs');
const electron = window.require('electron');
const { ipcRenderer } = window.require('electron'); //
const fontSize = 16;
const toolbar_h = 80;
class HtmlEditor extends Component {
  constructor() {
    super();
    data.getconfig();
    ipcRenderer.on('request_close', () => {
      data.saveconfig();
      ipcRenderer.send('close');
    });
    ipcRenderer.on('save', () => {
      this.save_click();
    });
    ipcRenderer.on('new', () => {
      this.newfile();
    });
    ipcRenderer.on('open', () => {
      this.open_click();
    });
    ipcRenderer.on('about', () => {
      this.setState({ show_about: true });
    });
    this.state = {
      show_about: false,
      root: '.',
      previewSize: { width: '50vw', height: '50vh' },
      mode: 'html',
      html: '',
      showPreview: 'none',
      html_editor_h: 600,
      edit_width: 800,
      filename: '',
      selectValue: '',
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  htmlChange = value => {
    this.setState({ html: value });
  };
  handleDragStart = () => {
    this.setState({
      dragging: true,
    });
  };
  onFileClick = filepath => {
    filepath = MyFs.toLocalPath(filepath);
    this.openfile(filepath);
    // this.setState({ filename: filepath });
    // let content = fs.readFileSync(filepath, { encoding: 'utf-8', flag: 'r' });
    // this.setState({ html: content, showPreview: 'none' });
  };
  openfolder = folder => {
    // MyFs.openfolder(folder);
    this.setState({ root: folder });
  };
  openfile = filename => {
    this.setState({ filename: filename });
    try {
      let content = fs.readFileSync(filename, { encoding: 'utf-8', flag: 'r' });
      let ext = path.extname(filename);
      let mode;
      if (ext === '.js') {
        mode = 'jsx';
      } else if (ext === '.jsx') {
        mode = 'jsx';
      } else if (ext === '.py') {
        mode = 'python';
      } else if (ext === '.md') {
        mode = 'markdown';
      } else if (ext === '.html') {
        mode = 'html';
      } else if (ext === '.css') {
        mode = 'css';
      } else {
        mode = 'text';
      }
      this.setState({ html: content, showPreview: 'none', mode: mode });
    } catch (err) {
      console.log(err);
    }
  };
  openfolder_click = () => {
    var dialog = electron.remote.dialog;
    dialog.showOpenDialog(
      {
        // defaultPath: path.resolve('./css_examples'),
        properties: ['openDirectory'],
      },
      res => {
        console.log(res);
        if (!res) return;
        this.openfolder(res[0]);
      }
    );
  };
  open_click = () => {
    var dialog = electron.remote.dialog;
    dialog.showOpenDialog(
      {
        // defaultPath: path.resolve('./css_examples'),
        properties: ['openFile'],
        filters: [
          { name: '*', extensions: ['*'] },
          { name: '*.html', extensions: ['html'] },
          { name: '*.txt', extensions: ['text'] },
        ],
      },
      res => {
        if (!res) return;
        this.openfile(res[0]);
      }
    );
  };
  animationEnd = el => {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
    return;
  };
  // updateFrame = () => {
  //   let frame = window.frames['preview'];
  //   if (frame) {
  //     let filepath = path.dirname(this.state.filename);
  //     // let $ = cheerio.load(this.state.html,{
  //     //    xmlMode: true,
  //     //    lowerCaseTags: false
  //     // });
  //     // $("head").prepend(`<base href="${filepath}/" />`);
  //     let content = this.state.html;
  //     content = content.replace('<head>', `<head><base href="${filepath}/" />`);
  //     let doc = window.frames['preview'].document;
  //     if (!doc) return;
  //     try {
  //       doc.open();
  //       doc.write(content);
  //       doc.close();
  //     } catch (err) {
  //       console.log(err);
  //       // this.setState({filename:"about:blank"});
  //     }
  //   }
  // };
  anim = () => {
    //console.log(e.target.value);
    this.setState(
      {
        selectValue: 'flipInX animated',
      },
      () => {
        setTimeout(this.check, 1000);
      }
    );
  };
  check = () => {
    if (this.animationEnd(this.refs.contactedit)) {
      // console.log("end");
      this.setState({ selectValue: '' });
    } else {
      setTimeout(this.check, 1000);
    }
  };

  save_as_click = () => {
    var dialog = electron.remote.dialog;
    dialog.showSaveDialog(
      {
        defaultPath: path.resolve('./css_examples'),
        properties: ['saveFile'],
        filters: [
          { name: '*.html', extensions: ['html'] },
          { name: '*.txt', extensions: ['text'] },
          { name: '*', extensions: ['*'] },
        ],
      },
      res => {
        if (res) {
          this.anim();
          this.setState({ filename: res });
          fs.writeFileSync(res, this.genOut());
        }
      }
    );
  };
  save_click = () => {
    if (this.state.filename != '') {
      this.anim();
      console.log(this.state);
      fs.writeFileSync(this.state.filename, this.genOut());
    } else {
      this.save_as_click();
    }
  };
  genOut = () => {
    return this.state.html;
  };
  handleDragEnd = () => {
    // console.log(this.cssEditor.current);
    this.cssEditor.current.editor.resize();
    this.htmlEditor.current.editor.resize();
    this.setState({
      dragging: false,
    });
  };
  newfile = () => {
    this.setState({
      filename: '',
      html:
        '<!DOCTYPE html><html><head>\n\n<style>\n\n</style></head><body>\n\n</body></html>',
    });
  };
  handleDrag = width => {
    this.setState({ html_editor_h: width });
  };
  resetPreview = () => {
    let filename = this.state.filename;
    this.setState({ filename: 'about:blank' }, () => {
      this.setState({ filename: filename });
    });
  };
  render() {
    // console.log(this.state);
    // let $ = cheerio.load(this.state.html,{
    //          xmlMode: true,
    //          lowerCaseTags: false
    //       });
    let html = this.state.html; //$("body").html();
    // let head=(<meta charSet="utf-8"></meta>);
    // this.updateFrame();
    let filepath = path.dirname(this.state.filename);
    let content = this.state.html;
    content = content.replace(
      '<head>',
      `<head><base href="${this.state.filename}" >`
    );
    return (
      <div id="root_new">
        <DlgAbout
          showModal={this.state.show_about}
          closeModal={() => {
            this.setState({ show_about: false });
          }}
        />
        <Browser root={this.state.root} onFileClick={this.onFileClick} />

        <div id="contain_edit">
          <div style={{ height: toolbar_h, backgroundColor: '#ccc' }}>
            <button
              style={{ margin: '10px 10px 10px 10px' }}
              onClick={this.open_click}
            >
              open
            </button>
            <button
              style={{ margin: '10px 10px 10px 10px' }}
              onClick={this.openfolder_click}
            >
              open folder
            </button>
            <span
              style={{
                display: 'inline-block',
                border: 'solid gray 2px',
                margin: '2px 2px 2px 2px',
              }}
              ref="contactedit"
              className={this.state.selectValue}
            >
              <button
                style={{ margin: '10px 10px 10px 10px' }}
                onClick={this.save_click}
              >
                save
              </button>
              <button
                style={{ margin: '10px 10px 10px 10px' }}
                onClick={this.save_as_click}
              >
                save as
              </button>
            </span>
            <DropdownButton title={this.state.mode}>
              <MenuItem onClick={() => this.setState({ mode: 'markdown' })}>
                markdown
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'html' })}>
                html
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'css' })}>
                css
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'text' })}>
                text
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'jsx' })}>
                jsx
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'python' })}>
                python
              </MenuItem>
              <MenuItem onClick={() => this.setState({ mode: 'javascript' })}>
                javascript
              </MenuItem>
            </DropdownButton>
            <button
              onClick={this.newfile}
              style={{ margin: '10px 10px 10px 10px' }}
            >
              New
            </button>
            <button onClick={this.anim}>anim</button>
            <div>{this.state.filename}</div>
          </div>
          <div
            style={{
              flex: 1,
              width: '100%',
              height: `calc(100vh - ${toolbar_h})`,
            }}
          >
            <AceEditor
              ref={this.htmlEditor}
              fontSize={fontSize}
              showPrintMargin={false}
              wrapEnabled={true}
              style={{
                margin: 'auto',
                width: '100%',
                height: '100%',
              }}
              mode={this.state.mode}
              theme="tomorrow_night"
              value={this.state.html}
              onChange={this.htmlChange}
              name="htmlEd"
              editorProps={{ $blockScrolling: Infinity }}
            />
          </div>
        </div>
        <div id="contain_preview">
          <button
            onClick={() => {
              if (this.state.showPreview === 'none') {
                this.setState({ showPreview: 'flex' });
              } else {
                this.setState({ showPreview: 'none' });
              }
            }}
          >
            toggle preview
          </button>
          <div
            style={{
              margin: '10 10 10 10',
              ...this.state.previewSize,
              flexDirection: 'column',
              display: this.state.showPreview,
            }}
          >
            <button
              onClick={() => {
                if (this.state.previewSize.width === '50vw') {
                  this.setState({
                    previewSize: { width: '100vw', height: '100vh' },
                  });
                } else {
                  this.setState({
                    previewSize: { width: '50vw', height: '50vh' },
                  });
                }
              }}
            >
              toggle max
            </button>
            <iframe
              name="preview"
              srcDoc={content}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <style jsx="true">{`
          body {
            margin: 0 0 0 0;
            padding: 0 0 0 0;
          }
          #root_new {
            margin: 0 0 0 0;
            padding: 0 0 0 0;
            display:flex;
            flex-direction:row;
            width: 100%;
            height: 100%;
          }
          #contain_edit {
            height: 100vh;
            flex:1;
            display:flex;
            flex-direction:column;
          }
          #contain_preview {
            background-color:#eee;
            position:fixed;
            display:flex;
            flex-direction:column;
            right:0;
            top:0;
            margin:0 0 0 0;
            padding：0 0 0 0;
            overflow: auto;
            z-index:100;
          }
        `}</style>
      </div>
    );
  }
}

export default HtmlEditor;
