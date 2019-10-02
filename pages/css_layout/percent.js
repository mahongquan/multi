import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem from './Elem';
export default class percent extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">percent width</h1>
        <p className="content">
          Percent is a measurement unit relative to the containing block.
          It&apos;s great for images: here we make an image that is always 50%
          the width of its container. Try shrinking down the page to see what
          happens!
        </p>
        <style jsx="true">{`
          .clearfix:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          article img {
            float: right;
            width: 50%;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`article img {
  float: right;
  width: 50%;
}`}</Highlight>
        </figure>
        <Elem tag="article" className="content clearfix">
          <img alt="ilta" src="images/ilta.png" />
          <p>
            You could even use <code>min-width</code> and <code>max-width</code>{' '}
            to limit how big or small the image can get!
          </p>
        </Elem>
        <div className="content">
          <h2>percent width layout</h2>
        </div>
        <p className="content">
          You can use percent for layout, but this can require more work. In
          this example, the <code>nav</code> content starts to wrap in a
          displeasing way when the window is too narrow. It comes down to what
          works for your content.
        </p>
        <figure className="highlight">
          <Highlight>{`nav {
  float: left;
  width: 25%;
}
section {
  margin-left: 25%;
}`}</Highlight>
        </figure>
        <Elem className="container">
          <Elem tag="nav" color="red" style={{ float: 'left', width: '25%' }}>
            <ul>
              <li>
                <a href="percent.html">Home</a>
              </li>
              <li>
                <a href="percent.html">Taco Menu</a>
              </li>
              <li>
                <a href="percent.html">Draft List</a>
              </li>
              <li>
                <a href="percent.html">Hours</a>
              </li>
              <li>
                <a href="percent.html">Directions</a>
              </li>
              <li>
                <a href="percent.html">Contact</a>
              </li>
            </ul>
          </Elem>
          <Elem tag="section" green style={{ marginLeft: '25%' }}>
            <p>
              When this layout is too narrow, the <code>nav</code> gets
              squished. Worse, you can&apos;t use <code>min-width</code> on the
              nav to fix it, because the right column wouldn&apos;t respect it.
            </p>
          </Elem>
          <Elem
            tag="section"
            green
            className="ipsum"
            style={{ marginLeft: '25%' }}
          >
            <p>
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
        </Elem>
      </React.Fragment>
    );
  }
}
