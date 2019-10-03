import React from 'react';
import RichTextEditor from 'react-rte';
export default class Rte extends React.Component{
  constructor(){
    super();
    this.state={rich:RichTextEditor.createEmptyValue()}
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.text != nextProps.text){
      this.setState({rich:RichTextEditor.createValueFromString(nextProps.text,"html")});
    }
  }
  handleChange=(value)=>{
    this.props.handleChange(value.toString("html"));
    this.setState({rich:value});
  }

  render=()=>{
    // let rich=RichTextEditor.createValueFromString(this.props.text,"html")
    return <RichTextEditor 
                        value={this.state.rich}
                        onChange={this.handleChange}
    />;
  }
}