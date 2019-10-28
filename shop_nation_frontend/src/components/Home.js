import React, { Component } from "react";
import { Button, Search } from "react-bootstrap";

import "./css/Home.css";

import GetShoppingList from "./GetShoppingList";
import GetProductList from "./GetProductList";
import SearchBar from "./SearchBar";
import Total from "./Total";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      myHomeBoolean: true,
      searchValue: '',
      updateSearch: true,
      totalPrice: 0
    };

    //this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange = event => {
    this.setState({
        searchValue: event
    });
    return event;
  };

  handleClick() {
    console.log("Jimmy");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps + "it worked!!");
  }

  changeTotalPrice = received => {
    this.setState({
        totalPrice: received
    });
    return received;
  };
  

  changeSearchState = received => {
    this.setState({
        updateSearch: received
    });
    return received;
  };

  changeHomeState = received => {
    this.setState({
      myHomeBoolean: received
    });
    return received;
  };

  printState = () => {
    console.log(this.state.searchValue);
  };

  render() {
    return (
      /*
                    <img src={require('./../images/shopNationLogo.png')}  alt="Shop Nation" className="center"></img>
                    */
      <div className="Home">
        {/* <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          rel="stylesheet"
        />*/}
        <div className="Home-header"></div>
        <div className="Home-centre">
          <div className="Home-items">
            <div className="Home-search">
              <SearchBar changeSearchState={this.changeSearchState} searchValue={this.state.searchValue} handleSearchChange={this.handleSearchChange}/>
            </div>
            <div className="Home-itemList">
              <GetProductList 
                changeHomeState={this.changeHomeState} 
                searchValue={this.state.searchValue} 
                changeSearchState={this.changeSearchState}
                updateSearch={this.state.updateSearch}                
                
                />
            </div>
          </div>
          <div className="Home-basket">
            <div className="Home-basketList">
              <div className="Home-basket-header">My Basket</div>
              <div className="Home-basket-content">
                <div className="Home-basket-shoppingList" id="ScrollBar-style">
                  <GetShoppingList
                    changeHomeState={this.changeHomeState}
                    theHomeState={this.state.myHomeBoolean}
                    changeTotalPrice={this.changeTotalPrice}
                  />
                </div>
                <div className="Home-basket-total">
                    <Total
                        TotalPrice={this.state.totalPrice}
                    />
                </div>
              </div>
            </div>
            <div className="Home-checkout">
              <button
                type="button"
                className="Home-checkout-button"
                class="btn btn-primary btn-lg btn-block"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        {/* <button onClick={this.printState}>My Button Home</button> */}
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
    );
  }
}
