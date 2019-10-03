import React, { Component } from 'react';
import Highlight from 'react-highlight';
export default class float extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">float</h1>
        <p className="content">
          Another CSS property used for layout is <code>float</code>. Float is
          intended for wrapping text around images, like this:
        </p>
        <style jsx="true">{`
          .content img {
            margin: 0 0 1em 1em;
            float: right;
          }
        `}</style>
        <figure className="highlight">
          <Highlight>{`img {
  float: right;
  margin: 0 0 1em 1em;
}`}</Highlight>
        </figure>
        <p className="content ipsum">
          <img alt="ilta" src="./images/ilta.png" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio. Praesent convallis urna a lacus interdum ut hendrerit risus
          congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit.
        </p>
      </React.Fragment>
    );
  }
}
