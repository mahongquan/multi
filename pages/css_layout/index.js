import React, { Component } from 'react';
import Link from 'next/link';
import Elem, { Tag, NavWrapper, LinkPrev, LinkStyle, A } from './Elem';
import styled from 'styled-components';
import Ace from './Ace';
import Head from 'next/head';
const menu_style = `
background-color: whiteSmoke;
text-align: center;
>a{
  color: #8F8F8F;
  display: inline-block;
  padding: .5em 1em;
  text-shadow: 0 1px 0 #EDEDED;
  text-decoration: none;
  &:hover {
    background: rgb(220, 220, 220);
  }
  @media screen and (min-width: 601px) {
    display: block;
    padding: 0.2em 0;
  }
}
@media screen and (min-width: 601px) {
  position: absolute;
  top: -16px;
  left: -20px;
  width: 250px;
  padding-top: 2em;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(-35deg) translate(-92px, 22px); /* Safari 3.1+, Chrome */
  -moz-transform: rotate(-35deg) translate(-92px, 22px); /* Firefox 3.5-15 */
  -ms-transform: rotate(-35deg) translate(-92px, 22px); /* IE9+ */
  -o-transform: rotate(-35deg) translate(-92px, 22px); /* Opera 10.5-12.00 */
  transform: rotate(-35deg) translate(-92px, 22px); /* Firefox 16+, Opera 12.50+ */
}
`;
const logo_style = `
text-align: center;
background-color: #ededed;
padding: 1em 0;

>a {
  text-decoration: none;
  color: #414142;
  position: relative;
  &:active {
    background: none;
  }
  >span {
      vertical-align: middle;
      font-size: 2em;
      font-family: 'Bree Serif', serif;
      margin-left: 0.2em;
      @media screen and (max-width: 404px) {
        font-size: 1.5em;
      }
  }
  >img {
      vertical-align: middle;
      
      @media screen and (max-width: 600px) {
            width: 15%;
      }
  }
}
`;
const pages = [
  'index',
  'no-layout',
  'display',
  'margin-auto',
  'max-width',
  'box-model',
  'box-sizing',
  'position',
  'position-example',
  'float',
  'clear',
  'clearfix',
  'float-layout',
  'percent',
  'media-queries',
  'inline-block',
  'inline-block-layout',
  'column',
  'flexbox',
  'frameworks',
  'about',
];
class Root extends Component {
  constructor() {
    super();
    this.state = {
      style_box: menu_style,
      logo_style: logo_style,
    };
  }
  static async getInitialProps(a){
    return {pathname:a.pathname};
  }
  onChange = newValue => {
    this.setState({
      style_box: newValue,
    });
  };
  onChange_logo = newValue => {
    this.setState({
      logo_style: newValue,
    });
  };
  getPrevNext = () => {
    let prev, next, at;
    for (var i = 0; i < pages.length; i++) {
      if (this.props.url.pathname.indexOf(pages[i]) >= 0) {
        prev = i - 1;
        next = i + 1;
        if (prev >= 0) {
          prev = pages[prev];
        } else {
          prev = undefined;
        }
        if (next < pages.length) {
          next = pages[next];
        } else {
          next = undefined;
        }
        at = i;
        break;
      }
    }
    return [prev, next, at];
  };
  render() {
    console.log(this.props);
    let visible_home, visible_toc, disable_home;
    if (this.props.url.pathname==='/css_layout') 
    {
      visible_home = 'hidden';
      disable_home = '';
    } else {
      visible_home = 'visible';
      disable_home = 'index';
    }
    if (this.props.url.pathname.indexOf('toc') >= 0) 
    {
      visible_toc = 'hidden';
    } else {
      visible_toc = 'visible';
    }
    var arr1 = this.getPrevNext();
    let prev = arr1[0];
    let next = arr1[1];
    let i = arr1[2] + 1;
    if (prev) {
      prev = <LinkPrev to={prev}>Previous</LinkPrev>;
    }
    if (next) {
      next = <LinkPrev to={next}>Next</LinkPrev>;
    }
    let nav;
    if (prev || next) {
      nav = (
        <div>
          <NavWrapper>
            {prev}
            {next}
          </NavWrapper>
          <footer>{i} / 21</footer>
        </div>
      );
    }
    return (
      <div>
        <style jsx="true">{`
          html {
            font-size: 1rem;
            overflow-wrap: break-word;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-variant-ligatures: none;
            font-variant-ligatures: none;
          }
          body {
            margin: 0;
            padding: 0 0 1em 0;
            font-size: 1em;
            line-height: 1.5em;
            color: #414142;
            font-family: Arial;
            background-color: #ededed;
          }

          * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          a:link {
            color: #d64078;
            text-decoration: none;
          }

          a:visited {
            color: #d64078;
          }

          a:hover {
            text-decoration: underline;
          }

          a:active {
            background-color: black;
            color: white;
          }
          img {
            max-width: 100%;
          }

          p {
            margin: 1em 0;
          }

          p code,
          li code {
            background-color: #ececec;
          }

          h1,
          h2 {
            font-family: 'Bree Serif', serif;
            font-weight: normal;
          }

          h1 {
            margin: 1.5em 0;
            font-weight: normal;
            text-align: center;
          }

          h2 {
            font-family: 'Bree Serif', serif;
            margin: 1.2em 0;
            font-weight: normal;
          }
          #container {
            padding: 1em;
            margin: 0 0 1em 0;
            background-color: white;
          }

          .content {
            max-width: 600px;
            margin: 1em auto;
          }

          h1.content {
            margin: 0.5em auto 1em;
          }

          .ipsum {
            color: #734161;
            background-color: #eee;
          }

          .highlight {
            margin: 2em auto;
            max-width: 600px;
            line-height: 1.2em;
            font-size: 16px;
            direction: ltr;
          }
          footer {
            text-align: center;
          }
        `}</style>
        <Tag css={this.state.logo_style} id="logo">
          <Link href={disable_home}>
            <span>Learn CSS Layout</span>
          </Link>
        </Tag>
        <Tag css={this.state.style_box}>
          <Link style={{ marginRight: '1em', visibility: visible_home }} href="/css_layout">
            Home
          </Link>
          <Link style={{ visibility: visible_toc }} href="/css_layout/toc">
            Table of Contents
          </Link>
        </Tag>
        <div id="container">{this.props.children}</div>
        {nav}
        <div style={{ minHeight: '100px' }} />
        <Ace css={this.state.logo_style} cssChange={this.onChange_logo} />
      </div>
    );
  }
}
export default Root;
