import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './Dot';

class Board extends React.Component {
    render() {
        return (
            <div>
                {this.renderLine(0)}
                {this.renderLine(1)}
                {this.renderLine(2)}
                {this.renderLine(3)}
                {this.renderLine(4)}
                {this.renderLine(5)}
            </div>
        );
    }

    renderLine(p) {
        return (
            <div className="board-row">
                {this.renderDot(p)}
                {this.renderDot(p + 6)}
                {this.renderDot(p + 12)}
                {this.renderDot(p + 18)}
                {this.renderDot(p + 24)}
                {this.renderDot(p + 30)}
            </div>
        );
    }

    renderDot(i) {
        return (
            <Dot
                value={this.props.circles[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
}

export default Board;