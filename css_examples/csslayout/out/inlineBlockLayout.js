import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class inlineBlockLayout extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">inline-block layout</h1>
<div className="content">
<p>
                You can also use <code>inline-block</code> for layouts. There are a few things to keep in mind:
            </p>
<ul>
<li><code>inline-block</code> elements are affected by the <code>vertical-align</code> property, which you probably want set to <code>top</code>.
                    <span>You need to set the width of each column
                        <span>There will be a gap between the columns if there is any whitespace between them in the HTML
                        </span>
</span>
</li>
</ul>
</div>
<style jsx="true">{`
        nav.elem {
            display: inline-block;
            vertical-align: top;
            width: 25%;
        }

        .column {
            display: inline-block;
            vertical-align: top;
            width: 75%;
        }
        `}</style>
<figure className="highlight"><Highlight className="css">{`nav {
  display: inline-block;
  vertical-align: top;
  width: 25%;
}
.column {
  display: inline-block;
  vertical-align: top;
  width: 75%;
}`}</Highlight></figure>
<div className="container elem">
<span className="label">&lt;div className="container"&gt;</span>
<nav className="elem elem-red">
<span className="label">&lt;nav&gt;</span>
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
<span className="endlabel">&lt;/nav&gt;</span>
</nav>
<div className="elem elem-red column">
<span className="label">&lt;div className="column"&gt;</span>
<section className="elem elem-green">
<span className="label">&lt;section&gt;</span>
<p>
                        Tada!
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
<span className="endlabel">&lt;/div&gt;</span>
</div>
</div>
<div className="nav-wrapper">
<Link className="nav prev" to="inline-block.html">Previous</Link>
<Link className="nav next" to="column.html">Next</Link>
</div>
<footer>
            16 / 19
        </footer>
</div>
    );
  }
}
