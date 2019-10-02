import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class position_example extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">position example</h1>
        <p className="content">
          This position stuff might make a little more sense in a practical
          example. Below is a realistic page layout.
        </p>
        <figure className="highlight">
          <Highlight>{`
#container1 {
  position: relative;
}
nav {
  position: absolute;
  left: 0px;
  width: 200px;
}
section {
  /* position is static by default */
  margin-left: 200px;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  background-color: white;
  width: 100%;
}
body {
  margin-bottom: 120px;
}`}</Highlight>
        </figure>
        <Elem id="container1">
          <Elem
            tag="nav"
            red
            style={{
              position: 'absolute',
              left: '0px',
              width: '200px',
            }}
          >
            <ul>
              <li>
                <a href="position-example.html">Home</a>
              </li>
              <li>
                <a href="position-example.html">Taco Menu</a>
              </li>
              <li>
                <a href="position-example.html">Draft List</a>
              </li>
              <li>
                <a href="position-example.html">Hours</a>
              </li>
              <li>
                <a href="position-example.html">Directions</a>
              </li>
              <li>
                <a href="position-example.html">Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem tag="section" green style={{ marginLeft: '200px' }}>
            <p style={{ marginTop: '22px' }}>
              The <code>margin-left</code> style for <code>section</code>s makes
              sure there is room for the <code>nav</code>. Otherwise the
              absolute and static elements would overlap
            </p>
          </Elem>
          <Elem
            tag="section"
            green
            className="ipsum"
            style={{ marginLeft: '200px' }}
          >
            <p style={{ marginTop: '22px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
              vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
              ultrices nec congue eget, auctor vitae massa. Fusce luctus
              vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
              ornare eu, lobortis in odio. Praesent convallis urna a lacus
              interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed
              ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
              imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
              venenatis. Integer fringilla congue eros non fermentum. Sed
              dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
              diam velit.
            </p>
          </Elem>
          <Elem tag="section" green style={{ marginLeft: '200px' }}>
            <p style={{ marginTop: '22px' }}>
              Notice what happens when you resize your browser. It works nicely!
            </p>
          </Elem>
          <Elem
            tag="footer"
            orange
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              height: '90px',
              backgroundColor: 'white',
              width: '100%',
              margin: 0,
              zIndex: 1,
            }}
          >
            <p>
              If you use a fixed header or footer, make sure there is room for
              it! I put a <code>margin-bottom</code> on the <code>body</code>.
            </p>
          </Elem>
        </Elem>
        <p className="content">
          This example works because the container is taller than the nav. If it
          wasn&apos;t, the nav would overflow outside of its container. In the
          coming pages we&apos;ll discuss other layout techniques that have
          different pros and cons.
        </p>
      </React.Fragment>
    );
  }
}
