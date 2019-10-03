import React, { Component } from 'react';
// import Loader from './Loader';
import Loader2 from './Loader2';
import Circle from './Circle';
import GridLayout from './GridLayout';
import ScrollBar from './ScrollBar';
import CustomSelection from './CustomSelection';
import DynamicShadow from './DynamicShadow';
import Counter from './Counter';
import Last from './Last';
import AfterSvg from './AfterSvg';
import DonutSpinner from './DonutSpinner';
import EasingV from './EasingV';
import HeightTransition from './HeightTransition';
import AutosizeInput from 'react-input-autosize';
export default class Root extends Component<Props> {
  state = { value1: '' };
  updateInputValue = e => {
    this.setState({ value1: e.target.value });
  };
  render() {
    return (
      <div>
        <Loader2 />
        hello 。。。。
        <style jsx="true">
          {`
            .flex-container {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
            }
            .flex-item {
              margin-left: 10px;
            }
          `}
        </style>
        <React.Fragment>
          <div>hi</div>
          <AutosizeInput
            autoFocus
            value={this.state.value1}
            onChange={this.updateInputValue}
          />
        </React.Fragment>
        <DonutSpinner />
        <div
          style={{
            width: '0',
            height: '0',
            borderTop: '20px solid #333',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
          }}
        />
        <AfterSvg />
        <Last />
        <Counter />
        <DynamicShadow />
        <CustomSelection />
        <ScrollBar />
        <div style={{ width: '100px', height: '100px', overflow: 'auto' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
            exercitationem nulla qui repellat laborum vitae, molestias tempora
            velit natus. Quas, assumenda nisi. Quisquam enim qui iure,
            consequatur velit sit?
          </p>
        </div>
        <GridLayout />
        <HeightTransition />
        <EasingV />
        <p
          style={{
            background: '-webkit-linear-gradient(green, red)',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          Gradient text
        </p>
        <p
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: '200px',
          }}
        >
          If I exceed one line's width, I will be truncated.
        </p>
        <div className="flex-container">
          <Circle r="2rem" color="green" />

          <label className="flex-item">hi</label>
          <input className="flex-item" />
          <button className="flex-item">t1</button>
          <button className="flex-item">t1</button>
          <button className="flex-item">t1</button>
          <button className="flex-item">t1</button>
          <button className="flex-item">t1</button>
        </div>
      </div>
    );
  }
}
