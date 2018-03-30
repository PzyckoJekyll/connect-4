import React, { Component } from 'react';
import Line from './Line';

class Board extends Component {
    render() {
        return (
            this.props.circles.reduce((acc, val, idx) => {
                const pos = idx % this.props.rows;
                acc[pos] = (acc[pos] || []).concat(idx);
                return acc;
            }, []).map((indexes) =>
                <Line onClick={this.props.onClick} circles={this.props.circles} indexes={indexes} />
            )
        );
    }
}

export default Board;