import React, { Component } from 'react';

class Restart extends Component {
    render() {
        return (
            <div className="restart-div">
                <br />
                <button className="restart" onClick={this.props.onClick}>Restart</button>
                <br />
            </div>
        );
    }
}

export default Restart;
