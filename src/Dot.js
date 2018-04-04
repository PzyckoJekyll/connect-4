import React, { Component } from 'react';

class Dot extends Component {
    render() {
        return (
            <button className={`circle ${this.props.value != null ? this.props.value : "" }`} onClick={this.props.onClick} />
        );
    }
}

export default Dot;