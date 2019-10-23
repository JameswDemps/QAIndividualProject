import React from "react";
import { Table } from "react-bootstrap";

export default class GetShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    };
  }
  async myFunc() {
      console.log(this);
    const response = await fetch("http://localhost:9999/shop/showBasket");
    const json = await response.json();
    console.log(json);
    this.setState({ shoppingList: json });

    // fetch("/shop/showBasket")
    // .then(response =>  response.json())
    // .then(data => this.setState({
    //     shoppingList : data}))
    // .then(data => console.log(this.state.shoppingList)
  }

  myFunc2() {
    this.state.shoppingList.map(shoppingList =>
      console.log(shoppingList.product.productName)
    );
    //console.log(this.state.shoppingList.id);
    this.state.shoppingList.map(shoppingList => {
      return (
        <Table id="1" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{shoppingList.id}</td>
              <td>{shoppingList.product.productName}</td>
              <td>{shoppingList.quantity}</td>
              <td>{shoppingList.price}</td>
            </tr>
          </tbody>
        </Table>
      );
      //this.makeRow(shoppingList.id, shoppingList.product.productName, shoppingList.quantity, shoppingList.price)
    });
  }

  makeRow(id, productName, quantity, price) {
    // <Table id="1" striped bordered hover>
    //                     <thead>
    //                         <tr>
    //                         <th>#</th>
    //                         <th>Product Name</th>
    //                         <th>Quantity</th>
    //                         <th>price</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr>
    //                         <td></td>
    //                         <td>{shoppingList.id}</td>
    //                         <td>{shoppingList.product.productName}</td>
    //                         <td>{shoppingList.quantity}</td>
    //                         <td>{shoppingList.price}</td>
    //                         </tr>
    //                     </tbody>
    //                 </Table>
  }

  render() {
    let shopping = this.state.shoppingList;

    return (
      <div>
        <button onClick={() => this.myFunc()}>Load Players</button>
        {/* <h1>FIFA 20 Ultimate Team Squad Builder</h1>
            <div>
                <button onClick={() => this.myFunc()}>Load Players</button>
            </div>
            <button onClick={() => this.myFunc2()}>Single Player</button>
            <p>->{this.state.shoppingList.length}</p> */}

        {/* <button>Select Squad</button> */}

          <Table id="1" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
        {shopping.map(myShooping => (
              <tr key={myShooping.id}>
                <td>{myShooping.id}</td>
                <td>{myShooping.product.productName}</td>
                <td>{myShooping.quantity}</td>
                <td>{myShooping.product.price}</td>
              </tr>
        ))}
            </tbody>
        </Table>

        {/* <table>
                <tr>
                <th>Playername</th>
                <th>Position</th>
                    <th>Position</th>
                        <th>Position</th>
                            <th>Position</th>
                                <th>Position</th>
                                    <th>Position</th>
                                        <th>Position</th>
                </tr>
                <tr>
                <td>Isaac Douglas</td>
                <td>LWB</td>
                <td>Isaac Douglas</td>
                <td>LWB</td>
                <td>Isaac Douglas</td>
                <td>LWB</td>
                <td>Isaac Douglas</td>
                <td>LWB</td>
                </tr>
                <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>Lois</td>
                <td>Griffin</td>
                <td>Lois</td>
                <td>Griffin</td>
                <td>Lois</td>
                <td>Griffin</td>
                </tr>
            </table> */}
      </div>
    );
  }
}
