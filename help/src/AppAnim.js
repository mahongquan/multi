import React, { Component } from 'react';
//     <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
// <script>
//   function testAnim(x) {
//     $('#animationSandbox').removeClass().addClass(x + ' animated')
//.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//       $(this).removeClass();
//     });
//   };

//   $(document).ready(function(){
//     $('.js--triggerAnimation').click(function(e){
//       e.preventDefault();
//       var anim = $('.js--animations').val();
//       testAnim(anim);
//     });

//     $('.js--animations').change(function(){
//       var anim = $(this).val();
//       testAnim(anim);
//     });
//   });
export default class Root extends Component<Props> {
state={selectValue:"bounce"}
updateValue=(e)=>{
    //console.log(e.target.value);
    this.setState({
      selectValue: e.target.value+' animated',
    });
    setTimeout(this.check,1000);
}
componentDidMount=() => {
   
}
animationEnd = (el)=> {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
  return 
}

check=()=>{
  if(this.animationEnd(this.refs.contactedit)){
    console.log("end");
    this.setState({selectValue:""})
  }
  else{
      setTimeout(this.check,1000);
  }
}
  render() {
    console.log("render");
    console.log(this.state);
    return (
  <div>
  <style jsx="true">{`
/*-----------------------------------*\
  $RESET
\*-----------------------------------*/

body {
  overflow-x: hidden;
}

*, :before, :after {
  margin: 0;
  padding: 0;
  position: relative;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

input, select, button, textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  font: inherit;
  color: inherit;
}

/*-----------------------------------*\
  $OBJECTS
\*-----------------------------------*/

.butt, .input {
  padding: .75rem;
  margin: .375rem;

  background-color: transparent;
  border-radius: 4px;
}

  .butt:focus, .input:focus {
    outline: none;
  }

.butt {
  border: 2px solid #f35626;
  line-height: 1.375;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  font-weight: 700;

  color: #f35626;

  cursor: pointer;
  -webkit-animation: hue 60s infinite linear;
}

  .butt--primary {
    background-color: #f35626;
    color: #fff;
  }

.input {
  border: 1px solid #c0c8c9;
  border-radius: 4px;
}

  .input--dropdown {
    background-repeat: no-repeat;
    background-size: 1.5rem 1rem;
    background-position: right center;
  }

/*-----------------------------------*\
  $TYPOGRAPHY
\*-----------------------------------*/

h1, .alpha {
  margin-bottom: 1.5rem;

  font-size: 3rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: -.05em;
}

h2, .beta {
  margin-bottom: .75rem;

  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1;
}

@media (min-width: 650px) {
  .mega {
    font-size: 6rem;
    line-height: 1;
  }
}

.subhead, .meta {
  color: #7b8993;
}

.promo {
  text-align: center;
}

p, hr, form {
  margin-bottom: 1.5rem;
}

hr {
  border: none;
  margin-top: -1px;
  height: 1px;
  background-color: #c0c8c9;
  background-image: -webkit-linear-gradient(0deg, #fff, #c0c8c9, #fff);
}

a {
  color: inherit;
  text-decoration: underline;
  -webkit-animation: hue 60s infinite linear;
}

  a:hover {
    color: #f35626;
  }

/*-----------------------------------*\
  $LAYOUT
\*-----------------------------------*/

.wrap {
  max-width: 38rem;
  margin: 0 auto;
}

.island {
  padding: 1.5rem;
}

.isle {
  padding: .75rem;
}

.spit {
  padding: .375rem;
}

/*-----------------------------------*\
  $BASE
\*-----------------------------------*/

html {
  font: 100%/1.5 "Roboto", Verdana, sans-serif;
  color: #3d464d;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  width: 100%;

  overflow: hidden-x;

  /* Centering in The Unknown */
  text-align: center;
}

@media (min-width: 650px) {
  html {
    height: 100%;
  }

  html:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }

  body {
    display: inline-block;
    vertical-align: middle;
    max-width: 38rem;
  }
}

/*-----------------------------------*\
  $HEADER
\*-----------------------------------*/

.site__header {
  -webkit-animation: bounceInUp 1s;
}

  .site__title {
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 60s infinite linear;
  }

.site__content {
  -webkit-animation: bounceInUp 1s;
  -webkit-animation-delay: .1s;
}

  .site__content form {
    -webkit-animation: bounceInUp 1s;
    -webkit-animation-delay: .1s;
  }

/*-----------------------------------*\
  $ANIMATIONS
\*-----------------------------------*/

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
`} </style>
  <header className="site__header island">
  <div className="wrap">
   <span id="animationSandbox" ref="contactedit" className={this.state.selectValue} style={{display: "block"}}>
      <h1 className="site__title mega">Animate.css</h1>
   </span>
    <span className="beta subhead">Just-add-water CSS animations</span>
  </div>
</header>

<main className="site__content island" role="content">
  <div className="wrap">
    <div>
      <select className="input input--dropdown js--animations" value={this.state.selectValue}
onChange={this.updateValue}>
        <optgroup label="Attention Seekers">
          <option value="bounce">bounce</option>
          <option value="flash">flash</option>
          <option value="pulse">pulse</option>
          <option value="rubberBand">rubberBand</option>
          <option value="shake">shake</option>
          <option value="swing">swing</option>
          <option value="tada">tada</option>
          <option value="wobble">wobble</option>
          <option value="jello">jello</option>
        </optgroup>

        <optgroup label="Bouncing Entrances">
          <option value="bounceIn">bounceIn</option>
          <option value="bounceInDown">bounceInDown</option>
          <option value="bounceInLeft">bounceInLeft</option>
          <option value="bounceInRight">bounceInRight</option>
          <option value="bounceInUp">bounceInUp</option>
        </optgroup>

        <optgroup label="Bouncing Exits">
          <option value="bounceOut">bounceOut</option>
          <option value="bounceOutDown">bounceOutDown</option>
          <option value="bounceOutLeft">bounceOutLeft</option>
          <option value="bounceOutRight">bounceOutRight</option>
          <option value="bounceOutUp">bounceOutUp</option>
        </optgroup>

        <optgroup label="Fading Entrances">
          <option value="fadeIn">fadeIn</option>
          <option value="fadeInDown">fadeInDown</option>
          <option value="fadeInDownBig">fadeInDownBig</option>
          <option value="fadeInLeft">fadeInLeft</option>
          <option value="fadeInLeftBig">fadeInLeftBig</option>
          <option value="fadeInRight">fadeInRight</option>
          <option value="fadeInRightBig">fadeInRightBig</option>
          <option value="fadeInUp">fadeInUp</option>
          <option value="fadeInUpBig">fadeInUpBig</option>
        </optgroup>

        <optgroup label="Fading Exits">
          <option value="fadeOut">fadeOut</option>
          <option value="fadeOutDown">fadeOutDown</option>
          <option value="fadeOutDownBig">fadeOutDownBig</option>
          <option value="fadeOutLeft">fadeOutLeft</option>
          <option value="fadeOutLeftBig">fadeOutLeftBig</option>
          <option value="fadeOutRight">fadeOutRight</option>
          <option value="fadeOutRightBig">fadeOutRightBig</option>
          <option value="fadeOutUp">fadeOutUp</option>
          <option value="fadeOutUpBig">fadeOutUpBig</option>
        </optgroup>

        <optgroup label="Flippers">
          <option value="flip">flip</option>
          <option value="flipInX">flipInX</option>
          <option value="flipInY">flipInY</option>
          <option value="flipOutX">flipOutX</option>
          <option value="flipOutY">flipOutY</option>
        </optgroup>

        <optgroup label="Lightspeed">
          <option value="lightSpeedIn">lightSpeedIn</option>
          <option value="lightSpeedOut">lightSpeedOut</option>
        </optgroup>

        <optgroup label="Rotating Entrances">
          <option value="rotateIn">rotateIn</option>
          <option value="rotateInDownLeft">rotateInDownLeft</option>
          <option value="rotateInDownRight">rotateInDownRight</option>
          <option value="rotateInUpLeft">rotateInUpLeft</option>
          <option value="rotateInUpRight">rotateInUpRight</option>
        </optgroup>

        <optgroup label="Rotating Exits">
          <option value="rotateOut">rotateOut</option>
          <option value="rotateOutDownLeft">rotateOutDownLeft</option>
          <option value="rotateOutDownRight">rotateOutDownRight</option>
          <option value="rotateOutUpLeft">rotateOutUpLeft</option>
          <option value="rotateOutUpRight">rotateOutUpRight</option>
        </optgroup>

        <optgroup label="Sliding Entrances">
          <option value="slideInUp">slideInUp</option>
          <option value="slideInDown">slideInDown</option>
          <option value="slideInLeft">slideInLeft</option>
          <option value="slideInRight">slideInRight</option>

        </optgroup>
        <optgroup label="Sliding Exits">
          <option value="slideOutUp">slideOutUp</option>
          <option value="slideOutDown">slideOutDown</option>
          <option value="slideOutLeft">slideOutLeft</option>
          <option value="slideOutRight">slideOutRight</option>
          
        </optgroup>
        
        <optgroup label="Zoom Entrances">
          <option value="zoomIn">zoomIn</option>
          <option value="zoomInDown">zoomInDown</option>
          <option value="zoomInLeft">zoomInLeft</option>
          <option value="zoomInRight">zoomInRight</option>
          <option value="zoomInUp">zoomInUp</option>
        </optgroup>
        
        <optgroup label="Zoom Exits">
          <option value="zoomOut">zoomOut</option>
          <option value="zoomOutDown">zoomOutDown</option>
          <option value="zoomOutLeft">zoomOutLeft</option>
          <option value="zoomOutRight">zoomOutRight</option>
          <option value="zoomOutUp">zoomOutUp</option>
        </optgroup>

        <optgroup label="Specials">
          <option value="hinge">hinge</option>
          <option value="jackInTheBox">jackInTheBox</option>
          <option value="rollIn">rollIn</option>
          <option value="rollOut">rollOut</option>
        </optgroup>
      </select>

      <button className="butt js--triggerAnimation" onClick={this.onClick}>Animate it</button>
    </div>
    <hr />
    <p className="meta"><a href="https://raw.github.com/daneden/animate.css/master/animate.css" download="animate.css">Download Animate.css</a> or <a href="//github.com/daneden/animate.css">View on GitHub</a></p>
    <p><small>Another thing from <a href="//daneden.me">Daniel Eden</a>.</small></p>
  </div>
</main>
  </div>);}
}