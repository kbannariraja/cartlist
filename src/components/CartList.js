import React, { Component, Fragment } from "react";
import cartService from "../services/cart.json";
class CartList extends Component {
  state = {
    index: 1,
    cartItems: [],
    isLoading: false,
    cartTotal: {
      actual: 0,
      discount: 0,
      total: 0,
    },
  };

  componentDidMount() {
    //this.initCartItems();
    const cartItemsWithCount = cartService.items.map((item) => {
      return { ...item, cartprice: { ...item.price }, count: 1 };
    });
    this.setState({ cartItems: cartItemsWithCount }, () => {
      this.calculateTotalPrice();
    });
  }

  componentWillUnmount() {}

  initCartItems = () => {
    // this.setState({ isLoading: true });
    // getCartItems().then(response => {
    //   this.setState({ cartItems: response.data, isLoading: false });
    // }).catch(error => {
    //   console.log(error);
    // });
  };

  increaseDecreaseCartCount = (item, index, method) => {
    const { cartItems } = this.state;
    if (method === "REMOVE" && item.count === 1) return;
    // Calculate the cart count
    item.count = method === "ADD" ? item.count + 1 : item.count - 1;

    // Cacluate the cart price
    item.cartprice.actual = item.price.actual * item.count;
    item.cartprice.display = item.price.display * item.count;
    cartItems.splice(index, 1, item);
    this.setState({ cartItems }, () => {
      this.calculateTotalPrice();
    });
  };

  removeCartItem = (index) => {
    const cartItems = this.state.cartItems.splice(index, 1);
    this.setState(cartItems, () => {
      this.calculateTotalPrice();
    });
  };

  calculateTotalPrice = () => {
    const { cartItems } = this.state;
    const total = cartItems.reduce((acc, item) => {
      return acc + item.cartprice.display;
    }, 0);

    const actual = cartItems.reduce((acc, item) => {
      return acc + item.cartprice.actual;
    }, 0);

    this.setState({
      cartTotal: { total, actual, discount: total - actual },
    });
  };

  render() {
    const {cartItems, cartTotal } = this.state;
    return (
      <Fragment>
        <div className="col-md-9">
          {cartItems.map((data, index) => {
            return (
              <div className="col-md-12 cart-list clearFix">
                <div className="col-md-1 col-sm-2 col-xs-3">
                  <img src={data.image} className="img-responsive" alt={data.name}/>
                </div>
                <div className="col-md-11 col-sm-10 col-xs-9">
                  <div className="item_name">{data.name}</div>
                  <div className="item-last cart">
                    <div className="col-md-5 col-sm-4 cart_price">
                      <div className="price">
                        &#x20b9;{data.cartprice.actual}
                      </div>
                      <div className="spaical_price price">
                        {data.cartprice.display}
                      </div>
                      <div className="off_per price">{data.discount}% 0ff</div>
                    </div>
                    <div className="counter col-md-4 col-sm-4 col-xs-12">
                      <span
                        className="minus"
                        onClick={() => {
                          this.increaseDecreaseCartCount(data, index, "REMOVE");
                        }}
                      >
                        -
                      </span>
                      <input type="text" value={data.count} />
                      <span
                        className="plus"
                        onClick={() => {
                          this.increaseDecreaseCartCount(data, index, "ADD");
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div className="col-md-3 col-sm-4 remove-btn">
                      <div
                        onClick={() => {
                          this.removeCartItem(index);
                        }}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-3 price-details">
          <div className="price-heading">Price Details</div>
          <div className="clearFix price-sec">
            <div className="pull-left">Price ({cartItems.length} item)</div>
            <div className="pull-right">&#x20b9;{cartTotal.total}</div>
          </div>
          <div className="clearFix price-sec">
            <div className="pull-left">Discount</div>
            <div className="pull-right">&#x20b9;{cartTotal.discount}</div>
          </div>
          <div className="clearFix price-total">
            <div className="pull-left">Total Payable</div>
            <div className="pull-right">&#x20b9;{cartTotal.actual}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartList;