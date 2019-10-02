import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Elem, { Div } from './Elem';
const css_str = `
          .three-column {
            padding: 1em;
            -moz-column-count: 3;
            -moz-column-gap: 1em;
            -webkit-column-count: 3;
            -webkit-column-gap: 1em;
            column-count: 3;
            column-gap: 1em;
          }
        `;
export default class column extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="content">column</h1>
        <p className="content">
          There is a new set of CSS properties that let you easily make
          multi-column text. Have a look:
        </p>

        <figure className="highlight">
          <Highlight>{`.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}`}</Highlight>
        </figure>
        <Div css={css_str} className="content">
          <Elem className="three-column ipsum">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
              vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
              ultrices nec congue eget, auctor vitae massa. Fusce luctus
              vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
              ornare eu, lobortis in odio. Praesent convallis urna a lacus
              interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed
              ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
              imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
              venenatis. Integer fringilla congue eros non fermentum. Sed
              dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
              diam velit.
            </div>
          </Elem>
        </Div>
        <p className="content">
          CSS columns are very new, so you need to use the prefixes, and it
          won&apos;t work{' '}
          <a href="http://caniuse.com/#search=column">
            through IE9 or in Opera Mini
          </a>
          . There are some more column-related properties, so{' '}
          <a href="http://www.quirksmode.org/css/multicolumn.html">
            click here to read more
          </a>
          . Otherwise, off to the next topic.
        </p>
      </React.Fragment>
    );
  }
}
