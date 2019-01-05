import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class toc extends Component<Props> {
  render() {
    return (
    <div id="container">
<style jsx="true">{`
#toc {
  line-height: 1.5em;
  padding-left: 0;
}

#toc ul {
  padding: 0;
  width: 90%;
  margin: auto;
}

#toc li {
  list-style-type:none; 
  margin-bottom: .5em;
}

#toc li a {
  display: block;
  text-align: center;
  padding: .5em;
  color: #fff;
  background-color: #D64078;
  border: solid #B03060 1px;
  border-bottom: solid #B03060 4px;
  text-shadow: 0px 2px 0 #B03060;
  border-radius: .3em;
  position: relative;
  -webkit-transition: all 0.1s ease-out;  /* Safari 3.2+, Chrome */
     -moz-transition: all 0.1s ease-out;  /* Firefox 4-15 */
       -o-transition: all 0.1s ease-out;  /* Opera 10.5â12.00 */
          transition: all 0.1s ease-out;  /* Firefox 16+, Opera 12.50+ */
}

#toc li a:hover {
  text-decoration: none;
  background-color: #c63b6f;
}

#toc li a:active {
  border-bottom: solid #b03060 1px;
  top: 4px;
  -webkit-transition: all 0 ease-out;  /* Safari 3.2+, Chrome */
     -moz-transition: all 0 ease-out;  /* Firefox 4-15 */
       -o-transition: all 0 ease-out;  /* Opera 10.5â12.00 */
          transition: all 0 ease-out;  /* Firefox 16+, Opera 12.50+ */
}


@media screen and (min-width:601px) {
  #toc {
    -moz-column-count: 2;
    -moz-column-gap: 1em;
    -webkit-column-count: 2;
    -webkit-column-gap: 1em;
    column-count: 2;
    column-gap: 1em;
    line-height: 1.2em;
  }
}
`}</style>
<div className="content">
<h1 className="content">Table of Contents</h1>
<ul id="toc">
<li>
<ul>
<li><a href="no-layout.html">no layout</a></li>
<li><a href="display.html">the "display" property</a></li>
<li><a href="margin-auto.html">margin: auto;</a></li>
<li><a href="max-width.html">max-width</a></li>
<li><a href="box-model.html">the box model</a></li>
<li><a href="box-sizing.html">box-sizing</a></li>
<li><a href="position.html">position</a></li>
<li><a href="position-example.html">position example</a></li>
<li><a href="float.html">float</a></li>
<li><a href="clear.html">clear</a></li>
<li><a href="clearfix.html">the clearfix hack</a></li>
<li><a href="float-layout.html">float layout example</a></li>
<li><a href="percent.html">percent width</a></li>
<li><a href="media-queries.html">media queries</a></li>
<li><a href="inline-block.html">inline-block</a></li>
<li><a href="inline-block-layout.html">inline-block layout</a></li>
<li><a href="column.html">column</a></li>
<li><a href="flexbox.html">flexbox</a></li>
<li><a href="frameworks.html">css frameworks</a></li>
<li><a href="about.html">about this site</a></li>
</ul>
</li>
</ul>
</div>
</div>
    );
  }
}
