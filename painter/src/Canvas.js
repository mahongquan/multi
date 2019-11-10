import React, { Component } from 'react';
import PropTypes from 'proptypes';
export default class ReactPaint extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object.isRequired,//canvas style
    height: PropTypes.number,
    width: PropTypes.number,
    brushCol: PropTypes.string,
    lineWidth: PropTypes.number,
    onDraw: PropTypes.func,
  };
  static defaultProps = {
    className: 'react-paint',
    style: {left:0,top:0},
    height: 500,
    width: 500,
    brushCol: '#13aa00',
    lineWidth: 10,
    onDraw: () => {},
  };

  constructor(...props) {
    super(...props);
    this.ref1=React.createRef();
    this.state = {
      mouseDown: false,
      mouseLoc: [0, 0],
    };
  }

  componentDidMount() {
    
    this.resetContext();
    
    // console.log("==========")
    // console.log(this.bb);

  }
  resetContext=()=>{
    const { brushCol, lineWidth } = this.props;
    this.canvas=this.ref1.current;
    this.context = this.canvas.getContext('2d');
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = brushCol;
    this.context.lineJoin = this.context.lineCap = 'round';    
    this.bb = this.ref1.current.getBoundingClientRect();
  }
  componentWillUpdate(nextProps) {
    const { brushCol, lineWidth } = this.props;
    console.log(nextProps);

    if (    (nextProps.brushCol &&  brushCol !== nextProps.brushCol)
         || (nextProps.lineWidth &&  lineWidth !== nextProps.lineWidth) )
    {
      this.context.lineWidth = nextProps.lineWidth;
      this.context.strokeStyle = nextProps.brushCol;
    }
  }

  mouseDown = e => {
    if(!this.context.lineTo){this.resetContext();}
    if (!this.state.mouseDown) this.setState({ mouseDown: true });
    this.setState({
      mouseLoc: [e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY],
    });

    this.context.moveTo(
      (e.clientX || e.touches[0].clientX) - this.bb.left,
      (e.clientY || e.touches[0].clientY) - this.bb.top
    );
  }

  mouseUp = () => (this.setState({ mouseDown: false }));

  mouseMove = e => {
    if(!this.context.lineTo){this.resetContext();}
    if (this.state.mouseDown) {
      if (e.touches) e.preventDefault();
        this.context.lineTo(
          ((e.clientX || e.touches[0].clientX) - this.bb.left),
          ((e.clientY || e.touches[0].clientY) - this.bb.top)
        );

        this.context.stroke();
      // }
    }
  }

  render() {
    const {
      width,
      height,
      onDraw,
      style,
      className,
    } = this.props;
    // console.log(this.ref1);

    return (
      <div className={className} style={{width:this.props.width
        ,height:this.props.height,backgroundColor:"#ccc"}}>
        <canvas
          id={this.props.id}
          ref={this.ref1}
          className={`${className}__canvas`}

          width={width}
          height={height}

          onClick={onDraw}

          style={
            Object.assign({}, style, {
              width: this.props.width,
              height: this.props.height,
            })
          }

          onMouseDown={this.mouseDown}
          onTouchStart={this.mouseDown}

          onMouseUp={this.mouseUp}
          onTouchEnd={this.mouseUp}

          onMouseMove={this.mouseMove}
          onTouchMove={this.mouseMove}
        />
      </div>
    );
  }
}


export { ReactPaint };
