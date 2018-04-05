import React, { Component } from 'react';

class Restart extends Component {
    render() {
        return (
            <div className="restart-div">
                <button className="restart" onClick={this.props.onClick}>Restart</button>
            </div>
        );
    }
}

export default Restart;
