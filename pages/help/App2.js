import React, { Component } from 'react';
class Chapter {
  constructor(id, title, content2) {
    this.id = id;
    this.title = title;
    this.content2 = content2;
  }
  mulu = () => {
    return (
      <li key={this.id}>
        <a href={'#' + this.id}>{this.title}</a>
      </li>
    );
  };
  content = () => {
    return (
      <div key={this.id}>
        <h1>
          {this.title}
          <span>
            <a className="mark" href={'#' + this.id} id={this.id}>
              #
            </a>
          </span>
        </h1>
        {this.content2}
      </div>
    );
  };
}
const chapter1 = new Chapter(
  'computer',
  '计算机配置',
  (
    <div>
      <p>计算机最低系统配置要求</p>
      <table>
        <tbody>
          <tr>
            <td>操作系统</td>
            <td> Windows XP Home/Pro，Win7</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Intel Celeron 1GHz</td>
          </tr>
          <tr>
            <td>内存</td>
            <td>512MB</td>
          </tr>
          <tr>
            <td>硬盘存储空间</td>
            <td>100MB</td>
          </tr>
        </tbody>
      </table>
      <p>注：</p>
      <p>
        软件由钢研纳克检测技术于2013年发行，版权所有。最近版本号为：2013.0.0.0
      </p>
      <p>
        如有任何技术问题请与纳克技服中心联系。联系电话：010-62185005/7231/2154。
      </p>
    </div>
  )
);
const chapter2 = new Chapter(
  'register',
  '注册',
  (
    <div>
      <img src="./main.png" />
      <p>
        安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：
      </p>
      <img src="./about.png" />
      <p>
        产品的有效期为时间的最小值。说明软件未注册。此时点击“注册”按钮，将弹出该对话框：
      </p>
      <img src="./reg.png" />
      <p>
        输入仪器编号以及相应的序列号，点击确定，此时软件注册界面上将显示注册成功。
      </p>
    </div>
  )
);
const chapter3 = new Chapter('chapter3', 'hello', <div>I am here</div>);
const chapters = [chapter1, chapter2, chapter3];

export default class Root extends Component<Props> {
  render() {
    const mulu = chapters.map((chapter, key) => {
      return chapter.mulu();
    });
    const divchapts = chapters.map((chapter, key) => {
      return chapter.content();
    });
    return (
      <div id="content" className="clearfix">
        <style jsx="true">{`
          /*--------------------- Layout and Typography ----------------------------*/
          html {
            font-size: 1rem;
            overflow-wrap: break-word;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-variant-ligatures: none;
            font-variant-ligatures: none;
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode',
              'Lucida Sans', Verdana, Tahoma, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background: #fff;
          }

          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.75rem;
          }
          h4 {
            font-size: 1.5rem;
          }
          h5 {
            font-size: 1.25rem;
          }
          h6 {
            font-size: 1rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 1.5rem 0 1rem;
          }

          tt,
          span.type,
          a.type {
            font-family: Monaco, Consolas, 'Lucida Console', monospace;
            font-size: 0.9em;
          }

          #content {
            position: relative;
          }

          a,
          a:link,
          a:active {
            color: #43853d;
            text-decoration: none;
            border-radius: 2px;
            padding: 1px 3px;
          }

          a:hover,
          a:focus {
            color: #fff;
            background-color: #43853d;
            outline: none;
          }

          strong {
            font-weight: 700;
          }

          em {
            font-style: normal;
          }

          #gtoc > ul > li:last-child {
            border-right: none;
            margin-right: 0;
            padding-right: 0;
          }

          .line {
            width: calc(100% - 1rem);
            display: block;
            padding-bottom: 1px;
          }

          ul.plain {
            list-style: none;
          }

          abbr {
            border-bottom: 1px dotted #454545;
          }

          p {
            text-rendering: optimizeLegibility;
            margin: 0 0 1.125rem 0;
            line-height: 1.5;
          }

          #apicontent > *:last-child {
            margin-bottom: 0;
            padding-bottom: 2rem;
          }

          table {
            border-collapse: collapse;
            margin: 0 0 1.5rem 0;
          }

          th,
          td {
            border: 1px solid #aaa;
          }

          th {
            text-align: left;
          }

          ol,
          ul,
          dl {
            margin: 0 0 0.6rem 0;
            padding: 0;
          }

          ol ul,
          ol ol,
          ol dl,
          ul ul,
          ul ol,
          ul dl,
          dl ul,
          dl ol,
          dl dl {
            margin-bottom: 0;
          }

          ul,
          ol {
            margin-left: 2rem;
          }

          dl dt {
            position: relative;
            margin: 1.5rem 0 0;
          }

          dl dd {
            position: relative;
            margin: 0 1rem 0;
          }

          dd + dt.pre {
            margin-top: 1.6rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            text-rendering: optimizeLegibility;
            font-weight: 700;
            position: relative;
          }

          #apicontent {
            padding-top: 1rem;
          }

          #apicontent .line {
            width: calc(50% - 1rem);
            margin: 1rem 1rem 0.95rem;
            background-color: #ccc;
          }

          h2 + h2 {
            margin: 0 0 0.5rem;
          }

          h3 + h3 {
            margin: 0 0 0.5rem;
          }

          h2,
          h3,
          h4,
          h5 {
            position: relative;
            padding-right: 40px;
          }

          h1 span,
          h2 span,
          h3 span,
          h4 span {
            position: absolute;
            display: block;
            top: 0;
            right: 0;
          }

          h1 span:hover,
          h2 span:hover,
          h3 span:hover,
          h4 span:hover {
            opacity: 1;
          }

          h1 span a,
          h2 span a,
          h3 span a,
          h4 span a {
            color: #000;
            text-decoration: none;
            font-weight: bold;
          }

          #intro {
            margin-top: 1.25rem;
            margin-left: 1rem;
          }

          #intro a {
            color: #ddd;
            font-weight: bold;
          }

          hr {
            background: none;
            border: medium none;
            border-bottom: 1px solid #7a7a7a;
            margin: 0 0 1rem 0;
          }

          #toc h2 {
            margin-top: 0;
            line-height: 0;
            margin: 1.5rem 0;
          }

          #toc ul a {
            text-decoration: none;
          }

          #toc ul li {
            margin-bottom: 0.666rem;
            list-style: square outside;
          }

          #toc li > ul {
            margin-top: 0.666rem;
          }

          #toc .stability_0::after {
            background-color: #d50027;
            color: #fff;
          }

          #toc .stability_0::after {
            content: 'deprecated';
            margin-left: 0.25rem;
            padding: 1px 3px;
            border-radius: 3px;
          }

          #apicontent li {
            margin-bottom: 0.5rem;
          }

          #apicontent li:last-child {
            margin-bottom: 0;
          }

          tt,
          code {
            color: #040404;
            background-color: #f2f2f2;
            border-radius: 2px;
            padding: 1px 3px;
          }

          .api_stability code {
            background: rgba(0, 0, 0, 0.1);
          }

          a code {
            color: inherit;
            background: inherit;
            padding: 0;
          }

          .type {
            line-height: 1.5rem;
          }

          #column1.interior {
            margin-left: 234px;
            padding: 0 2rem;
            -webkit-padding-start: 1.5rem;
          }

          #column2.interior {
            width: 234px;
            background: #333;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            overflow-x: hidden;
            overflow-y: scroll;
          }

          #column2 ul {
            list-style: none;
            margin: 0.9rem 0 0.5rem;
            background: #333;
          }

          #column2 > :first-child {
            margin: 1.25rem;
            font-size: 1.5rem;
          }

          #column2 > ul:nth-child(2) {
            margin: 1.25rem 0 0.5rem;
          }

          #column2 > ul:last-child {
            margin: 0.9rem 0 1.25rem;
          }

          #column2 ul li {
            padding-left: 1.25rem;
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
          }

          #column2 .line {
            margin: 0 0.5rem;
            background-color: #707070;
          }

          #column2 ul li:last-child {
            margin-bottom: 0;
          }

          #column2 ul li a {
            color: #ccc;
            border-radius: 0;
          }

          #column2 ul li a.active,
          #column2 ul li a.active:hover,
          #column2 ul li a.active:focus {
            color: #43853d;
            border-radius: 0;
            border-bottom: 1px solid #43853d;
            background: none;
          }

          #intro a:hover,
          #intro a:focus,
          #column2 ul li a:hover,
          #column2 ul li a:focus {
            color: #fff;
            background: none;
          }

          span > .mark,
          span > .mark:visited {
            color: #707070;
            position: absolute;
            top: 0px;
            right: 0px;
          }

          span > .mark:hover,
          span > .mark:focus,
          span > .mark:active {
            color: #43853d;
            background: none;
          }

          th,
          td {
            padding: 0.75rem 1rem 0.75rem 1rem;
            vertical-align: top;
          }

          th > *:last-child,
          td > *:last-child {
            margin-bottom: 0;
          }

          /* simpler clearfix */
          .clearfix:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }

          @media only screen and (max-width: 1024px) {
            #content {
              overflow: visible;
            }
            #column1.interior {
              margin-left: 0;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              width: auto;
              overflow-y: visible;
            }
            #column2 {
              display: none;
            }
          }

          @media print {
            html {
              height: auto;
            }
            #column2.interior {
              display: none;
            }
            #column1.interior {
              margin-left: auto;
              overflow-y: auto;
            }
          }
        `}</style>
        <div id="column2" className="interior">
          <div id="intro" className="interior">
            <a href="#" title="Go back to the home page">
              CS3000
            </a>
          </div>
          <div className="line" />
          <ul> {mulu}</ul>
          <div className="line" />
          <ul>
            <li>
              <a href="#">钢研纳克</a>
            </li>
          </ul>
        </div>
        <div id="column1" data-id="all" className="interior">
          <header>
            <h1>CS3000使用说明</h1>
            <hr />
          </header>
          <div id="toc">
            <h2>目录</h2>
            <ul>{mulu}</ul>
          </div>
          <div id="apicontent">{divchapts}</div>
        </div>
      </div>
    );
  }
}
