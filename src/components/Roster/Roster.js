import React from 'react';
import PropTypes from 'prop-types';

// import authData from '../../helpers/data/authData';
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
  }

  componentDidMount() {
    playerData.getPlayers()
      .then((response) => this.setState({ players: response }))
      .catch((err) => console.error('no players', err));
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('cannot release players', err));
  }

  createBoard = (newPlayer) => {
    playerData.createPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Player Broke', err));
  }

  render() {
    const { players, formOpen } = this.state;
    const playerCards = players.map((player) => <Players key={player.id} player={player} deletePlayer={this.deletePlayer} />);

    return (
      <div className="Roster">
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square"></i></button>
        { formOpen ? <PlayerForm createPlayer={this.createPlayer}/> : '' }
        <div className="card-columns">
          { playerCards }
        </div>
      </div>
    );
  }
}

export default Roster;
