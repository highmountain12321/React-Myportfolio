import React, { Component } from "react";

class Table extends Component {
  state = {
    data: [
      { head: "Name", name: ": Sajid Ansari" },
      { head: "Age", name: ": 23" },
      { head: "Address", name: ": Maitidevi,Kathmandu" },
      { head: "Contact", name: ": 9817253327" },
    ],
  };
  render() {
    return (
      <table className="table table-borderless">
        {this.state.data.map((data) => {
          return (
            <tr>
              <td>{data.head}</td>
              <td>{data.name}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;
