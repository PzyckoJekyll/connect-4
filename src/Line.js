import React, { Component } from 'react';
import Dot from './Dot';

class Line extends Component {
    render() {
        return (
            <div className="board-row">
                {this.props.indexes.map((index) =>
                    <Dot
                        value={this.props.circles[index]}
                        onClick={() => this.props.onClick(index)}
                    />
                )}
            </div>
        );
    }
}

export default Line;