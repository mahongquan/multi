import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class inlineBlock extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">inline-block</h1>
<p className="content">
            You can create a grid of boxes that fills the browser width and wraps nicely. This has been possible for a long time using <code>float</code>, but now with <code>inline-block</code> it's even easier. <code>inline-block</code> elements are like <code>inline</code> elements but they can have a width and height. Let's look at examples of both approaches.
        </p>
<div className="content">
<h2>The Hard Way (using float)</h2>
</div>
<style jsx="true">{`
        .box {
            float: left;
            width: 200px;
            height: 100px;
            margin: 1em;
        }

        .after-box {
            clear: left;
        }
        `}</style>
<figure className="highlight"><Highlight className="css">{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}`}</Highlight></figure>
<div className="content">
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
                    I'm floating!
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<section className="elem elem-green after-box">
<span className="label">&lt;div className="after-box"&gt;</span>
<p>
                    I'm using clear so I don't float next to the above boxes.
                </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
</div>
<div className="content">
<h2>The Easy Way (using inline-block)</h2>
<p>
            You can achieve the same effect using the <code>inline-block</code> value of the <code>display</code> property.
        </p>
</div>
<style jsx="true">{`
    .box2 {
        display: inline-block;
        width: 200px;
        height: 100px;
        margin: 1em;
    }
    `}</style>
<figure className="highlight"><Highlight className="css">{`.box2 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight></figure>
<div className="content">
<div className="box2 elem">
<span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box2 elem">
<span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box2 elem">
<span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="box2 elem">
<span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p>
<span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<div className="box2 elem"><span className="label">&lt;div className="box2"&gt;</span>
<p>I'm an inline block!</p><span className="endlabel">&lt;/div&gt;</span></div>
<section className="elem elem-green">
<span className="label">&lt;div&gt;</span>
<p>
                I don't have to use <code>clear</code> in this case. Nice!
            </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
</div>
<p className="content">
        You have to do extra work for <a href="#">IE6 and IE7 support</a> of <code>inline-block</code>. Sometimes people talk about <code>inline-block</code> triggering something called <code>hasLayout</code>, though you only need to know about that to support old browsers. Follow the previous link about IE6 and IE7 support if you're curious to learn more. Otherwise, let's continue.
    </p>
<div className="nav-wrapper">
<Link className="nav prev" to="media-queries.html">Previous</Link>
<Link className="nav next" to="inline-block-layout.html">Next</Link>
</div>
<footer>
        15 / 19
    </footer>
</div>
    );
  }
}
