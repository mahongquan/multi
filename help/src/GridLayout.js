import React, { Component } from 'react';
export default class Root extends Component<Props> {
  render() {
    return (
<div className="grid-layout">
  <style jsx="true">
  {`
.grid-layout {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'sidebar header header'
    'sidebar content content'
    'sidebar footer  footer';
  color: white;
}
.grid-layout > div {
  background: #333;
  padding: 10px;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
  `}
</style>
  <div className="header">Header <p>安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：</p></div>
  <div className="sidebar">Sidebar<p>安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：</p></div>
  <div className="content">
    Content <p>安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：</p>
    <br />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </div>
  <div className="footer">Footer <p>安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：</p></div>
</div>
    );
  }
}

