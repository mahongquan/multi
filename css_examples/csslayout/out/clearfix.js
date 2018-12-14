import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class clearfix extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">the clearfix hack</h1>
<p className="content">
  Here is a weird, bad thing that can sometimes happen when using floats:
</p>
<style jsx="true">{`
  .content img {
    float: right;
  }
  .clear {
    clear: both;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`img {
  float: right;
}`}</Highlight></figure>
<div className="content">
<div className="elem">
<span className="label">&lt;div&gt;</span>
<img alt="An Image" src=".//images/ilta.png"/>
<p>
      Uh oh... this image is taller than the element containing it, and it's floated, so it's overflowing outside of its container!
    </p>
</div>
</div>
<p className="content clear">
  Boo. There is a way to fix this, but it's ugly. It's called the <em>clearfix hack</em>.
</p>
<p className="content">
  Let's try adding this new CSS:
</p>
<style jsx="true">{`
  .clearfix {
    overflow: auto;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`.clearfix {
  overflow: auto;
}`}</Highlight></figure>
<p className="content">
  Now let's see what happens:
</p>
<div className="content">
<div className="elem clearfix">
<span className="label">&lt;div className="clearfix"&gt;</span>
<img alt="An Image" src=".//images/ilta.png"/>
<p>
      Much better!
    </p>
</div>
</div>
<p className="content">
  This works for modern browsers. If you want to support IE6 you will want to add the following:
</p>
<figure className="highlight"><Highlight className="css">{`.clearfix {
  overflow: auto;
  zoom: 1;
}`}</Highlight></figure>
<p className="content">
  There are exotic browsers that may require extra attention. <a href="#">The world of clearfixing is pretty scary</a>, but this simple solution will work for the vast majority of browsers today.
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="clear.html">Previous</Link>
<Link className="nav next" to="float-layout.html">Next</Link>
</div>
<footer>
          11 / 19
        </footer>
</div>
    );
  }
}
