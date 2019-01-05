import React, { Component } from 'react';
class Chapter{
    constructor(id,title,content2){
        this.id=id;
        this.title=title;
        this.content2=content2;
    }
    mulu=()=>{
        return(<li key={this.id}><a  href={"#"+this.id}>{this.title}</a></li>);
    }
    content=()=>{
       return(
    <div key={this.id}>
        <hr />
        <h1>{this.title}
          <span>
              <a className="mark" href={"#"+this.id} id={this.id}>#</a>
          </span>
        </h1>
        {this.content2}
    </div>
    );}
}
const chapter1=new Chapter("computer"
    ,"计算机配置"
    ,(<div>
        <p>计算机最低系统配置要求</p>
        <table>
            <tbody><tr><td>操作系统</td><td> Windows XP Home/Pro，Win7</td></tr>
            <tr><td>CPU</td><td>Intel Celeron 1GHz</td></tr><tr><td>内存</td><td>512MB</td></tr>
            <tr><td>硬盘存储空间</td><td>100MB</td></tr>
            </tbody>
        </table>
        <p>注：</p>
        <p>软件由钢研纳克检测技术于2013年发行，版权所有。最近版本号为：2013.0.0.0</p>
        <p>如有任何技术问题请与纳克技服中心联系。联系电话：010-62185005/7231/2154。</p>
    </div>)
);
const chapter2=new Chapter("register"
    ,"注册=========================================================================="
    ,(<div>
        <img src="./main.png"></img>
        <p>安装完软件后，从软件的界面上看，无法进行实验分析以及处理数据等操作，要想完全使用该软件，需要对软件进行注册。打开软件菜单栏的帮助，点击注册，此时将弹出该界面：</p>
        <img src="./about.png"></img>
        <p>产品的有效期为时间的最小值。说明软件未注册。此时点击“注册”按钮，将弹出该对话框：</p>
        <img src="./reg.png"></img>
        <p>输入仪器编号以及相应的序列号，点击确定，此时软件注册界面上将显示注册成功。</p>
    </div>)
)
const chapter3=new Chapter("chapter3"
    ,"hello"
    ,(<div>I am here</div>)
)
const chapters=[chapter1,chapter2,chapter3];

export default class Root extends Component<Props> {
  render() {
    const mulu=chapters.map((chapter,key)=>{
            return chapter.mulu();
    });
    const divchapts=chapters.map((chapter,key)=>{
            return chapter.content();
    });
    return (
<div id="content" className="clearfix" >
<style jsx="true">
{`
* {
  box-sizing: border-box;
}
html {
  font-size: 1rem;
  overflow-wrap: break-word;
}
body {
  margin: 0;
  padding: 0;
}    
  #column2 {
    width:200px;
    position: fixed;
  }
  #column1{
    max-width:800px;
    margin-left:200px;
    padding-left:10px;
    border-left:solid 1px;
  }
@media only screen and (max-width: 1024px) {
  #column1 {
    margin-left: 0;
    padding-left: .5rem;
    padding-right: .5rem;
    width: auto;
    overflow-y: visible;
  }
  #column2 {
    display: none;
  }
}
`}
</style>
    <div id="column2">
      <ul>
      <li>
        <a href="#" title="Go back to the home page">
          CS3000
        </a>
      </li>
      </ul>
      <ul>{mulu}</ul>
      <ul>
        <li><a href="#">钢研纳克</a></li>
      </ul>
    </div>
    <div id="column1">
      <header>
        <h1>CS3000使用说明</h1>
        <hr />
      </header>
      <h2>目录</h2>
      <ul>{mulu}</ul>
      {divchapts}
    </div>
  </div>
    );
  }
}

