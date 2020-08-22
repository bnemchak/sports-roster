import React from 'react';
import PropTypes from 'prop-types';

import playerData from '../../helpers/data/playerData';
import Players from '../Players/Players';

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

  render() {
    const { players } = this.state;
    const playerCards = players.map((player) => <Players key={player.id} player={player} />);

    return (
      <div className="Roster">
        <div className="card-columns">
          { playerCards }
        </div>
      </div>
    );
  }
}

export default Roster;
