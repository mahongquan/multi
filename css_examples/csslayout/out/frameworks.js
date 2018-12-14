import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class frameworks extends Component<Props> {
  render() {
    return (
    <div id="container">
<h1 className="content">css frameworks</h1>
<p className="content">
  Because CSS layout is so tricky, there are CSS frameworks out there to help make it easier. Here are a few if you want to check them out. Using a framework is only a good idea if the framework really does what you need your site to do. They're no replacement for knowing how CSS works.
</p>
<style jsx="true">{`
  #logos {
    text-align: center;
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1000px;
  }
  #logos img {
    margin: 5px;
    border: solid white 5px;
    vertical-align: middle;
    position: relative;
  }
  #logos img:hover {
    top: 1px;
  }
  #logos img:active {
    top: 2px;
  }
  #logos a:hover {
    background-color: transparent;
  }
`}</style>
<div id="logos">
<a href="#"><img alt="blueprint" src=".//images/blueprint.jpg"/></a>
<a href="#"><img alt="unsemantic" src=".//images/unsemantic.png"/></a>
<a href="#"><img alt="bluetrip" src=".//images/bluetrip.jpg"/></a>
<a href="#"><img alt="bootstrap" src=".//images/bootstrap.jpg"/></a>
<a href="http://susy.oddbird.net/"><img alt="susy" src=".//images/susy.jpg"/></a>
<a href="#"><img alt="foundation" src=".//images/foundation.png"/></a>
<a href="#"><img alt="kube" src=".//images/kube.png"/></a>
<a href="#"><img alt="groundwork" src=".//images/groundwork.gif"/></a>
<a href="#"><img alt="semantic ui" src=".//images/semantic_ui.png"/></a>
<a href="http://purecss.io/"><img alt="Purecss" src=".//images/logo_pure.png"/></a>
</div>
<p className="content">
  That's it! If you have any feedback on this site, please <a href="#">let me know on Twitter</a>!
</p>
<div className="nav-wrapper">
<Link className="nav prev" to="flexbox.html">Previous</Link>
<Link className="nav next" to="about.html">Next</Link>
</div>
<footer>
          19 / 19
        </footer>
</div>
    );
  }
}
