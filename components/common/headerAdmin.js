import React, { Component } from 'react'
import MenuAdmin from './menuAdmin';
import Banner from './banner';
export default class HeaderAdmin extends Component {
  render() {
    const {showMenu} = this.props;
    return (
      <div className="header-container">
        <Banner  menuAdmin />                
      </div>
    )
  }
}
