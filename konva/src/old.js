      // var rect = new Konva.Rect({
      //   x: 50,
      //   y: 50,
      //   width: 100,
      //   height: 50,
      //   fill: 'green',
      //   stroke: 'black',
      //   strokeWidth: 4,
      //   draggable:true,
      // });

      // // add the shape to the layer
      // layer.add(rect);
      // var path = new Konva.Path({
      //   x: 240,
      //   y: 40,
      //   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
      //   fill: 'green',
      //   scale: 2,
      //   draggable:true,
      // });
      // layer.add(path);
      // var text = new Konva.Text({
      //   x: 10,
      //   y: 15,
      //   text: 'Simple Text',
      //   fontSize: 30,
      //   fontFamily: 'Calibri',
      //   fill: 'green',
      //   draggable:true,
      // });
      // layer.add(text);
      // // var arc = new Konva.Arc({
      // //   x: 10,
      // //   y: 15,
      // //   innerRadius: 40,
      // //   outerRadius: 80,
      // //   fill: 'red',
      // //   stroke: 'black',
      // //   strokeWidth: 5,
      // //   angle: 60,
      // //   rotation: -120
      // // });
      // // layer.add(arc);
      // var triangle = new Konva.Shape({
      //   sceneFunc: function ( ctx ) {
      //     // 自定义绘图路径
      //     ctx.moveTo( window.innerWidth / 2, window.innerHeight / 4 );
      //     ctx.lineTo( window.innerWidth / 2 - window.innerHeight / ( 2 * 1.732 ), window.innerHeight * 3 / 4 );
      //     ctx.lineTo( window.innerWidth / 2 + window.innerHeight / ( 2 * 1.732 ), window.innerHeight * 3 / 4 );
      //     ctx.closePath();
      //     // Konva.js 的独有方法
      //     ctx.fillStrokeShape( this );
      //    },
      //    x:0,y:0,
      //    fill: 'pink',
      //    stroke: 'red',
      //    draggable:true,
      // });
      // layer.add(triangle);
      // layer.draw();
      // var velocity = 50;

      // var anim = new Konva.Animation(function(frame) {
      //   var dist = velocity * (frame.timeDiff / 1000);
      //   path.move(dist, 0);
      // }, layer);

      // anim.start();
      // var tween = new Konva.Tween({
      //   node: path,
      //   rotationDeg: 360,
      //   duration: 1,
      //   easing: Konva.Easings.EaseInOut
      // });

      // // play tween
      // tween.play();
// class MyRect2 extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       color: 'green'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   componentDidMount() {
//     this.rect.cache();
//   }
//   handleClick() {
//     this.setState(
//       {
//         color: Konva.Util.getRandomColor()
//       },
//       () => {
//         // IMPORTANT
//         // recache on update
//         this.rect.cache();
//       }
//     );
//   }
//   render() {
//     return (
//       <Rect
//         filters={[Konva.Filters.Noise]}
//         noise={1}
//         x={10}
//         y={10}
//         width={50}
//         height={50}
//         fill={this.state.color}
//         shadowBlur={10}
//         ref={node => {
//           this.rect = node;
//         }}
//         onClick={this.handleClick}
//       />
//     );
//   }
// }
// class ColoredRect extends React.Component {
//   state = {
//     color: 'green'
//   };

//   handleClick = () => {
//     this.setState({
//       color: Konva.Util.getRandomColor()
//     });
//   };
//   render() {
//     return (
//       <Rect
//         x={20}
//         y={20}
//         width={50}
//         height={50}
//         draggable="true"
//         fill={this.state.color}
//         shadowBlur={5}
//         onClick={this.handleClick}
//       />
//     );
//   }
// }
// class MyRect extends React.Component {
//   changeSize() {
//     const rect = this.refs.rect;

//     // to() is a method of `Konva.Node` instances
//     rect.to({
//       scaleX: Math.random() + 0.8,
//       scaleY: Math.random() + 0.8,
//       duration: 0.2
//     });
//   }
//   render() {
//     return (
//       <Group>
//         <Rect
//           ref="rect"
//           width="50"
//           height="50"
//           fill="green"
//           draggable="true"
//           onDragEnd={this.changeSize.bind(this)}
//           onDragStart={this.changeSize.bind(this)}
//         />
//       </Group>
//     );
//   }
// }