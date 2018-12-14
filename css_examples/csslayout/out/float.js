import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class float extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">float</h1>
<p className="content">
  Another CSS property used for layout is <code>float</code>. Float is intended for wrapping text around images, like this:
</p>
<style jsx="true">{`
  .content img {
    margin: 0 0 1em 1em;
    float: right;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`img {
  float: right;
  margin: 0 0 1em 1em;
}`}</Highlight></figure>
<p className="content ipsum">
<img alt="An Image" src="./images/ilta.png"/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="position-example.html">Previous</Link>
<Link className="nav next" to="clear.html">Next</Link>
</div>
<footer>
          9 / 19
        </footer>
</div>
    );
  }
}
