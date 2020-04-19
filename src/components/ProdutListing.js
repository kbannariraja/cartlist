
import React, { Component, Fragment } from 'react';
import Filter from '../components/Filter';
import Sortoption from '../components/SortOption';
import cartService from '../services/cart.json';
class ProdutList extends Component {
    state = {
        cartItems: cartService.items,
    };

    

    componentDidMount() {
        //this.initCartItems();
    }

    componentWillUnmount() {

    }

    initCartItems = () => {

        // this.setState({ isLoading: true });
        // getCartItems().then(response => {
        //   this.setState({ cartItems: response.data, isLoading: false });
        // }).catch(error => {
        //   console.log(error);
        // });
    }
    render() {
        const { cartItems } = this.state;
        return (
            <Fragment>
                <div className="visible-sm visible-xs sort-option-mobile col-xs-6">
                    <Sortoption />
                </div>
                <Filter />
                <div className="col-md-10 br_right">
                    <div className="hidden-sm hidden-xs">
                        <Sortoption />
                    </div>
                    <div classname="cart_container">
                        {cartItems.map((data) => {
                            return (
                                <div className="col-20">
                                    <div><img src={data.image} className="img-responsive" /></div>
                                    <div className="item_name">{data.name}</div>
                                    <div className="cart_price clearFix pdtb_10">
                                        <div className="price">&#x20b9;{data.price.actual}</div>
                                        <div className="spacial_price price">{data.price.display}</div>
                                        <div className="off_per price">{data.discount}% off</div>
                                    </div>
                                    <div className="clearFix text-center">
                                        <button className="btn add_cart_btn ">Add to Cart</button>
                                    </div>
                                </div>

                            )

                        })}
                    </div>


                </div>

            </Fragment>
        );
    }
}


export default ProdutList;
