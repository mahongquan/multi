import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class positionExample extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">position example</h1>
<p className="content">
  This position stuff might make a little more sense in a practical example. Below is a realistic page layout.
</p>
<style jsx="true">{`
  .container {
    position: relative;
  }
  nav.elem {
    position: absolute;
    left: 0px;
    width: 200px;
  }
  section {
    /* position is static by default */
    margin-left: 200px;
  }
  footer.elem {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    background-color: white;
    width: 100%;
    margin: 0;
    z-index: 1;
  }
  body {
    margin-bottom: 120px;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`.container {
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
}`}</Highlight></figure>
<div className="container elem">
<span className="label">&lt;div className="container"&gt;</span>
<nav className="elem elem-red">
<span className="label">&lt;nav&gt;</span>
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
<span className="endlabel">&lt;/nav&gt;</span>
</nav>
<section className="elem elem-green">
<span className="label">&lt;section&gt;</span>
<p>
      The <code>margin-left</code> style for <code>section</code>s makes sure there is room for the <code>nav</code>. Otherwise the absolute and static elements would overlap
    </p>
<span className="endlabel">&lt;/section&gt;</span>
</section>
<section className="elem elem-green ipsum">
<span className="label">&lt;section&gt;</span>
<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
    </p>
<span className="endlabel">&lt;/section&gt;</span>
</section>
<section className="elem elem-green">
<span className="label">&lt;section&gt;</span>
<p>
      Notice what happens when you resize your browser. It works nicely!
    </p>
<span className="endlabel">&lt;/section&gt;</span>
</section>
<footer className="elem elem-orange">
<span className="label">&lt;footer&gt;</span>
<p>
      If you use a fixed header or footer, make sure there is room for it! I put a <code>margin-bottom</code> on the <code>body</code>.
    </p>
<span className="endlabel">&lt;/footer&gt;</span>
</footer>
</div>
<p className="content">
  This example works because the container is taller than the nav. If it wasn't, the nav would overflow outside of its container. In the coming pages we'll discuss other layout techniques that have different pros and cons.
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="position.html">Previous</Link>
<Link className="nav next" to="float.html">Next</Link>
</div>
<footer>
          8 / 19
        </footer>
</div>
    );
  }
}
