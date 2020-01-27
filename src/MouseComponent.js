import React, { Component } from 'react';

export default class MouseComponent extends Component {

  componentDidMount() {
    require("./hoverEffect.js")
  }
  
  render() {
    return (
      <div className="bar" id="mouse">
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}

// import React, { Component } from 'react';

// export default class CatComponent extends Component {
//   render() {
//     return (
//       <div className="bar" id="cat">
//         <img src="/cat.gif" />
//       </div>
//     );
//   }
// }
