import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class position extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">position</h1>
        <p className="content">
          In order to make more complex layouts, we need to discuss the{' '}
          <code>position</code> property. It has a bunch of possible values, and
          their names make no sense and are impossible to remember. Let&apos;s
          go through them one by one, but maybe you should bookmark this page
          too.
        </p>
        <h2 className="content">static</h2>
        <figure className="highlight">
          <Highlight>{`#static {
  position: static;
}`}</Highlight>
        </figure>
        <div id="static" style={{ position: 'static' }}>
          <p className="content" style={{ marginTop: '22px' }}>
            <code>static</code> is the default value. An element with{' '}
            <code>position: static;</code> is not positioned in any special way.
            A static element is said to be <em>not positioned</em> and an
            element with its position set to anything else is said to be{' '}
            <em>positioned</em>.
          </p>
        </div>
        <h2 className="content">relative</h2>
        <figure className="highlight">
          <Highlight>{`#relative1 {
  position: relative;
}
#relative2 {
  position: relative;
  top: -20px;
  left: 20px;
  background-color: white;
  width: 500px;
}`}</Highlight>
        </figure>
        <Elem id="relative1" style={{ position: 'relative' }}>
          <p style={{ marginTop: '22px' }}>
            <code>relative</code> behaves the same as <code>static</code> unless
            you add some extra properties.
          </p>
        </Elem>
        <Elem
          red
          id="relative2"
          style={{
            position: 'relative',
            top: '-20px',
            left: '20px',
            backgroundColor: 'white',
            width: '500px',
          }}
        >
          <p style={{ marginTop: '22px' }}>
            Setting the <code>top</code>, <code>right</code>,{' '}
            <code>bottom</code>, and <code>left</code> properties of a
            relatively-positioned element will cause it to be adjusted away from
            its normal position. Other content will not be adjusted to fit into
            any gap left by the element.
          </p>
        </Elem>
        <h2 className="content">fixed</h2>
        <Elem
          green
          id="fixed"
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '200px',
            backgroundColor: 'white',
            zIndex: 9999,
          }}
        >
          <p>Hello! Don&apos;t pay attention to me yet.</p>
        </Elem>
        <p className="content">
          A fixed element is positioned relative to the viewport, which means it
          always stays in the same place even if the page is scrolled. As with{' '}
          <code>relative</code>, the <code>top</code>, <code>right</code>,{' '}
          <code>bottom</code>, and <code>left</code> properties are used.
        </p>
        <p className="content">
          I&apos;m sure you&apos;ve noticed that fixed element in the
          lower-right hand corner of the page. I&apos;m giving you permission to
          pay attention to it now. Here is the CSS that puts it there:
        </p>
        <figure className="highlight">
          <Highlight>{`#fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  background-color: white;
}`}</Highlight>
        </figure>
        <p className="content">
          A fixed element does not leave a gap in the page where it would
          normally have been located.
        </p>
        <p className="content">
          Mobile browsers have surprisingly shaky support for fixed.{' '}
          <a href="http://bradfrostweb.com/blog/mobile/fixed-position/">
            Learn more about the situation here
          </a>
          .
        </p>
        <h2 className="content">absolute</h2>
        <p className="content">
          <code>absolute</code> is the trickiest position value.{' '}
          <code>absolute</code> behaves like <code>fixed</code> except relative
          to <em>the nearest positioned ancestor</em> instead of relative to the
          viewport. If an absolutely-positioned element has no positioned
          ancestors, it uses the document body, and still moves along with page
          scrolling. Remember, a &quot;positioned&quot; element is one whose
          position is anything except <code>static</code>.
        </p>
        <p className="content">Here is a simple example:</p>
        <figure className="highlight">
          <Highlight>{`#relative {
  position: relative;
  width: 600px;
  height: 400px;
}
#absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
}`}</Highlight>
        </figure>
        <Elem
          id="relative"
          style={{
            position: 'relative',
            width: '600px',
            height: '400px',
          }}
        >
          <p>
            This element is relatively-positioned. If this element was{' '}
            <code>position: static;</code> its absolutely-positioned child would
            escape and would be positioned relative to the document body.
          </p>
          <Elem
            red
            id="absolute"
            style={{
              position: 'absolute',
              top: '120px',
              right: 0,
              width: '300px',
              height: '200px',
            }}
          >
            <p>
              This element is absolutely-positioned. It&apos;s positioned
              relative to its parent.
            </p>
          </Elem>
        </Elem>
        <p className="content">
          This stuff is tricky, but it&apos;s essential to creating great CSS
          layouts. On the next page we&apos;ll use <code>position</code> in a
          more practical example.
        </p>
      </React.Fragment>
    );
  }
}
