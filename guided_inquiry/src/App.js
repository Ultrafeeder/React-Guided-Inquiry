import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import BasicInfo from "./component/BasicInfo";
// import People from "./component/People";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      person: {
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        birthday: props.birthday,
      },
    };
  }

  render() {
    return (
      <div>
        <p>First Name: Jakari</p>
        <p>Last Name: Stratton</p>
        <p>Mobile Number: 555-5555</p>
        <p>Birthday: 01/01/01</p>
      </div>
    );
  }
}

export default App;
