import React, { Component } from 'react';
import { Tag } from './Elem';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/theme/github';
import { Link } from 'react-router-dom';
const LinkToc = styled(Link)`
  &:link {
    color: #d64078;
    text-decoration: none;
  }

  &:visited {
    color: #d64078;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    background-color: black;
    color: white;
  }
`;
const Toc_style = `
    display:inline-flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:flex-start;
    align-content:center;
    justify-content:flex-start;
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
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <h3 className="content">Table of Contents</h3>
        <Tag css={this.state.style_box}>
          <LinkToc to="no-layout.html">no layout</LinkToc>
          <LinkToc to="display.html">the &quot;display&quot; property</LinkToc>

          <LinkToc to="margin-auto.html">margin: auto;</LinkToc>

          <LinkToc to="max-width.html">max-width</LinkToc>

          <LinkToc to="box-model.html">the box model</LinkToc>

          <LinkToc to="box-sizing.html">box-sizing</LinkToc>

          <LinkToc to="position.html">position</LinkToc>

          <LinkToc to="position-example.html">position example</LinkToc>

          <LinkToc to="float.html">float</LinkToc>

          <LinkToc to="clear.html">clear</LinkToc>

          <LinkToc to="clearfix.html">the clearfix hack</LinkToc>

          <LinkToc to="float-layout.html">float layout example</LinkToc>

          <LinkToc to="percent.html">percent width</LinkToc>

          <LinkToc to="media-queries.html">media queries</LinkToc>

          <LinkToc to="inline-block.html">inline-block</LinkToc>

          <LinkToc to="inline-block-layout.html">inline-block layout</LinkToc>

          <LinkToc to="column.html">column</LinkToc>

          <LinkToc to="flexbox.html">flexbox</LinkToc>

          <LinkToc to="frameworks.html">css frameworks</LinkToc>

          <LinkToc to="about.html">about this site</LinkToc>
        </Tag>
      </div>
    );
  }
}
