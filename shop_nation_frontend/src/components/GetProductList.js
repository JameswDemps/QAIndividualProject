import React from "react";
import { Table, Button } from "react-bootstrap";

//import { Grid, Cell } from "styled-css-grid";

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

  myFunc2 = () => {
    this.props.changeSearchState(false);
    //console.log("Clicked");
  };

  myFunc = () => {
    this.props.changeHomeState(true);
    //console.log("Clicked");
  };

  addToBasket = id => {
    const requestOptions = {
      method: "PUT"
    };

    fetch("http://localhost:9999/shop/addToBasket/" + id, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.myFunc();
        //this.getShoppingList();
      });
  };

  createItem = id => {
    const requestOptions = {
      method: "POST"
    };

    fetch("http://localhost:9999/shop/createNewItem/" + id, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.myFunc();
        //this.getShoppingList();
      });
  };

  async addItem(id) {
    var itemExists = false;

    const response = await fetch("http://localhost:9999/shop/showBasket");
    const json = await response.json();
    this.setState({ shoppingList: json });
    //console.log(this.state.shoppingList);
    //console.log(Object.keys(this.state.shoppingList).length);

    for (var i = 0; i < Object.keys(this.state.shoppingList).length; i++) {
      try {
        var productId = this.state.shoppingList[i].product.id;
        if (productId == id) {
          itemExists = true;
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (itemExists == false) {
      this.createItem(id);
    } else {
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

    if (this.props.updateSearch === true) {
      this.getProductList();
      this.myFunc2();
      //this.state.firstRender = false;
    }

    return (
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
          <tbody className="productRow">
            {products.map(myProducts => {
              // console.log("Yo");
              // console.log(this.props.searchValue);
              if (this.props.searchValue == '' ||  myProducts.productName.toLowerCase().includes(this.props.searchValue.toLowerCase())) {
                return (
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
                    <td>{"£ " + JSON.parse(myProducts.price).toFixed(2)}</td>
                  </tr>
                );
              }
            })}
          </tbody>
          {/* <button onClick={this.myFunc}>My Button</button> */}
        </Table>

      // <div>
      // <Grid columns={2}>
      //     {/*
      // <thead>
      //     <tr>
      //     <th>Product Name</th>
      //     <th>price</th>
      //     <th></th>
      //     </tr>
      // </thead>
      //     */}
      //     <tbody className="productRow">
      //         {products.map(myProducts => (
      //             <tr key={myProducts.id} >
      //                     <td>
      //                         <button
      //                             type="button"
      //                             class="btn btn-outline-primary btn-lg"
      //                             onClick={() => this.addItem(myProducts.id)}
      //                         >
      //                             {myProducts.productName}
      //                         </button>
      //                     </td>
      //                     <td>{"£ " + JSON.parse(myProducts.price)}</td>
      //             </tr>
      //         ))}
      //     </tbody>
      // </Grid>
      // </div>
    );
  }
}
