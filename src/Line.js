import React, { Component } from 'react';
import Dot from './Dot';

class Line extends Component {
    render() {
        return (
            this.props.indexes.map((index) =>
                <Dot
                    value={this.props.circles[index]}
                    onClick={() => this.props.onClick(index)}
                />
            )
        );
    }
}
export default Line;