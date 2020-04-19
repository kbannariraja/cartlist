import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
    state = {

    };
    render() {
        return (
            <Fragment>
                <Link to="/cartlist">
                    <div className="car-icon pull-left">
                        <span className="fa fa-shopping-cart"></span>
                        <div className="cart-count">1</div>
                    </div>
                </Link>
            </Fragment>
        );
    }
}


export default Cart;