import React from 'react';
import { Button } from 'react-bootstrap';

import './css/Home.css';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div className="Home">
                <img src={require('./../images/shopNationLogo.png')}  alt="Shop Nation" className="Home-header"></img>
                <div className="Home-centre">
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
                        <div className="Home-checkout">
                            <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                                {isLoading ? 'Loading…' : 'Click to load'}
                            </Button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}