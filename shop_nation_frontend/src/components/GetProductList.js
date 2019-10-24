import React from "react";
import { Table, Button } from "react-bootstrap";

import "./css/GetProductList.css";

export default class GetProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      productList: [],
      firstRender: true
    };
  }

  addToBasket = id => {
      const requestOptions = {
          method: 'PUT'
      };

      fetch("http://localhost:9999/shop/addToBasket/" + id, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
        //this.getShoppingList();
    });

  }

  createItem = id => {
    const requestOptions = {
      method: 'POST'
    };
  
    fetch("http://localhost:9999/shop/createNewItem/" + id, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
        //this.getShoppingList();
    });
  }

async addItem(id) {

    var itemExists = false;

    const response = await fetch("http://localhost:9999/shop/showBasket");
    const json = await response.json();
    this.setState({ shoppingList: json });
    console.log(this.state.shoppingList);
    console.log(Object.keys(this.state.shoppingList).length);

    for (var i = 0; i < Object.keys(this.state.shoppingList).length; i++ ) {
        try {
            var productId = this.state.shoppingList[i].product.id;
            if (productId == id) {
                itemExists = true;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    if (itemExists == false) {
        this.createItem(id);
    }
    else {
        this.addToBasket(id);
    }

  }

  async getProductList() {
    const response = await fetch("http://localhost:9999/shop/showProducts");
    const json = await response.json();
    this.setState({ productList: json });

    // fetch("/shop/showBasket")
    // .then(response =>  response.json())
    // .then(data => this.setState({
    //     shoppingList : data}))
    // .then(data => console.log(this.state.shoppingList)
  }

  render() {
    let products = this.state.productList;

    if (this.state.firstRender === true) {
      this.getProductList();
      this.state.firstRender = false;
    }

    return (
        <div>
        <Table striped bordered hover>
            {/*
          <thead>
            <tr>
              <th>Product Name</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
            */}
          <tbody>
            {products.map(myProducts => (
              <tr key={myProducts.id}>
                <td>
                    <button
                        type="button"
                        class="btn btn-outline-primary btn-lg"
                        onClick={() => this.addItem(myProducts.id)}
                    >
                        {myProducts.productName}
                    </button>
                </td>
                <td>{myProducts.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
