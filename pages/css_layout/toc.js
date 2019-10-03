import React, { Component } from 'react';
import { Tag } from './Elem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/theme/github';

const Toc_style = `
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
    justify-content:flex-start;
    @media screen and (min-width: 601px) {
       height: 650px; //two column
    }
a{    
  width: 15em;
  margin: 0.5em;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
  color: white;
  background-color: #d64078;
  border: solid #b03060 1px;
  border-bottom: solid #b03060 4px;
  text-shadow: 0px 2px 0 #b03060;
  border-radius: 0.3em;
  position: relative;
  -webkit-transition: all 0.1s ease-out; /* Safari 3.2+, Chrome */
  -moz-transition: all 0.1s ease-out; /* Firefox 4-15 */
  -o-transition: all 0.1s ease-out; /* Opera 10.5â12.00 */
  transition: all 0.1s ease-out; /* Firefox 16+, Opera 12.50+ */
  &:link {
    color: white;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    background-color: #c63b6f;
  }

  &:active {
    border-bottom: solid #b03060 1px;
    top: 4px;
    -webkit-transition: all 0 ease-out; /* Safari 3.2+, Chrome */
    -moz-transition: all 0 ease-out; /* Firefox 4-15 */
    -o-transition: all 0 ease-out; /* Opera 10.5â12.00 */
    transition: all 0 ease-out; /* Firefox 16+, Opera 12.50+ */
  }   
} 
`;

export default class toc extends Component {
  constructor() {
    super();
    this.state = {
      style_box: Toc_style,
      mode: 'css',
      displayAce: 'none',
    };
  }
  onChange = newValue => {
    this.setState({
      style_box: newValue,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="content" style={{ position: 'relative' }}>
          <h1 className="content">Table of Contents</h1>
          <Tag css={this.state.style_box}>
            <Link to="no-layout.html">no layout</Link>
            <Link to="display.html">the &quot;display&quot; property</Link>

            <Link to="margin-auto.html">margin: auto;</Link>

            <Link to="max-width.html">max-width</Link>

            <Link to="box-model.html">the box model</Link>

            <Link to="box-sizing.html">box-sizing</Link>

            <Link to="position.html">position</Link>

            <Link to="position-example.html">position example</Link>

            <Link to="float.html">float</Link>

            <Link to="clear.html">clear</Link>

            <Link to="clearfix.html">the clearfix hack</Link>

            <Link to="float-layout.html">float layout example</Link>

            <Link to="percent.html">percent width</Link>

            <Link to="media-queries.html">media queries</Link>

            <Link to="inline-block.html">inline-block</Link>

            <Link to="inline-block-layout.html">inline-block layout</Link>

            <Link to="column.html">column</Link>

            <Link to="flexbox.html">flexbox</Link>

            <Link to="frameworks.html">css frameworks</Link>

            <Link to="about.html">about this site</Link>
          </Tag>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <button
              onClick={() => {
                if (this.state.displayAce == 'none') {
                  this.setState({ displayAce: 'block' });
                } else {
                  this.setState({ displayAce: 'none' });
                }
              }}
            >
              edit style
            </button>
            <AceEditor
              ref="editor"
              style={{
                display: this.state.displayAce,
                width: '350px',
                height: '250px',
                border: 'solid gray 5px',
              }}
              mode={this.state.mode}
              theme="github"
              value={this.state.style_box}
              onChange={this.onChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
