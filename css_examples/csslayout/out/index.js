import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class index extends Component<Props> {
  render() {
    return (
    <div id="container">
<style jsx="true">{`
  #about {
    max-width: 550px;
    margin: 0 auto 2em;
    padding: 0 1rem;
  }
`}</style>
<div id="about">
<p>
    This site teaches the CSS fundamentals that are used in any website's layout.
  </p>
<p>
    I assume you already know what selectors, properties, and values are. And you probably know a thing or two about layout, though it may still be a rage-provoking activity for you. If you want to learn HTML and CSS from the beginning, you should check out <a href="http://learn.shayhowe.com/html-css/">this tutorial</a>. Otherwise, let's see if we can save you some fury on your next project.
  </p>
</div>
<div className="nav-wrapper">
<Link className="nav start" to="./no-layout.html">Get Started</Link>
</div>
<div id="translator">
</div>
<div id="translations">
<span><a href="http://learnlayout.com">english</a></span>
<span><a href="http://es.learnlayout.com">espaÃ±ol</a></span>
<span><a href="http://fr.learnlayout.com">franÃ§ais</a></span>
<span><a href="http://de.learnlayout.com">deutsch</a></span>
<span><a href="http://nl.learnlayout.com">dutch</a></span>
<span><a href="http://it.learnlayout.com">italiano</a></span>
<span><a href="http://pt-br.learnlayout.com">portuguÃªs (brasil)</a></span>
<span><a href="http://pt-pt.learnlayout.com">portuguÃªs (portuguÃªs)</a></span>
<span><a href="http://ru.learnlayout.com">ÑÑÑÑÐºÐ¸Ð¹</a></span>
<span><a href="http://fa.learnlayout.com">ÙØ§Ø±Ø³Û</a></span>
<span><a href="http://ar.learnlayout.com">Ø¹Ø±Ø¨Ù</a></span>
<span><a href="http://zh.learnlayout.com">ä¸­æ</a></span>
<span><a href="http://zh-tw.learnlayout.com">æ­£é«ä¸­æ</a></span>
<span><a href="http://ko.learnlayout.com">íêµ­ì´</a></span>
<span><a href="http://ja.learnlayout.com">æ¥æ¬èª</a></span>
</div>
</div>
    );
  }
}
