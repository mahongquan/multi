import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class box_sizing extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">box-sizing</h1>
        <style jsx="true">{`
          .simple {
            width: 500px;
            margin: 20px auto;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          .fancy {
            width: 500px;
            margin: 20px auto;
            padding: 50px;
            border: solid #6ac5ac 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
        `}</style>
        <p className="content">
          The original box model behavior was eventually considered unintuitive,
          so a new CSS property called <code>box-sizing</code> was created. When
          you set <code>box-sizing: border-box;</code> on an element, the
          padding and border of that element no longer increase its width. Here
          is the same example as the previous page, but with{' '}
          <code>box-sizing: border-box;</code> on both elements:
        </p>
        <figure className="highlight">
          <Highlight>{`.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}`}</Highlight>
        </figure>
        <Elem className="simple">
          <p>We&apos;re the same size now!</p>
        </Elem>
        <Elem className="fancy">
          <p>Hooray!</p>
        </Elem>
        <p className="content">
          Since this is so much better, some authors want all elements on all
          their pages to always work this way. Such authors put the following
          CSS on their pages:
        </p>
        <figure className="highlight">
          <Highlight>{`* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}`}</Highlight>
        </figure>
        <p className="content">
          This ensures that all elements are always sized in this more intuitive
          way.
        </p>
        <p className="content">
          Since <code>box-sizing</code> is pretty new, you should use the{' '}
          <code>-webkit-</code> and <code>-moz-</code> prefixes for now, as I
          have in these examples. This technique enables experimental features
          in specific browsers. Also, keep in mind that this one is{' '}
          <a href="http://caniuse.com/#search=box-sizing">IE8+</a>.
        </p>
      </React.Fragment>
    );
  }
}
