import React, { Component } from "react";
import Client from "./Client";

// images
import face from "../assets/img/logos/facebook.svg"
import goo from "../assets/img/logos/google.svg"
import ibm from "../assets/img/logos/ibm.svg"
import mic from "../assets/img/logos/microsoft.svg"

const clients = [
    {brand: 'Facebook', svg: face},
    {brand: 'Google', svg: goo},
    {brand: 'IBM', svg: ibm},
    {brand: 'Microsoft', svg: mic},
];

class Clients extends Component {
  render() {
    return (
      <div class="py-5">
        <div class="container">
          <div class="row align-items-center">
            {clients.map((client, index) => {
                return <Client {...client} key={index} />
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
