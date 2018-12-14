import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import DropDown from './DropDown';
export default class DropDownExample extends React.Component {
  render() {
    return (
      <DropDown>
        <MenuItem  onClick={()=>{
          console.log("MenuItem 1")
        }}>111111</MenuItem>
        <MenuItem    onClick={()=>{
          console.log("MenuItem 3")
        }}>3333333333</MenuItem>
      </DropDown>
    );
  }
}


