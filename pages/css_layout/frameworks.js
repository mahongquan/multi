import React, { Component } from 'react';
export default class frameworks extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">css frameworks</h1>
        <p className="content">
          Because CSS layout is so tricky, there are CSS frameworks out there to
          help make it easier. Here are button few if you want to check them
          out. Using button framework is only button good idea if the framework
          really does what you need your site to do. They&apos;re no replacement
          for knowing how CSS works.
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
          #logos button:hover {
            background-color: transparent;
          }
        `}</style>
        <div id="logos">
          <a href="http://www.blueprintcss.org/">
            <img src="./images/blueprint.jpg" alt="blueprint" />
          </a>
          <a href="http://www.unsemantic.com">
            <img src="./images/unsemantic.png" alt="unsemantic" />
          </a>
          <a href="http://bluetrip.org/">
            <img src="./images/bluetrip.jpg" alt="bluetrip" />
          </a>
          <a href="http://twitter.github.com/bootstrap/">
            <img src="./images/bootstrap.jpg" alt="bootstrap" />
          </a>
          <a href="http://susy.oddbird.net/">
            <img src="./images/susy.jpg" alt="susy" />
          </a>
          <a href="http://foundation.zurb.com/">
            <img src="./images/foundation.png" alt="foundation" />
          </a>
          <a href="http://imperavi.com/kube/">
            <img src="./images/kube.png" alt="kube" />
          </a>
          <a href="http://groundworkcss.github.com/">
            <img src="./images/groundwork.gif" alt="groundwork" />
          </a>
          <a href="http://semantic-ui.com">
            <img src="./images/semantic_ui.png" alt="semantic ui" />
          </a>
          <a href="http://purecss.io/">
            <img src="./images/logo_pure.png" alt="Purecss" />
          </a>
        </div>
        <p className="content">
          That&apos;s it! If you have any feedback on this site, please{' '}
          <a href="https://twitter.com/intent/tweet?source=webclient&text=%40_gsmith">
            let me know on Twitter
          </a>
          !
        </p>
      </React.Fragment>
    );
  }
}
