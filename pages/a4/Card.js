import React from 'react';
export default class Card extends React.Component{
  render=()=>{
    return(
  <div style={{
            position:"relative"
            ,width:"210mm"
            ,height:"148mm"
            ,border:"solid 1px"
          }}>
    <div style={{
            padding:"100px 100px 100px 100px"
          }}>
        <p style={{marginTop:"40px",textAlign:"center",fontSize:"20px"}}>
                <font face="SimHei">北京科技大学预收款凭条&emsp;&emsp;&emsp;No&emsp;{this.props.start}</font>
      </p>
      <p style={{textAlign:"center",fontSize:"15px"}}>（不作报销凭证）</p>
      <div style={{height:"1em"}}></div>
            <p>
          <span>今收到</span>
               <input type="text"  className="line_input"  style={{width:"130mm"}}/>
            </p>
            <p>
                <span>交&emsp;来</span>
                <input type="text"  className="line_input"  style={{width:"130mm"}} />
            </p>
            <p>
                <span>人民币（大写）</span>
                <input type="text"  className="line_input"   style={{width:"54mm"}} />
                <span>￥</span>
                <input type="text"  className="line_input"   style={{width:"52mm"}} />
            </p>
            <div style={{height:"2em"}}></div>
            <p>
                <span>收款单位</span>
                <span style={{margin:"0 0 0 38mm"}}>收款人</span>
            </p>
            <p>
                <span>(公章)</span>
                <input type="text"  className="line_input"/>
                <span >(签章)</span>
                <input type="text"  className="line_input"/>
                <span >&emsp;&emsp;&emsp;年&emsp;月&emsp;日</span>
             </p>
    </div>
    <div style={{padding:"3px 3px 3px 3px"
               ,writingMode:"tb-rl"
               ,position:"absolute"
               ,width:"1em"
               ,top:"50mm",left:"190mm"}}>
       {this.props.lian}
    </div>
    </div>);
  }
}