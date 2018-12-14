import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import green from 'material-ui/colors/green';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import Input, { InputLabel } from 'material-ui/Input';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  buttonWrapper: {
    position: 'relative',
    marginBottom: theme.spacing.unit * 4,
  },
  anchor: {
    backgroundColor: green[500],
    width: 10,
    height: 10,
    borderRadius: '50%',
    position: 'absolute',
  },
  radioAnchor: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

const inlineStyles = {
  anchorVertical: {
    top: {
      top: -5,
    },
    center: {
      top: 'calc(50% - 5px)',
    },
    bottom: {
      bottom: -5,
    },
  },
  anchorHorizontal: {
    left: {
      left: -5,
    },
    center: {
      left: 'calc(50% - 5px)',
    },
    right: {
      right: -5,
    },
  },
};

class DropDown extends React.Component {
  state = {
    open: false,
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'left',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: 'anchorEl',
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleNumberInputChange = key => event => {
    this.setState({
      [key]: parseInt(event.target.value, 10),
    });
  };

  handleClickButton = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  anchorEl = null;

  render() {
    const { classes } = this.props;
    const {
      open,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
    } = this.state;


    const radioAnchorClasses = { root: classes.radioAnchor, checked: classes.checked };
    this.anchorEl=this.myRef.current;

    return (
      <div>
      <span  ref={this.myRef} onClick={this.handleClickButton}
       className="glyphicon glyphicon-chevron-down"></span>
        <Popover
          open={open}
          anchorEl={this.anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal,
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal,
          }}
        >
        {this.props.children}
        </Popover>
      </div>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropDown);