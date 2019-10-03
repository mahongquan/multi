import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class inline_block_layout extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">inline-block layout</h1>
        <div className="content">
          <p>
            You can also use <code>inline-block</code> for layouts. There are a
            few things to keep in mind:
          </p>
          <ul>
            <li>
              <code>inline-block</code> elements are affected by the{' '}
              <code>vertical-align</code> property, which you probably want set
              to <code>top</code>.
              <span>
                You need to set the width of each column
                <span>
                  There will be a gap between the columns if there is any
                  whitespace between them in the HTML
                </span>
              </span>
            </li>
          </ul>
        </div>
        <figure className="highlight">
          <Highlight>{`
nav {
  display: inline-block;
  vertical-align: top;
  width: 25%;
}
#column {
  display: inline-block;
  vertical-align: top;
  width: 75%;
}`}</Highlight>
        </figure>
        <Elem className="container">
          <Elem
            tag="nav"
            red
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              width: '25%',
            }}
          >
            <ul>
              <li>
                <a href="inline-block-layout.html">Home</a>
              </li>
              <li>
                <a href="inline-block-layout.html">Taco Menu</a>
              </li>
              <li>
                <a href="inline-block-layout.html">Draft List</a>
              </li>
              <li>
                <a href="inline-block-layout.html">Hours</a>
              </li>
              <li>
                <a href="inline-block-layout.html">Directions</a>
              </li>
              <li>
                <a href="inline-block-layout.html">Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem
            color="red"
            id="column"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              width: '75%',
            }}
          >
            <Elem green tag="section">
              <p>Tada!</p>
            </Elem>
            <Elem green tag="section" className="ipsum">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
                facilisis sed ornare eu, lobortis in odio. Praesent convallis
                urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
                dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
                sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
                purus. Mauris quis diam velit.
              </p>
            </Elem>
          </Elem>
        </Elem>
      </React.Fragment>
    );
  }
}
