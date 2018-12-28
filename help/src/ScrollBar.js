import React, { Component } from 'react';
export default class Root extends Component<Props> {
  render() {
    return (
      <div
        className="custom-scrollbar"
        style={{ width: '100px', height: '100px', overflow: 'auto' }}
      >
        <style jsx="true">
          {`
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              border-radius: 10px;
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
            }
          `}
        </style>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
          exercitationem nulla qui repellat laborum vitae, molestias tempora
          velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur
          velit sit?
        </p>
      </div>
    );
  }
}
