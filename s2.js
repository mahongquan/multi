import ReactDOMServer from 'react-dom/server';
import React, { Component } from 'react';
class Root extends Component {
    render=()=>{
        return(<div>hi</div>);
    }
}
console.log(ReactDOMServer.renderToStaticMarkup(<Root />));