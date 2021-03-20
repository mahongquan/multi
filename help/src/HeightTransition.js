import React, { Component } from 'react';
export default class HeightTransition extends Component {
  render() {
    //     var el = document.querySelector('.el')
    // var height = el.scrollHeight
    // el.style.setProperty('--max-height', height + 'px')

    return (
      <div className="trigger">
        <style jsx="true">{`
          .el {
            transition: max-height 0.5s;
            overflow: hidden;
            max-height: 0;
          }
          .trigger:hover > .el {
            max-height: var(--max-height);
          }
        `}</style>
        Hover me to see a height transition.
        <div className="el">
          <p>
            安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：
          </p>
        </div>
      </div>
    );
  }
}
