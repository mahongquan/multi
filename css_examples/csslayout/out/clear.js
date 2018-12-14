import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class clear extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">clear</h1>
<p className="content">
  The <code>clear</code> property is important for controlling the behavior of floats. Compare these two examples:
</p>
<style jsx="true">{`
  .box {
    float: left;
    width: 200px;
    height: 100px;
    margin: 1em;
  }
`}</style>
<figure className="highlight"><Highlight className="html">{`
  &lt;div className="box"&gt;...&lt;/div&gt;
&lt;section&gt;...&lt;/section&gt;

`}</Highlight></figure>
<figure className="highlight"><Highlight className="css">{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight></figure>
<div className="content">
<div className="box elem">
<span className="label">&lt;div className="box"&gt;</span>
<p>
        I feel like I'm floating!
      </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<section className="elem elem-green">
<span className="label">&lt;section&gt;</span>
<p>
      In this case, the <code>section</code> element is actually after the <code>div</code>. However, since the <code>div</code> is floated to the left, this is what happens: the text in the <code>section</code> is floated around the <code>div</code> and the <code>section</code> surrounds the whole thing. What if we wanted the <code>section</code> to actually appear after the floated element?
    </p>
<span className="endlabel">&lt;/section&gt;</span>
</section>
</div>
<style jsx="true">{`
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
      I feel like I'm floating!
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<section className="elem elem-green after-box">
<span className="label">&lt;section className="after-box"&gt;</span>
<p>
      Using <code>clear</code> we have now moved this section down below the floated <code>div</code>. You use the value <code>left</code> to clear elements floated to the left. You can also clear <code>right</code> and <code>both</code>.
    </p>
<span className="endlabel">&lt;/section&gt;</span>
</section>
</div>
<div className="nav-wrapper">
<Link className="nav prev" to="float.html">Previous</Link>
<Link className="nav next" to="clearfix.html">Next</Link>
</div>
<footer>
          10 / 19
        </footer>
</div>
    );
  }
}
