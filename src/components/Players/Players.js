import React from 'react';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card player-card text-white bg-dark mb-3 rounded">
        <img src={ player.imageUrl } className="card-img-top rounded-circle" alt="playerPort"></img>
        <div className="card-body">
          <h3 className="card-title">{ player.name }</h3>
          <h4 className="card-text">{ player.position }</h4>
        </div>
      </div>
    );
  }
}

export default Player;
