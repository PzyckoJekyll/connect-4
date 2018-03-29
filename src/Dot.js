import React from 'react';
import ReactDOM from 'react-dom';

class Dot extends React.Component {
    render(){
        return (
        <button className={`circle ${this.props.value}`} onClick={this.props.onClick} />
      );
    }
}

export default Dot;