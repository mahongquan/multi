import React, { Component } from 'react';
import styled from 'styled-components';
import {Tag} from './Elem';
import Ace from './Ace';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// width:200px;
// height:200px;
// overflow:auto;
// ::-webkit-scrollbar {
//   width: 8px;
// }
// ::-webkit-scrollbar-track {
//   display:none;
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
// }
// ::-webkit-scrollbar-thumb {
//   display:none;
//   border-radius: 10px;
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
// }
// ::-webkit-scrollbar-button {
//   border-radius: 10px;
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
// }
const css=`

.react-tabs__tab-list{
  width:100%;
  height:50px;
  display:flex;
  overflow-y:hidden;
  overflow-x:auto;
}
.react-tabs__tab-list::-webkit-scrollbar {
  width: 8px;
}
.react-tabs__tab-list::-webkit-scrollbar-track {
  display:none;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.react-tabs__tab-list::-webkit-scrollbar-thumb {
  display:none;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.react-tabs__tab-list::-webkit-scrollbar-button {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

`;
export default class Root extends Component<Props> {
  state={css:css}
  cssChange=(newvalue)=>{
    this.setState({css:newvalue});
  }
  render() {
    return (
<div>
<Tag css={this.state.css}>
    <Tabs>
        <TabList>
          <Tab>AceEditor & GridExample</Tab>
          <Tab>Semantic-ui</Tab>
          <Tab>Layout1</Tab> 
          <Tab>storm diagrams</Tab>
          <Tab>react context</Tab>
          <Tab>Virtual Table Demo</Tab>
          <Tab>SS</Tab>
          <Tab>AceEditor & GridExample</Tab>
          <Tab>Semantic-ui</Tab>
          <Tab>Layout1</Tab> 
          <Tab>storm diagrams</Tab>
          <Tab>react context</Tab>
          <Tab>Virtual Table Demo</Tab>
          <Tab>SS</Tab>
        </TabList>
        <TabPanel>
          <div>11111111111111</div>
          
        </TabPanel>
        <TabPanel>
          <div>2222222222222222</div>
        </TabPanel>
        <TabPanel>
          <div>333333333333333</div>
        </TabPanel>
        <TabPanel>
          <div >4444444444444444</div>
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
        <TabPanel>
          <div>11111111111111</div>
          
        </TabPanel>
        <TabPanel>
          <div>2222222222222222</div>
        </TabPanel>
        <TabPanel>
          <div>333333333333333</div>
        </TabPanel>
        <TabPanel>
          <div >4444444444444444</div>
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
        <TabPanel>
          <div />
        </TabPanel>
      </Tabs>
</Tag>
<Ace css={this.state.css} cssChange={this.cssChange} />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
    

</div>
);
  }
}

