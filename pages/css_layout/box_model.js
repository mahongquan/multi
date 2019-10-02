import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class box_model extends Component {
  render() {
    return (
      <React.Fragment>
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
          While we&apos;re talking about width, we should talk about
          width&apos;s big caveat: the <em>box model</em>. When you set the
          width of an element, the element can actually appear bigger than what
          you set: the element&apos;s border and padding will stretch out the
          element beyond the specified width. Look at the following example,
          where two elements with the same width value end up different sizes in
          the result.
        </p>
        <figure className="highlight">
          <Highlight>{`.simple {
  width: 500px;
  margin: 20px auto;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}`}</Highlight>
        </figure>
        <Elem className="simple">
          <p>I&apos;m smaller...</p>
        </Elem>
        <Elem className="fancy">
          <p>And I&apos;m bigger!</p>
        </Elem>
        <p className="content">
          For generations, the solution to this problem has been extra math. CSS
          authors have always just written a smaller width value than what they
          wanted, subtracting out the padding and border. Thankfully, you
          don&apos;t have to do that anymore...
        </p>
      </React.Fragment>
    );
  }
}
