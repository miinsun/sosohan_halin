/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React from "react";

// export class OneButton extends Component {
//   render() {
//     return (
//       <div>
//         <button className="w-100 btn btn-lg btn-primary" type="{this.props.type}">{this.props.title}</button>
//       </div>
//     );
//   }
// }

const CTOneButton = ({ type, title }) => (
  <div>
    <button className="w-100 btn btn-lg btn-primary" type={type}>{title}</button>
  </div>
);

export default CTOneButton;
