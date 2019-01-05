import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class marginAuto extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">margin: auto;</h1>
<style jsx="true">{`
  #main {
    width: 600px;
    margin: 0 auto;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`#main {
  width: 600px;
  margin: 0 auto; 
}`}</Highlight></figure>
<div className="elem" id="main">
<span className="label">&lt;div id="main"&gt;</span>
<p>
    Setting the <code>width</code> of a block-level element will prevent it from stretching out to the edges of its container to the left and right. Then, you can set the left and right margins to <code>auto</code> to horizontally center that element within its container. The element will take up the width you specify, then the remaining space will be split evenly between the two margins.
  </p>
<p>
    The only problem occurs when the browser window is narrower than the width of your element. The browser resolves this by creating a horizontal scrollbar on the page. Let's improve the situation...
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="nav-wrapper">
<Link className="nav prev" to="display.html">Previous</Link>
<Link className="nav next" to="max-width.html">Next</Link>
</div>
<footer>
          3 / 19
        </footer>
</div>
    );
  }
}
