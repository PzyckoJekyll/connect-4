import React, { Component } from 'react';
import Line from './Line';

class Board extends Component {
    render() {
        return (
            <div className="game-board">
                {this.props.circles.reduce(setLineIndexes(this.props.rows), []).map((indexes) =>
                    <Line onClick={this.props.onClick} circles={this.props.circles} indexes={indexes} />
                )}
            </div>
        );
    }
}

function setLineIndexes(rows) {
    return (acc, val, idx) => {
        const pos = idx % rows;
        acc[pos] = (acc[pos] || []).concat(idx);
        return acc;
    };
}

export default Board;