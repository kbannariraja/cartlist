
import React, { Component, Fragment } from 'react';
import Search from '../components/Search';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
class Header extends Component {
  state = {

  };
  render() {

    return (
      <Fragment>
        <header>
          <Link to="/produtlist" className="Logo">
            <div><i className="fa fa-star checked"></i></div>
          </Link>
          <div className="right-nav">
            <Search />
            <Cart />
          </div>
        </header>
      </Fragment>
    );
  }
}


export default Header;
