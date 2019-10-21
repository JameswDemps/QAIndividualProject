import React from 'react';
import { Button } from 'react-bootstrap';

import './css/Home.css';

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
            <div className="Home">
                Hey
                <div><img src={require('./../images/shopNationLogo.png')}  alt="Shop Nation" className="Home-header"></img></div>
                <div className="col-lg-6">
                    Hey
                    {/* <div className="Home-items">
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
                    </div> */}
                </div>
                <button className="btn btn-primary">Button</button>
                
            </div>
        )
    }
}