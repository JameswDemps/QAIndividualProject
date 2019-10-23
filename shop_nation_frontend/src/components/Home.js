import React from 'react';
import { Button } from 'react-bootstrap';

import './css/Home.css';

import GetShoppingList from './GetShoppingList';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true

        }
    }

    handleClick() {
        console.log("Jimmy")
    }

    


    render() {


        return (
                    /*
                    <img src={require('./../images/shopNationLogo.png')}  alt="Shop Nation" className="center"></img>
                    */
            <div className="Home"> 
                <div className="Home-header">
                </div>
                <div className="Home-centre">
                    <div className="Home-items">
                        <div className="Home-search">

                        </div>
                        <div className="Home-itemList">

                        </div>
                    </div>
                    <div className="Home-basket">
                        <div className="Home-basketList">
                            <div className="Home-basket-header">
                                My Basket 
                            </div>
                            <div className="Home-basket-content">
                                <div className="Home-basket-shoppingList">
                                    <GetShoppingList />
                                </div>

                            </div>
                        </div>
                        <div className="Home-checkout">
                            <button type="button" className="Home-checkout-button"  class="btn btn-primary btn-lg btn-block">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>




            /*
            <div className="Home">
                Hey
                <div className="col-lg-6">
                <div><img src={require('./../images/shopNationLogo.png')}  alt="Shop Nation" className="Home-header"></img></div>
                    <div className="Home-items">
                        <div className="Home-search">
                            Search Area!
                        </div>
                        <div className="Home-itemList">
                            items list area!
                            
                        </div>
                    </div>
                    <div className="Home-basket">
                        <div className="Home-basketList">
                            Basket!
                        </div>
                        <div className="Home-total-line"></div>
                        <div>
                            Totol
                        </div>
                        <div className="Home-checkout">
                            <Button variant="primary" disabled={this.state.isLoading} onClick={this.state.isLoading ? this.handleClick : null}>
                                {this.state.isLoading ? 'Loading…' : 'Click to load'}
                            </Button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">Button</button>
                
            </div>
            */
        )
    }
}