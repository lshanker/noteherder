import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component{
    render(){
        return (
                 <nav className="Nav">
        <div className="logo">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/quill.svg" alt="Noteherder"/>
        </div>
        <button className="new-note">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note"/>
          <img className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note"/>
        </button>
      </nav>
        );
    }
}

export default Nav;