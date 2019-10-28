import React, { Component } from "react";
import { Table } from "react-bootstrap";

import "./css/Total.css";

export default class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TotalPrice: this.props.TotalPrice,
      firstRender: true,
    }
  }

  

  setTotalPrice = () => {
    this.setState({
      TotalPrice: this.props.TotalPrice
    })
  }

  render() {

    if (this.state.firstRender == true ){
      this.setTotalPrice();
      this.state.firstRender = false;
      // console.log(this.state.TotalPrice);
    }
    return (
      <div className="Total">
        <Table className="Total-text">
          <tr>
            <th>Total:</th>
            <th>{"£ " + (this.props.TotalPrice).toFixed(2)}</th>
          </tr>
        </Table>
      </div>
    );
  }
}
