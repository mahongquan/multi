import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


export default class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   editorState: EditorState.createEmpty(),
    // };
  }

  onEditorStateChange: Function = (editorState) => {
    this.props.handleChange(editorState);
    // this.setState({
    //   editorState,
    // });
  };

  render() {
    // const { editorState } = this.state;
    return (
      <Editor
        editorState={this.props.text}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}