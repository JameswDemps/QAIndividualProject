import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import "./css/GetShoppingList.css";

export default class GetShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      firstRender: true,
      totalPrice: 0
    };
  }

  // componentDidMount() {
  //   // console.log("ComponentDidMount");

  //   this.getShoppingList();
  //   var shopping = this.state.shoppingList;
  //   // console.log(shopping);
  //   this.myFunc();
  //   this.calculateTotal(shopping);

  //   this.updateTotalPrice();
  // }

  myFunc = () => {
    this.props.changeHomeState(false);
    //console.log("Clicked");
  };

  updateTotalPrice = () => {
    // console.log("T");
    // console.log(this.state.totalPrice);
    this.props.changeTotalPrice(this.state.totalPrice);
  };

  changefirstRenderFalse = () => {
    this.state.firstRender = false;
  };

  deleteItem = id => {
    const requestOptions = {
      method: "DELETE"
    };

    fetch("http://localhost:9999/shop/removeFromBasket/" + id, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.getShoppingList();
        this.calculateTotal(this.state.shoppingList);
        this.updateTotalPrice();
      });
  };

  async getShoppingList() {
    const response = await fetch("http://localhost:9999/shop/showBasket");
    const json = await response.json();
     this.setState({ shoppingList: json });
    //this.state.shoppingList = json;
    // console.log("Shopping List get!");

    // fetch("/shop/showBasket")
    // .then(response =>  response.json())
    // .then(data => this.setState({
    //     shoppingList : data}))
    // .then(data => console.log(this.state.shoppingList)
  }

  calculateTotal(shopping) {
    // var totalSame = false;

    // while (!totalSame) {
    // var shopping = this.state.shoppingList;
    var sum = 0.0;
    var calculation;
    //this.state.firstRender = false;
    shopping.map(myShopping => {
      // console.log("Price: " + JSON.parse(myShopping.product.price));
      // console.log("Quantity: " + JSON.parse(myShopping.quantity));

      calculation = (
        parseFloat(JSON.parse(myShopping.product.price)) *
        parseFloat(JSON.parse(myShopping.quantity))
      ).toFixed(2);

      // console.log("Calculation: " + calculation);

      sum = parseFloat(sum) + parseFloat(calculation);

      // console.log("Sum: " + sum);

      // this.setState({
      //   totalPrice: sum
      // });

    });
    this.state.totalPrice = sum;
    // if (this.state.totalPrice == sum) {
    //   totalSame = true;
    // }
    // }
  }

  render() {
    var shopping = this.state.shoppingList;
    var total = this.state.totalPrice;

    // console.log("theHomeState before: " + this.props.theHomeState);
    // console.log("firstRender before: " + this.state.firstRender);
    // console.log(shopping);

    if (this.props.theHomeState === true) {
      this.getShoppingList();
      shopping = this.state.shoppingList;
      this.myFunc();
      this.calculateTotal(shopping);

      this.updateTotalPrice();
      // console.log("totalPrice: " + this.state.totalPrice);
    }


    this.calculateTotal(shopping);

    if (total != this.state.totalPrice) {
      this.updateTotalPrice();
    }

    // console.log("Total: " + this.state.totalPrice);

    // console.log("Shopping 1: ");
    // console.log(shopping);

    // console.log("theHomeState after: " + this.props.theHomeState);

    return (
      <div>
        {/* <button onClick={() => this.myFunc()}>Load Players</button> */}
        {/* <h1>FIFA 20 Ultimate Team Squad Builder</h1>
            <div>
                <button onClick={() => this.myFunc()}>Load Players</button>
            </div>
            <button onClick={() => this.myFunc2()}>Single Player</button>
            <p>->{this.state.shoppingList.length}</p> */}

        {/* <button>Select Squad</button> */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shopping.map(myShopping => {
              // this.setState({ totalPrice: this.state.totalPrice + (
              //    JSON.parse(myShopping.product.price) *
              //    JSON.parse(myShopping.quantity)
              //  ).toFixed(2)});

              //console.log(this.state.totalPrice);

              // console.log("Shopping 2: ");
              // console.log(shopping);
              return (
                <tr key={myShopping.id}>
                  <td>{myShopping.product.productName}</td>
                  <td>{"x" + JSON.parse(myShopping.quantity)}</td>
                  <td>
                    {"£ " +
                      (
                        JSON.parse(myShopping.product.price) *
                        JSON.parse(myShopping.quantity)
                      ).toFixed(2)}
                  </td>
                  <td className="buttonCell">
                    <button
                      type="button"
                      class="btn btn-light btn-lg close"
                      aria-label="Close"
                      onClick={() => this.deleteItem(myShopping.id)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
