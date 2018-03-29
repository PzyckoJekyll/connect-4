import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './Banner';
import Game from './Game';

class ConnectFour extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <br/>
                <Game/>
            </div>
        );
    }
}

// ==============================================================
ReactDOM.render(<ConnectFour />, document.getElementById('root'));


