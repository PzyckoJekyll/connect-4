import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <header className="Banner-header">
          <img src={logo} className="Banner-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Banner;
