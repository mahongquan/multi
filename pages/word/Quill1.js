import React from 'react';
import sprintf from 'sprintf';
import ReactQuill from 'react-quill';
const CustomButton = () => <label>star</label>;
// [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//         ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
//         [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//         [{ 'script': 'sub'}, { 'script': 'super' }],
//         [{ 'direction': 'rtl' }], 
//         ['link', 'image'],
//         [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//         [{ 'font': [] }],
//         [{ 'align': [] }],
//         ['clean'] 
const CustomToolbar = () => (
  <div id="toolbar"  className="only_screen" style={{top:"70px",backgroundColor:'rgba(250,250,250,0.9)'}}>
    <select className="ql-font">
      <option ></option>
      <option value="serif"></option>
      <option value="monospace"></option>
      <option value="黑体"></option>
      <option value="宋体"></option>
    </select>
    <select className="ql-size" defaultValue={""} onChange={e => e.persist()}>
      <option value="small"></option>
      <option value="large"></option>
      <option value="huge"></option>
      <option ></option>
    </select>
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2">
      </option>
      <option ></option>
    </select>
    <button className="ql-bold"></button><button className="ql-italic"></button>
    <button className="ql-underline"></button><button className="ql-strike"></button>
    <button className="ql-blockquote"></button><button className="ql-code-block"></button>
    <button type="button" className="ql-indent" value="-1" />
    <button type="button" className="ql-indent" value="+1" />
    <button type="button" className="ql-list" value="ordered" />
    <button type="button" className="ql-list" value="bullet" />
    <button type="button" className="ql-script" value="super" />
    <button type="button" className="ql-script" value="sub" />
    <button type="button" className="ql-link" />
    <button type="button" className="ql-image" />
    <button type="button" className="ql-direction" value="rtl" />
    <select className="ql-align">
      <option ></option>
      <option value="center"></option>
      <option value="right"></option>
      <option value="justify"></option>
    </select>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option ></option>
    </select>
    <select className="ql-background">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option ></option>
    </select>
    
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.modules={
      toolbar:{
        container: "#toolbar",
        handlers: {
          "insertStar": this.insertStar,
        }
      }
    };
  }
  handleChange=(value)=>{
    console.log(value);
    // this.setState({ text: value })
    this.props.handleChange(value);
  }
insertStar=()=>{
  console.log(this);
  // console.log(arguments);
  const cursorPosition = this.refs.quill.getEditor().getSelection().index
  this.refs.quill.getEditor().insertText(cursorPosition, "★")
  this.refs.quill.getEditor().setSelection(cursorPosition + 1)
}
  render() {
    return (
    <div>
      <CustomToolbar />
      <ReactQuill theme="snow" ref="quill"
                    modules={this.modules}
                    value={this.props.text}
                  onChange={this.handleChange}>
      </ReactQuill>
      <style jsx="true">
{`
.line_input{
 border:none;
 border-bottom:1px solid #000;
}
@page { margin: 0 }
body { margin: 0 }
.sheet {
  margin: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  page-break-after: always;
}

/** Paper sizes **/
.A3               .sheet { width: 297mm; height: 419mm }
.A3.landscape     .sheet { width: 420mm; height: 296mm }
.A4               .sheet { width: 210mm; height: 296mm }
.A4.landscape     .sheet { width: 297mm; height: 209mm }
.A5               .sheet { width: 148mm; height: 209mm }
.A5.landscape     .sheet { width: 210mm; height: 147mm }
.letter           .sheet { width: 216mm; height: 279mm }
.letter.landscape .sheet { width: 280mm; height: 215mm }
.legal            .sheet { width: 216mm; height: 356mm }
.legal.landscape  .sheet { width: 357mm; height: 215mm }

.ql-container{
  height: auto;
}

.ql-editor{
  width:210mm;
  height:auto;
  min-height:296mm;
}
/** Padding area **/
.sheet.padding-10mm { padding: 10mm }
.sheet.padding-15mm { padding: 15mm }
.sheet.padding-20mm { padding: 20mm }
.sheet.padding-25mm { padding: 25mm }

/** For screen preview **/
@media screen {
.quill{
  margin-top:110px;
  height:auto;
}
  body { background: #e0e0e0 }
  .sheet{
    background: white;
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    margin: 5mm auto;
  }
  .ql-editor {
    background: white;
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    margin: 5mm auto;
  }

}

/** Fix for Chrome issue #273306 **/
@media print {
  .only_screen{display: none}
           .A3.landscape { width: 420mm }
  .A3, .A4.landscape { width: 297mm }
  .A4, .A5.landscape { width: 210mm }
  .A5                    { width: 148mm }
  .letter, .legal    { width: 216mm }
  .letter.landscape      { width: 280mm }
  .legal.landscape       { width: 357mm }
}
`}
  </style>
    </div>
    )
  }
}
