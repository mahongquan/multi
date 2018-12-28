import React, { Component } from 'react';

import ContextMenuTrigger from './contextmenu/ContextMenuTrigger';
import ContextMenu from './contextmenu/ContextMenu';
import MenuItem from './contextmenu/MenuItem';
import { Modal } from 'react-bootstrap';
const MENU_TYPE = 'SIMPLE';

const targets = [
  {
    name: 'Banana',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Papaya',
  },
  {
    name: 'Mango',
  },
  {
    name: 'Orange',
  },
  {
    name: 'Pineapple',
  },
];

function collect(props) {
  return { name: props.name };
}

export default class Customization extends Component {
  constructor(props) {
    super(props);

    this.state = { logs: [], show_modal: false };
  }
  close = () => {
    this.setState({ show_modal: false });
  };
  handleClick = (e, data) => {
    this.setState(({ logs }) => ({
      logs: [`Clicked on ${data.name} menu ${data.item}`, ...logs],
    }));
  };
  onClick_show = () => {
    this.setState({ show_modal: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick_show}>show modal</button>
        <Modal
          show={this.state.show_modal}
          onHide={this.close}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>核对备料计划</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>仪器编号备料计划核对，请上传备料计划导出的Excel文件</p>
            <div style={{ minHeight: '200px' }}>
              <table className="table-bordered">
                <tbody>
                  <tr>
                    <td style={{ color: 'blue' }}>装箱单</td>
                    <td style={{ color: 'green' }}>备料计划</td>
                  </tr>
                  {targets.map((item, i) => (
                    <ContextMenuTrigger
                      renderTag="tr"
                      name={item.name}
                      id="menu2"
                      holdToDisplay={1000}
                      key={i}
                      collect={collect}
                    >
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                    </ContextMenuTrigger>
                  ))}
                </tbody>
              </table>
            </div>
            <div />
            <ContextMenu id="menu2">
              <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>
                Menu Item 1
              </MenuItem>
              <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>
                Menu Item 2
              </MenuItem>
            </ContextMenu>
          </Modal.Body>
        </Modal>
        <h3>Custom Wrappers</h3>
        <p>
          This demo shows usage of customization. Instead of using{' '}
          <code>div</code>(s) by default, we are using <code>tr</code>(s)
        </p>
        <table className="table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Fruit</th>
            </tr>
          </thead>
          <tbody>
            {targets.map((item, i) => (
              <ContextMenuTrigger
                renderTag="tr"
                id={MENU_TYPE}
                holdToDisplay={1000}
                key={i}
              >
                <td>{i + 1}</td>
                <td>{item.name}</td>
              </ContextMenuTrigger>
            ))}
          </tbody>
        </table>
        <div>
          {this.state.logs.map((log, i) => (
            <p key={i}>{log}</p>
          ))}
        </div>
        <ContextMenu id={MENU_TYPE}>
          <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>
            Menu Item 1
          </MenuItem>
          <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>
            Menu Item 2
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}
