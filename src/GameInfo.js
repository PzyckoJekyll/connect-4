import React, { Component } from 'react';

class GameInfo extends Component {
    render() {
        return (
            <div className="game-info">
                <div>{this.props.status}</div>
            </div>
        );
    }
}

export default GameInfo;