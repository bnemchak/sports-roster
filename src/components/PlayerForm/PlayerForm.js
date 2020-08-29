import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropTypes.func.isRequired,
    updatePlayer: PropTypes.func.isRequired,
    playerThatIAmEditing: PropTypes.object.isRequired,
    closeForm: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    jersey: '',
    position: '',
    isEditing: false,
  }

  componentDidMount() {
    const { playerThatIAmEditing } = this.props;
    if (playerThatIAmEditing.name) {
      this.setState({
        imageUrl: playerThatIAmEditing.imageUrl,
        name: playerThatIAmEditing.name,
        jersey: playerThatIAmEditing.jersey,
        position: playerThatIAmEditing.position,
        isEditing: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevPlayer = prevProps.playerThatIAmEditing;
    const incomingPlayer = this.props.playerThatIAmEditing;
    if (prevPlayer.name !== incomingPlayer.name) {
      this.setState({
        imageUrl: incomingPlayer.imageUrl || '',
        name: incomingPlayer.name || '',
        jersey: incomingPlayer.jersey || '',
        position: incomingPlayer.position || '',
        // eslint-disable-next-line no-unneeded-ternary
        isEditing: incomingPlayer.name ? true : false,
      });
    }
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

  editPlayerEvent = (e) => {
    e.preventDefault();
    const {
      imageUrl, name, jersey, position,
    } = this.state;
    const { updatePlayer, playerThatIAmEditing } = this.props;

    const myPlayerWithChanges = {
      imageUrl,
      name,
      jersey,
      position,
      uid: authData.getUid(),
    };

    updatePlayer(playerThatIAmEditing.id, myPlayerWithChanges);
  }

  closeFormEvent = (e) => {
    e.preventDefault();
    this.props.closeForm();
  };

  render() {
    return (
      <form className="col-6 offset-3">
        <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button>
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
      <button className="btn btn-dark" onClick={this.editPlayerEvent}>Edit Player</button>
      <button className="btn btn-dark" onClick={this.savePlayerEvent}>Save Player</button>
    </form>
    );
  }
}

export default PlayerForm;
