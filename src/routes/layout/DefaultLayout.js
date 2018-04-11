import React from 'react';
// SiteWide
import Header from '../siteWide/Header';
import Footer from '../siteWide/Footer';

class DefaultLayout extends React.Component {
  render() {
    let container = this.props.container;
    if(container) {
      container='container'
    }
    else {
      container=''
    }
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className={"main-content " + container}>
          {this.props.children}
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default DefaultLayout;
