import React, { Component } from 'react';
import Header from './headerNav/header';
import NavBar from './headerNav/navbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>ECOM</h1>
        {...this.props.children}
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default Layout;