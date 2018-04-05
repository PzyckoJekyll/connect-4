import React, { Component } from 'react';
import Board from './Board';
import GameInfo from './GameInfo';
import Restart from './Restart';
import * as GameUtils from './GameUtils';
import './Game.css';

var columns = 7, rows = 6;
var colsMaxs = GameUtils.setColsMaxs(columns, rows);

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: Array(columns * rows).fill(null),
            rIsNext: true,
            moves: 0
        };
    }

    render() {
        const winner = GameUtils.calculateWinner(this.state.circles, rows, columns);
        const current = this.state.circles;

        return (
            <div className="connect-4">
                <GameInfo winner={winner} state={this.state} />
                <Board
                    rows={rows}
                    circles={current}
                    onClick={i => this.handleClick(i)}
                />
                <Restart onClick={() => this.restart()} />
            </div>
        );
    }

    restart() {
        colsMaxs = GameUtils.setColsMaxs(columns, rows);
        this.setState({
            circles: Array(columns * rows).fill(null),
            rIsNext: true,
            moves: 0
        });
    }

    handleClick(i) {
        const circles = this.state.circles.slice();
        if (GameUtils.calculateWinner(circles, rows, columns) || circles[i]) {
            return;
        }

        this.dropToken(i, circles);

        this.setState({
            circles: circles,
            rIsNext: !this.state.rIsNext,
            moves: this.state.moves + 1
        });
    }

    dropToken(i, circles) {
        var columnIndex = Math.floor(i / rows);
        circles[colsMaxs[columnIndex]] = this.state.rIsNext ? "Red" : "Yellow";
        colsMaxs[columnIndex] -= 1;
    }
}

export default Game;