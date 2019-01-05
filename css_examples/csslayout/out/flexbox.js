import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class flexbox extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">flexbox</h1>
<p className="content">
  The new <code>flexbox</code> layout mode is poised to redefine how we do layouts in CSS. Unfortunately the specification has changed a lot recently, so it's implemented differently in different browsers. Still, I'd like to share a couple examples so you know what's coming up. These examples currently only work <a href="#">some browsers</a> that use the <a href="#">latest version of the standard</a>.
</p>
<p className="content">
  There are a lot of out-of-date flexbox resources around. If you want to learn more about flexbox, <a href="#">start here</a> to learn how to identify if a resource is current or not. I have written a <a href="#">detailed article using the latest syntax</a>.
</p>
<p className="content">
  There is a lot more you can do with flexbox; these are just a few examples to give you an idea:
</p>
<h2 className="content">Simple Layout using Flexbox</h2>
<style jsx="true">{`
  .container {
    display: -webkit-flex;
    display: flex;
  }
  nav {
    width: 200px;
  }
  .flex-column {
    -webkit-flex: 1;
            flex: 1;
  }
`}</style>
<figure className="highlight"><Highlight className="css">{`.container {
  display: -webkit-flex;
  display: flex;
}
nav {
  width: 200px;
}
.flex-column {
  -webkit-flex: 1;
          flex: 1;
}`}</Highlight></figure>
<div className="container elem">
<span className="label">&lt;div className="container"&gt;</span>
<nav className="elem elem-red">
<span className="label">&lt;nav&gt;</span>
<ul>
<li>
<a href="flexbox.html">Home</a>
</li>
<li>
<a href="flexbox.html">Taco Menu</a>
</li>
<li>
<a href="flexbox.html">Draft List</a>
</li>
<li>
<a href="flexbox.html">Hours</a>
</li>
<li>
<a href="flexbox.html">Directions</a>
</li>
<li>
<a href="flexbox.html">Contact</a>
</li>
</ul>
<span className="endlabel">&lt;/nav&gt;</span>
</nav>
<div className="elem elem-red flex-column">
<span className="label">&lt;div className="flex-column"&gt;</span>
<section className="elem elem-green">
<span className="label">&lt;section&gt;</span>
<p>
        Flexbox is so easy!
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
<h2 className="content">Fancy Layout using Flexbox</h2>
<style jsx="true">{`
.initial {
  -webkit-flex: initial;
          flex: initial;
  width: 200px;
  min-width: 100px;
}
.none {
  -webkit-flex: none;
          flex: none;
  width: 200px;
}
.flex1 {
  -webkit-flex: 1;
          flex: 1;
}
.flex2 {
  -webkit-flex: 2;
          flex: 2;
}
`}</style>
<figure className="highlight"><Highlight className="css">{`.container {
  display: -webkit-flex;
  display: flex;
}
.initial {
  -webkit-flex: initial;
          flex: initial;
  width: 200px;
  min-width: 100px;
}
.none {
  -webkit-flex: none;
          flex: none;
  width: 200px;
}
.flex1 {
  -webkit-flex: 1;
          flex: 1;
}
.flex2 {
  -webkit-flex: 2;
          flex: 2;
}`}</Highlight></figure>
<div className="container elem">
<section className="elem elem-green initial">
<span className="label">&lt;div className="initial"&gt;</span>
<p>
      I will be 200px when there is room, and I will shrink down to 100px if there is not room, but no smaller.
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
<section className="elem elem-green none">
<span className="label">&lt;div className="none"&gt;</span>
<p>
      I will always be 200px, no matter what.
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
<section className="elem elem-green flex1">
<span className="label">&lt;div className="flex1"&gt;</span>
<p>
      I will fill up 1/3 of the remaining width.
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
<section className="elem elem-green flex2">
<span className="label">&lt;div className="flex2"&gt;</span>
<p>
      I will fill up 2/3 of the remaining width.
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
</div>
<h2 className="content">Centering using Flexbox</h2>
<style jsx="true">{`
.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
`}</style>
<figure className="highlight"><Highlight className="css">{`.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}`}</Highlight></figure>
<div className="vertical-container elem">
<span className="label">&lt;div className="vertical-container"&gt;</span>
<section className="elem elem-green">
<span className="label">&lt;div&gt;</span>
<p>
      Finally, it's easy to vertically center something in CSS!
    </p>
<span className="endlabel">&lt;/div&gt;</span>
</section>
<span className="endlabel">&lt;/div&gt;</span>
</div>
<div className="nav-wrapper">
<Link className="nav prev" to="column.html">Previous</Link>
<Link className="nav next" to="frameworks.html">Next</Link>
</div>
<footer>
          18 / 19
        </footer>
</div>
    );
  }
}
