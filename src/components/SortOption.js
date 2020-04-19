import React, { Component, Fragment } from 'react';
import Modal from 'react-awesome-modal';
class Sortoption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    openModals = () => {
        this.setState({ visible: true });
    }

    closeModals = () => {
        this.setState({ visible: false });
    }
    render() {

        return (
            <Fragment>

                <div className="hidden-lg hidden-md">
                    <i className="fa fa-sort mr-2" onClick={() => this.openModals()}></i>Sort
                        {this.state.visible === true &&
                        <Modal visible={true} width="80%" height="250" effect="fadeInDown" onClickAway={() => this.closeModals()}>
                            <div>
                                <div className="fliter-heading text-left">Sort Option</div>
                                <div className="text-left pd_10">
                                    <input type="radio" name="radio-group" checked />
                                    <label for="test1">Price &#8208;&#8208; High Low</label>
                                </div>
                                <div className="text-left pd_10">
                                    <input type="radio" name="radio-group" checked />
                                    <label for="test1">Price &#8208;&#8208; Low High</label>
                                </div>
                                <div className="text-left pd_10">
                                    <input type="radio" name="radio-group" checked />
                                    <label for="test1">Discount</label>
                                </div>
                                <div className="text-center btn-action">
                                    <button className="btn cancel-btn" onClick={() => this.closeModals()}>Cancel</button>
                                    <button className="btn apply-btn" onClick={() => this.closeModals()}>Apply</button>
                                </div>
                            </div>
                        </Modal>
                    }
                </div>
                <div className="sort-option clearFix pd_15 hidden-sm hidden-xs">
                    <div className="pull-left pdRL_15 sort-label">Sort By</div>
                    <div className="high_low pull-left pdRL_15">
                        <a href="javascript:void(0);" className="select">Price &#8208;&#8208; High Low</a>
                    </div>
                    <div className="high_low pull-left pdRL_15">
                        <a href="javascript:void(0);">Price &#8208;&#8208; Low High</a>
                    </div>
                    <div className="high_low pull-left pdRL_15">
                        <a href="javascript:void(0);">Discount</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Sortoption;