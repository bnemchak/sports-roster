import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;

    deletePlayer(player.id);
  };

  render() {
    const { player } = this.props;
    return (
      <div className="card player-card text-white bg-dark mb-3 rounded">
        <img src={ player.imageUrl } className="card-img-top rounded-circle" alt="playerPort"></img>
        <div className="card-body">
          <h3 className="card-title">{ player.name }</h3>
          <h4 className="card-text">{ player.position }</h4>
          <h2 className="card-header">{ player.jersey }</h2>
          <button type="button" className="btn btn-warning" onClick={this.deletePlayerEvent}>Release</button>
        </div>
      </div>
    );
  }
}

export default Player;
