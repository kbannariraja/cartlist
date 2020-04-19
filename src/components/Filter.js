import React, { Component, Fragment } from 'react';
import Modal from 'react-awesome-modal';
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    openModal = () => {
        this.setState({ visible: true });
    }

    closeModal = () => {
        console.log("test")
        this.setState({ visible: false });
    }


    render() {
        return (
            <Fragment>
                <div className="col-md-2 hidden-sm hidden-xs">
                    <div className="fliter-option-desk">
                        <div className="pdRL_15 sort-label">Filters</div>
                        <div className="price-slider-desk">
                            <form className="range-field my-4 w-100 text-center">
                                <input type="range" className="custom-range" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" />
                            </form>
                            <div className="text-center price_text mb-5">Price</div>
                            <div className="text-center">
                                <button className="btn apply-btn-desk">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden-lg hidden-md col-xs-6 fliter-option-mobile" >
                    <i className="fa fa-filter" onClick={() => this.openModal()}></i>Filter
                    {this.state.visible === true &&
                        <Modal visible={this.state.visible} width="80%" height="250" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div className="price-slider">
                                <div className="fliter-heading">Filter Option</div>
                                <input type="range" className="custom-range" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" />
                                <div className="text-center price_text">Price</div>
                                <div className="text-center btn-action">
                                    <button className="btn cancel-btn" onClick={() => this.closeModal()}>Cancel</button>
                                    <button className="btn apply-btn" onClick={() => this.closeModal()}>Apply</button>
                                </div>
                            </div>
                        </Modal>
                    }
                </div>
            </Fragment>
        );
    }
}


export default Filter;