import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Game from './Game';
import './index.css';

class ConnectFour extends Component {
    render() {
        return (
            <div>
                <Banner />
                <br />
                <Game />
            </div>
        );
    }
}

// ==============================================================
ReactDOM.render(<ConnectFour />, document.getElementById('root'));


