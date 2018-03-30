import React, { Component } from 'react';
import Board from './Board';
import './Game.css';

//indexes of the last position available per column
var columns = 7;
var rows = 6;
var colsMaxs = setColsMaxs(columns, rows);

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
        const winner = calculateWinner(this.state.circles);
        const movesTot = this.state.moves;
        const current = this.state.circles;
        let status = this.setGameStatus(winner, status, movesTot);

        return (
            <div className="connect-4">
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <br />
                <div className="game">
                    <div className="game-board">
                        <Board
                            rows={rows}
                            circles={current}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                </div>
                <div className="restart-div">
                    <br />
                    <button className="restart" onClick={() => this.restart()}>Restart</button>
                    <br />
                </div>
            </div>
        );
    }

    setGameStatus(winner, status, movesTot) {
        if (winner) {
            status = "Winner: " + (!this.state.rIsNext ? 'Red' : 'Yellow');
        }
        else {
            if (movesTot === this.state.circles.length) {
                status = 'It\'s a Tie';
            }
            else
                status = 'Next player: ' + (this.state.rIsNext ? 'Red' : 'Yellow');
        }
        return status;
    }

    restart() {
        colsMaxs = setColsMaxs(columns, rows);
        this.setState({
            circles: Array(columns * rows).fill(null),
            rIsNext: true,
            moves: 0
        });
    }
    handleClick(i) {
        const circles = this.state.circles.slice();
        if (calculateWinner(circles) || circles[i]) {
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
        var nextPlayer = this.state.rIsNext ? "Red" : "Yellow";
        var columnIndex = Math.floor(i / rows);
        circles[colsMaxs[columnIndex]] = nextPlayer;
        colsMaxs[columnIndex] -= 1;
    }
}

function setColsMaxs(columns, rows) {
    var colsMaxs = []
    for (let i = 1; i <= columns; i++) {
        colsMaxs.push((rows * i) - 1);
    }
    return colsMaxs;
}

function calculateWinner(circles) {
    const stepPositive = rows - 1;
    const stepNegative = rows + 1;
    const stepVertical = 1;
    const stepOrizontal = rows;
    for (let z = 0; z < rows * columns; z++) {
        if (((isValidStart(z, 0, stepVertical) && isConsecutiveFour(circles, z, stepVertical))
            || isConsecutiveFour(circles, z, stepOrizontal)
            || (isValidStart(z, 3, stepNegative) && isConsecutiveFour(circles, z, stepNegative))
            || (isValidStart(z, 3, stepPositive) && isConsecutiveFour(circles, z, stepPositive))
        ) && circles[z] != null) {
            return true;
        }
    }
    return false;
}

function isConsecutiveFour(circles, index, step) {
    return circles[index] === circles[index + 1 * step]
        && circles[index + 2 * step] === circles[index + 3 * step]
        && circles[index] === circles[index + 3 * step];
}

function isValidStart(index, offset, step) {
    return (Math.floor((index + 3 * step) / rows) === Math.floor(index / rows) + offset) && index + 3 * step <= rows * columns - 1;
}

export default Game;