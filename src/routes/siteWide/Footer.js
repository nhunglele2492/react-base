import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../Assets/images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div class="footer__copyright"><p>Created by <a href="/">Nhunglele</a></p></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
