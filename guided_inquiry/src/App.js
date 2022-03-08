import logo from "./logo.svg";
import "./App.css";
import React from "react";
import BasicInfo from "./component/BasicInfo";
// import BasicInfo from "./component/BasicInfo";
// import People from "./component/People";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      person: [
        {
          _id: "6227b8e0ce9b1dadca8ee4a5",
          firstName: "Johanna",
          lastName: "Blackwell",
          phone: "+1 (888) 432-3552",
          birthday: "Wed Sep 30 2015 18:02:10 GMT-0400 (Eastern Daylight Time)",
        },
        {
          _id: "6227b8e00195fece86fd48d6",
          firstName: "Patel",
          lastName: "Boyle",
          phone: "+1 (935) 435-3655",
          birthday: "Sun Apr 05 1970 08:05:15 GMT-0500 (Eastern Standard Time)",
        },
        {
          _id: "6227b8e0de2583335435110d",
          firstName: "Alicia",
          lastName: "Faulkner",
          phone: "+1 (967) 471-2327",
          birthday: "Tue Mar 18 2003 06:53:13 GMT-0500 (Eastern Standard Time)",
        },
        {
          _id: "6227b8e06d0d826a2cadd071",
          firstName: "Jasmine",
          lastName: "Webb",
          phone: "+1 (912) 510-3949",
          birthday: "Mon Oct 14 2002 10:50:50 GMT-0400 (Eastern Daylight Time)",
        },
        {
          _id: "6227b8e0bb102519a496fd32",
          firstName: "Alvarado",
          lastName: "Mays",
          phone: "+1 (909) 407-3210",
          birthday: "Wed Nov 23 1988 15:42:33 GMT-0500 (Eastern Standard Time)",
        },
      ],
    };
  }

  render() {
    return <BasicInfo person={this.state.person}></BasicInfo>;
  }
}

export default App;
