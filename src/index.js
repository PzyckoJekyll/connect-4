import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var colMax1 = 5;
var colMax2 = 11;
var colMax3 = 17;
var colMax4 = 23;
var colMax5 = 29;
var colMax6 = 35;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(36).fill(null),
            rIsNext: true,
            moves: 0
        };
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const movesTot = this.state.moves;
        const current = this.state.squares;
        let status;

        if (winner) {
            status = "Winner: " + (!this.state.rIsNext ? 'Red' : 'Yellow');
        } else {
            if (movesTot === 36) {
                status = 'It\'s a Tie';
            } else
                status = 'Next player: ' + (this.state.rIsNext ? 'Red' : 'Yellow');
        }

        return (
            <div className="connect-4">
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <br></br>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>

                </div>
                <div className="restart-div">
                    <br></br>
                    <button className="restart" onClick={() => this.restart()}>Restart</button>
                    <br></br>
                </div>
            </div>
        );
    }

    restart() {
        colMax1 = 5;
        colMax2 = 11;
        colMax3 = 17;
        colMax4 = 23;
        colMax5 = 29;
        colMax6 = 35;
        this.setState({
            squares: Array(36).fill(null),
            rIsNext: true,
            moves: 0
        });
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        if (i >= 0 && i < 6) {
            squares[colMax1] = this.state.rIsNext ? "Red" : "Yellow";
            colMax1--
        } else if (i >= 6 && i < 12) {
            squares[colMax2] = this.state.rIsNext ? "Red" : "Yellow";
            colMax2--
        } else if (i >= 12 && i < 18) {
            squares[colMax3] = this.state.rIsNext ? "Red" : "Yellow";
            colMax3--
        } else if (i >= 18 && i < 24) {
            squares[colMax4] = this.state.rIsNext ? "Red" : "Yellow";
            colMax4--
        } else if (i >= 24 && i < 30) {
            squares[colMax5] = this.state.rIsNext ? "Red" : "Yellow";
            colMax5--
        } else if (i >= 30 && i < 36) {
            squares[colMax6] = this.state.rIsNext ? "Red" : "Yellow";
            colMax6--
        }

        this.setState({
            squares: squares,
            rIsNext: !this.state.rIsNext,
            moves: this.state.moves + 1
        });
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(6)}
                    {this.renderSquare(12)}
                    {this.renderSquare(18)}
                    {this.renderSquare(24)}
                    {this.renderSquare(30)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(7)}
                    {this.renderSquare(13)}
                    {this.renderSquare(19)}
                    {this.renderSquare(25)}
                    {this.renderSquare(31)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2)}
                    {this.renderSquare(8)}
                    {this.renderSquare(14)}
                    {this.renderSquare(20)}
                    {this.renderSquare(26)}
                    {this.renderSquare(32)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(9)}
                    {this.renderSquare(15)}
                    {this.renderSquare(21)}
                    {this.renderSquare(27)}
                    {this.renderSquare(33)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(10)}
                    {this.renderSquare(16)}
                    {this.renderSquare(22)}
                    {this.renderSquare(28)}
                    {this.renderSquare(34)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5)}
                    {this.renderSquare(11)}
                    {this.renderSquare(17)}
                    {this.renderSquare(23)}
                    {this.renderSquare(29)}
                    {this.renderSquare(35)}

                </div>
            </div>
        );
    }
}

function Square(props) {
    return (
        <button className={"square ".concat(props.value)} onClick={props.onClick}>

        </button>
    );
}

function calculateWinner(squares) {
    for (let z = 0; z < 36; z++) {

        if (
            (
                (squares[z] === squares[z + 1] && squares[z + 2] === squares[z + 3] && squares[z] === squares[z + 3] && !(z % 5 === 0 || z % 11 === 0 || z % 17 === 0 || z % 23 === 0 || z % 29 === 0 || z % 35 === 0))
                || (squares[z] === squares[z + 6] && squares[z + 12] === squares[z + 18] && squares[z] === squares[z + 18])
                || (squares[z] === squares[z + 7] && squares[z + 14] === squares[z + 21] && squares[z] === squares[z + 21] && (z === 0 || z === 1 || z === 2 || z === 6 || z === 7 || z === 8 || z === 12 || z === 13 || z === 14))
                || (squares[z] === squares[z + 5] && squares[z + 10] === squares[z + 15] && squares[z] === squares[z + 15] && (z === 3 || z === 4 || z === 5 || z === 9 || z === 10 || z === 11 || z === 15 || z === 16 || z === 17))
            ) && squares[z] != null
        ) {
            return true;
        }
    }
    return false;
}

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game class="ttttt" />, document.getElementById("game"));


