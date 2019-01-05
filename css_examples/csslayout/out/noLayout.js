import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class noLayout extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">no layout</h1>
<p>
  Having no layout whatsover is almost ok if all you want is one big column of content. However, if a user makes the browser window really wide, it gets kind of annoying to read: after each line your eyes have a long distance to travel right-to-left to the next line. Try resizing your browser to see what I mean!
</p>
<p>
  Before we fix this problem, let's make sure we're clear on the very important <code>display</code> property.
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="index.html">Previous</Link>
<Link className="nav next" to="display.html">Next</Link>
</div>
<footer>
          1 / 19
        </footer>
</div>
    );
  }
}
