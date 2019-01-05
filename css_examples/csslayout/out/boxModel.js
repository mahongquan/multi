import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class boxModel extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">the box model</h1>
<style jsx="true">{`
  .simple {
    width: 500px;
    margin: 20px auto;
    -webkit-box-sizing: content-box;
       -moz-box-sizing: content-box;
            box-sizing: content-box;
  }

  .fancy {
    width: 500px;
    margin: 20px auto;
    padding: 50px;
    border-width: 10px;
    -webkit-box-sizing: content-box;
       -moz-box-sizing: content-box;
            box-sizing: content-box;
  }
`}</style>
<p className="content">
  While we're talking about width, we should talk about width's big caveat: the <em>box model</em>. When you set the width of an element, the element can actually appear bigger than what you set: the element's border and padding will stretch out the element beyond the specified width. Look at the following example, where two elements with the same width value end up different sizes in the result.
</p>
<figure className="highlight"><Highlight className="css">{`.simple {
  width: 500px;
  margin: 20px auto;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}`}</Highlight></figure>
<div className="simple elem">
<span className="label">&lt;div className="simple"&gt;</span>
<p>
    I'm smaller...
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="fancy elem">
<span className="label">&lt;div className="fancy"&gt;</span>
<p>
    And I'm bigger!
  </p>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<p className="content">
  For generations, the solution to this problem has been extra math. CSS authors have always just written a smaller width value than what they wanted, subtracting out the padding and border. Thankfully, you don't have to do that anymore...
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="max-width.html">Previous</Link>
<Link className="nav next" to="box-sizing.html">Next</Link>
</div>
<footer>
          5 / 19
        </footer>
</div>
    );
  }
}
