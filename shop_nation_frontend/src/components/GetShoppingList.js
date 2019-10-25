import React from "react";
import { Table, Button } from "react-bootstrap";

import "./css/GetShoppingList.css";

export default class GetShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      firstRender: true
    };
  }

  myFunc = () => {
    this.props.changeHomeState(false);
    //console.log("Clicked");
  }


  changeState = () => {

    this.setState({
        firstRender: true
    })
  }

  deleteItem = id => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    fetch("http://localhost:9999/shop/removeFromBasket/" + id, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
        this.getShoppingList();
    });
  }

  async getShoppingList() {
    const response = await fetch("http://localhost:9999/shop/showBasket");
    const json = await response.json();
    this.setState({ shoppingList: json });

    // fetch("/shop/showBasket")
    // .then(response =>  response.json())
    // .then(data => this.setState({
    //     shoppingList : data}))
    // .then(data => console.log(this.state.shoppingList)
  }

  render() {
    let shopping = this.state.shoppingList;

    if (this.props.theHomeState === true) {
      this.getShoppingList();
      this.myFunc();
      //this.state.firstRender = false;
    }

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
            {shopping.map(myShopping => (
              <tr key={myShopping.id}>
                <td>{myShopping.product.productName}</td>
                <td>{"x" + JSON.parse(myShopping.quantity)}</td>
                <td>{"£ " + (JSON.parse(myShopping.product.price) * JSON.parse(myShopping.quantity)).toFixed(2)}</td>
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
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
