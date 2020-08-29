import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

import './Roster.scss';

class Roster extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  state = {
    players: [],
    formOpen: false,
    editPlayer: {},
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get players broke', err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('cannot release players', err));
  }

  createPlayer = (newPlayer) => {
    playerData.createPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Player Broke', err));
  }

  editAPlayer = (playerToEdit) => {
    this.setState({ formOpen: true, editPlayer: playerToEdit });
  }

  updatePlayer = (playerId, editedPlayer) => {
    playerData.updatePlayer(playerId, editedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('update player broke', err));
  }

  closeForm = () => {
    this.setState({ formOpen: false });
  }

  render() {
    const { players, formOpen, editPlayer } = this.state;
    const playerCards = players.map((player) => <Players key={player.id} player={player} deletePlayer={this.deletePlayer} editAPlayer={this.editAPlayer} />);

    return (
      <div className="Roster">
        { !formOpen ? <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: true, editPlayer: {} }); }}><i className="far fa-plus-square"></i></button> : '' }
        { formOpen ? <PlayerForm createPlayer={this.createPlayer} playerThatIAmEditing={editPlayer} updatePlayer={this.updatePlayer} closeForm={this.closeForm}/> : '' }
        <div className="card-columns">
          { playerCards }
        </div>
      </div>
    );
  }
}

export default Roster;
