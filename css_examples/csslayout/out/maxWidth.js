import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class maxWidth extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">max-width</h1>
<style jsx="true">{`
  #main {
    max-width: 600px;
    margin: 0 auto;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`#main {
  max-width: 600px;
  margin: 0 auto; 
}`}</Highlight></figure>
<div className="elem" id="main">
<span className="label">&lt;div id="main"&gt;</span>
<p>
    Using <code>max-width</code> instead of <code>width</code> in this situation will improve the browser's handling of small windows. This is important when making a site usable on mobile. Resize this page to check it out!
  </p>
<p>
    By the way, <code>max-width</code> is <a href="#">supported by all major browsers</a> including IE7+ so you shouldn't be afraid of using it.
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="nav-wrapper">
<Link className="nav prev" to="margin-auto.html">Previous</Link>
<Link className="nav next" to="box-model.html">Next</Link>
</div>
<footer>
          4 / 19
        </footer>
</div>
    );
  }
}
