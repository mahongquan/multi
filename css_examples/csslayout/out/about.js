import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class about extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">about this site</h1>
<style jsx="true">{`
  #credits {
    text-align: center;
  }
  #credits img {
    vertical-align: middle;
    margin: 0 20px;
    width: 25%;
    max-width: 300px;
  }
  #credits a:hover {
    background-color: transparent;
  }
  .content {
    text-align: center;
  }
`}</style>
<div id="credits">
<a href="#"><img alt="Greg Smith" src="#"/></a>
<a href="#"><img alt="Isaac Durazo" src="#"/></a>
<a href="#"><img alt="Bocoup" src=".//images/bob.png"/></a>
</div>
<div className="content">
  Written and built by <a href="#">Greg Smith</a>. Design by <a href="#">Isaac Durazo</a>. We work at <a href="#">Bocoup</a>.
</div>
<div className="content">
<a href="#">
    Issues / Feedback
  </a>
</div>
</div>
    );
  }
}
