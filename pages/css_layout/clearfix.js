import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem, { A } from './Elem';
export default class clearfix extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">the clearfix hack</h1>
        <p className="content">
          Here is a weird, bad thing that can sometimes happen when using
          floats:
        </p>
        <style jsx="true">{`
          .content img {
            float: right;
          }
          .clear {
            clear: both;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`
          img {
            float: right;
          }
          `}</Highlight>
        </figure>
        <div className="content">
          <Elem>
            <Elem tag="nav" style={{ float: 'left' }} color="red">
              <ul>
                <li>
                  <A href="percent.html">Home</A>
                </li>
                <li>
                  <A href="percent.html">Taco Menu</A>
                </li>
                <li>
                  <A href="percent.html">Draft List</A>
                </li>
                <li>
                  <A href="percent.html">Hours</A>
                </li>
                <li>
                  <A href="percent.html">Directions</A>
                </li>
                <li>
                  <A href="percent.html">Contact</A>
                </li>
                <li>
                  <A href="percent.html">Draft List</A>
                </li>
                <li>
                  <A href="percent.html">Hours</A>
                </li>
                <li>
                  <A href="percent.html">Directions</A>
                </li>
                <li>
                  <A href="percent.html">Contact</A>
                </li>
              </ul>
            </Elem>
            <img alt="ilta" src="./images/ilta.png" />
            <p>
              Uh oh... this image is taller than the element containing it, and
              it&apos;s floated, so it&apos;s overflowing outside of its
              container!
            </p>
          </Elem>
        </div>
        <p className="content clear">
          Boo. There is a way to fix this, but it's ugly. It's called the{' '}
          <em>clearfix hack</em>.
        </p>
        <p className="content">Let's try adding this new CSS:</p>
        <figure className="highlight">
          <Highlight>
            {`
              .clearfix {
                  overflow: auto;
              }
            `}
          </Highlight>
        </figure>
        <p className="content">Now let's see what happens:</p>
        <div className="content">
          <Elem style={{ overflow: 'auto' }}>
            <Elem tag="nav" style={{ float: 'left' }} color="red">
              <ul>
                <li>
                  <A href="percent.html">Home</A>
                </li>
                <li>
                  <A href="percent.html">Taco Menu</A>
                </li>
                <li>
                  <A href="percent.html">Draft List</A>
                </li>
                <li>
                  <A href="percent.html">Hours</A>
                </li>
                <li>
                  <A href="percent.html">Directions</A>
                </li>
                <li>
                  <A href="percent.html">Contact</A>
                </li>
                <li>
                  <A href="percent.html">Draft List</A>
                </li>
                <li>
                  <A href="percent.html">Hours</A>
                </li>
                <li>
                  <A href="percent.html">Directions</A>
                </li>
                <li>
                  <A href="percent.html">Contact</A>
                </li>
                <li>
                  <A href="percent.html">Draft List</A>
                </li>
                <li>
                  <A href="percent.html">Hours</A>
                </li>
                <li>
                  <A href="percent.html">Directions</A>
                </li>
                <li>
                  <A href="percent.html">Contact</A>
                </li>
              </ul>
            </Elem>
            <img alt="ilta" src="./images/ilta.png" />
            <p>Much better!</p>
          </Elem>
        </div>
        <p className="content">
          This works for modern browsers. If you want to support IE6 you will
          want to add the following:
        </p>
        <figure className="highlight">
          <Highlight>{`
            .clearfix {
              overflow: auto;
              zoom: 1;
            }
          `}</Highlight>
        </figure>
        <p className="content">
          There are exotic browsers that may require extra attention.{' '}
          <a href="http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best">
            The world of clearfixing is pretty scary
          </a>
          , but this simple solution will work for the vast majority of browsers
          today.
        </p>
      </React.Fragment>
    );
  }
}
