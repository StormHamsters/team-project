import React from 'react';
import { connect } from 'react-redux';

import HUDBar from './bar';

class StatusBar extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <div className="status-bar">
          <HUDBar name={ 'Health' }
                  value={ this.props.player.health }
                  percentage={ this.props.player.health <= 100 ? this.props.player.health : 100 }
                  barClass={ 'health' }
          />
          <div>
          /</div>          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.game.player
  }
};

export default connect(mapStateToProps)(StatusBar);