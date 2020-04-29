import React, { Component } from "react";

const $ = require("jquery");
$.Datatable = require("datatables.net");

export default class Tbl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // $("#datatable").DataTable({
    //   data: this.state.data,
    // });
    // console.log(this.el);
    // this.$el = $(this.el);
    // this.$el.DataTable({
    //   data: this.props.data,
    //   columns: [
    //     { className: "border-top-0", title: "#" },
    //     { className: "border-top-0", title: "Nama" },
    //     { className: "border-top-0", title: "Country" },
    //     { className: "border-top-0", title: "Date/Time" },
    //     { className: "border-top-0", title: "Status" },
    //   ],
    // });
  }

  componentWillMount() {
    this.props.data.map((item, index) => {
      this.setState(
        {
          data: [
            [item[0], item[1], item[2], item[3], item[4]],
            [item[0], item[1], item[2], item[3], item[4]],
          ],
        },
        () => {
          $("#datatable").DataTable({
            data: this.state.data,
          });
        }
      );
    });
  }

  render() {
    // this.props.data.map((user, index) => {
    //   return alert(user.name);
    //   let nameData = user.name;
    //   let countryData = user.country === " " ? "Unknown Country" : user.country;
    //   let dateTimeData =
    //     new Date(user.date).toLocaleDateString() +
    //     " " +
    //     new Date(user.date).toLocaleTimeString();
    //   let statusData = "Active";

    //   let values = [index + 3, nameData, countryData, dateTimeData, statusData];
    // });

    // this.state.data.push(values);

    console.log(this.props.data);

    return (
      <>
        <table id="datatable" className="table table-hover mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-top-0">#</th>
              <th className="border-top-0">Nama</th>
              <th className="border-top-0">Country</th>
              <th className="border-top-0">Date/Time</th>
              <th className="border-top-0">Status</th>
            </tr>
          </thead>
          <tbody>{/* <ListLogin users={this.props.data} /> */}</tbody>
        </table>
        {/* <table
          className="display table table-hover mb-0"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table> */}
      </>
    );
  }
}

function ListLogin(props) {
  return props.users.map((item) => {
    return (
      <tr key={item[0]}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
        <td>{item[4]}</td>
      </tr>
    );
  });
}
