import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    jersey: '',
    position: '',
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeJerseyEvent = (e) => {
    e.preventDefault();
    this.setState({ jersey: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const {
      imageUrl, name, jersey, position,
    } = this.state;
    const { createPlayer } = this.props;

    const newPlayer = {
      imageUrl,
      name,
      jersey,
      position,
      uid: authData.getUid(),
    };

    createPlayer(newPlayer);
  }

  render() {
    return (
      <form className="col-6 offset-3">
         <div className="form-group">
        <label htmlFor="playerImg">Player Image</label>
        <input
          type="text"
          className="form-control"
          id="playerImg"
          placeholder="Add Player Image"
          onChange={this.changeImageUrlEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="playerName">PlayerName</label>
        <input
          type="text"
          className="form-control"
          id="playerName"
          placeholder="Enter Player Name"
          onChange={this.changeNameEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="playerJersey">Jersey Number</label>
        <input
          type="text"
          className="form-control"
          id="playerJersey"
          placeholder="Enter Jersey Number"
          onChange={this.changeJerseyEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="playerPosition">Player Position</label>
        <input
          type="text"
          className="form-control"
          id="playerPosition"
          placeholder="Enter Player Position"
          onChange={this.changePositionEvent}
        />
      </div>
      <button className="btn btn-dark" onClick={this.savePlayerEvent}>Save Player</button>
    </form>
    );
  }
}

export default PlayerForm;
