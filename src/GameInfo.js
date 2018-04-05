import React, { Component } from 'react';

class GameInfo extends Component {
    render() {
        return (
            <div className="game-info">
                <div>{this.setGameStatus(this.props.winner,this.props.state)}</div>
            </div>
        );
    }

    setGameStatus(winner, state) {
        let status="";
        if (winner) {
            status = "Winner: " + (!state.rIsNext ? 'Red' : 'Yellow');
        }
        else {
            if (state.movesTot === state.circles.length) {
                status = 'It\'s a Tie';
            }
            else
                status = 'Next player: ' + (state.rIsNext ? 'Red' : 'Yellow');
        }
        return status;
    }
}

export default GameInfo;