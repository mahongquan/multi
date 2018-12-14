import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class position extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">position</h1>
<p className="content">
  In order to make more complex layouts, we need to discuss the <code>position</code> property. It has a bunch of possible values, and their names make no sense and are impossible to remember. Let's go through them one by one, but maybe you should bookmark this page too.
</p>
<h2 className="content">
  static
</h2>
<figure className="highlight"><Highlight className="css">{`.static {
  position: static;
}`}</Highlight></figure>
<div className="elem">
<span className="label">&lt;div className="static"&gt;</span>
<p>
<code>static</code> is the default value. An element with <code>position: static;</code> is not positioned in any special way. A static element is said to be <em>not positioned</em> and an element with its position set to anything else is said to be <em>positioned</em>.
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<h2 className="content">
  relative
</h2>
<style jsx="true">{`
  .relative1 {
    position: relative;
  }
  .relative2 {
    position: relative;
    top: -20px;
    left: 20px;
    background-color: white;
    width: 500px;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`.relative1 {
  position: relative;
}
.relative2 {
  position: relative;
  top: -20px;
  left: 20px;
  background-color: white;
  width: 500px;
}`}</Highlight></figure>
<div className="relative1 elem">
<span className="label">&lt;div className="relative1"&gt;</span>
<p>
<code>relative</code> behaves the same as <code>static</code> unless you add some extra properties.
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="relative2 elem elem-red">
<span className="label">&lt;div className="relative2"&gt;</span>
<p>
    Setting the <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<h2 className="content">
  fixed
</h2>
<style jsx="true">{`
  .fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 200px;
    background-color: white;
    z-index: 9999;
  }
`}</style>
<div className="fixed elem elem-green">
<span className="label">&lt;div className="fixed"&gt;</span>
<p>
    Hello! Don't pay attention to me yet.
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<p className="content">
  A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. As with <code>relative</code>, the <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties are used.
</p>
<p className="content">
  I'm sure you've noticed that fixed element in the lower-right hand corner of the page. I'm giving you permission to pay attention to it now. Here is the CSS that puts it there:
</p>
<figure className="highlight"><Highlight className="css">{`.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  background-color: white;
}`}</Highlight></figure>
<p className="content">
  A fixed element does not leave a gap in the page where it would normally have been located.
</p>
<p className="content">
  Mobile browsers have surprisingly shaky support for fixed. <a href="#">Learn more about the situation here</a>.
</p>
<h2 className="content">
  absolute
</h2>
<style jsx="true">{`
  .relative {
    position: relative;
    width: 600px;
    height: 400px;
  }
  .absolute {
    position: absolute;
    top: 120px;
    right: 0;
    width: 300px;
    height: 200px;
  }
`}</style>
<p className="content">
<code>absolute</code> is the trickiest position value. <code>absolute</code> behaves like <code>fixed</code> except relative to <em>the nearest positioned ancestor</em> instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. Remember, a "positioned" element is one whose position is anything except <code>static</code>.
</p>
<p className="content">
  Here is a simple example:
</p>
<figure className="highlight"><Highlight className="css">{`.relative {
  position: relative;
  width: 600px;
  height: 400px;
}
.absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
}`}</Highlight></figure>
<div className="relative elem">
<span className="label">&lt;div className="relative"&gt;</span>
<p>
    This element is relatively-positioned. If this element was <code>position: static;</code> its absolutely-positioned child would escape and would be positioned relative to the document body.
  </p>
<div className="absolute elem elem-red">
<span className="label">&lt;div className="absolute"&gt;</span>
<p>
      This element is absolutely-positioned. It's positioned relative to its parent.
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<p className="content">
  This stuff is tricky, but it's essential to creating great CSS layouts. On the next page we'll use <code>position</code> in a more practical example.
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="box-sizing.html">Previous</Link>
<Link className="nav next" to="position-example.html">Next</Link>
</div>
<footer>
          7 / 19
        </footer>
</div>
    );
  }
}
