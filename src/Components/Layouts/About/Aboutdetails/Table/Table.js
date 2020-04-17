import React, { Component } from "react";
import Auxilarry from "../../../../../hoc/Auxillary";

class Table extends Component {
  state = {
    data: [
      { id: 1, head: "Name", name: ": Sajid Ansari" },
      { id: 2, head: "Age", name: ": 23" },
      { id: 3, head: "Address", name: ": Maitidevi,Kathmandu" },
      { id: 4, head: "Contact", name: ": 9817253327" },
    ],
  };
  render() {
    return (
      <Auxilarry>
        {this.state.data.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.head}</td>
                <td>{data.name}</td>
              </tr>
            </tbody>
          );
        })}
      </Auxilarry>
    );
  }
}

export default Table;
