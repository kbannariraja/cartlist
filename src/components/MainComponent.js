import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CartList from './CartList'
import ProdutList from './ProdutListing'
import Header from '../components/Header'
export default function MainComponents() {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <Header className="col-md-12" />
                    <Switch>
                        <Route exact path="/cartlist">
                            <CartList />
                        </Route>
                        <Route path="/produtlist">
                            <ProdutList />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}