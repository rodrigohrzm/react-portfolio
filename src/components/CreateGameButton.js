import React from "react";
import { memo } from 'react';
import PropTypes from "prop-types";
import "./CreateGameButton.css";
import { connect } from "react-redux";
import { createGame } from "../data/actions.js";

const CreateGameButton = memo(function CreateGameButton() {
  const propTypes = {
    createGame: PropTypes.func.isRequired
  };

  const handleClick = () => {
    this.props.createGame(6);
  };
    return (
    <button onClick={this.handleClick} className="CreateGameButton">New Game</button>
    );
});

// export class CreateGameButton extends PureComponent {
//   static propTypes = {
//     createGame: PropTypes.func.isRequired
//   };

//   handleClick = () => {
//     this.props.createGame(6);
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick} className="CreateGameButton">
//         New Game
//       </button>
//     );
//   }
// }

export default connect(null, { createGame })(CreateGameButton);