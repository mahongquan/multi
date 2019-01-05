import React from 'react';
export default class Colors extends React.Component {
  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '180px',
          height: '100vh',
          backgroundColor: '#777',
        }}
      >
        <span
          onClick={this.props.color_click}
          title="White"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#ffffff',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Dark Heather"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#616161',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Gray"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#f0f0f0',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Charcoal"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#5b5b5b',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Black"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#222222',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Heather Orange"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#fc8d74',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Heather Dark Chocolate"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#432d26',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Salmon"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#eead91',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Chesnut"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#806355',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Dark Chocolate"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#382d21',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Citrus Yellow"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#faef93',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Avocado"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#aeba5e',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Kiwi"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#8aa140',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Irish Green"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#1f6522',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Scrub Green"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#13afa2',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Teal Ice"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#b8d5d7',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Heather Sapphire"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#15aeda',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Sky"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#a5def8',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Antique Sapphire"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#0f77c0',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Heather Navy"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#3469b7',
          }}
        />
        <span
          onClick={this.props.color_click}
          title="Cherry Red"
          style={{
            width: '20px',
            height: '20px',
            margin: '5px 5px 5px 5px',
            backgroundColor: '#c50404',
          }}
        />
      </div>
    );
  };
}
