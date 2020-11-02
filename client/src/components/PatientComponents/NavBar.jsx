import React, { Component } from "react";

import Profile from "./Profile.jsx";
import Messages from "./Messages.jsx";
// import BookAnAppointment from "./BookAnAppointment.jsx";
// import SeclectTypeOfDoctor from "./SelectTypeOfDoctor.jsx"
import SelectTypeOfDoctor from "./SelectTypeOfDoctor.jsx";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      userEmail:this.props.email,
      // userId: this.props.userId,
      userName: this.props.name,
      check: "profile",
    };
    this.profile = this.profile.bind(this);
    this.bookAnAppointment = this.bookAnAppointment.bind(this);
    this.message = this.message.bind(this);
  }
  componentDidMount() {
    this.setState({
      check: "profile",
    });
  }
  bookAnAppointment(e) {
    e.preventDefault();
    this.setState({
      check: "bookAnAppointment",
    });
  }
  profile(e) {
    e.preventDefault();
    this.setState({
      check: "profile",
    });
  }
  message(e) {
    e.preventDefault();
    this.setState({
      check: "message",
    });
  }

  render() {
    if (this.state.check === "profile") {
      return (
        <div>
          <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            {this.state.userName}
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.bookAnAppointment(e)}
            >
               Book An Appointment
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <Profile name={this.state.userName} email={this.state.userEmail}/>
        </div>
      );
    } else if (this.state.check === "bookAnAppointment") {
      return (
        <div>
          <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            {this.state.userName}
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.BookAnAppointment(e)}
            >
               Book An Appointment
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <SelectTypeOfDoctor userId={this.state.userId} name={this.state.userName} email={this.state.userEmail}/>
        </div>
      );
    } else if (this.state.check === "message") {
      return (
        <div>
           <div className="navbar">
            <span className="logo" onClick={(e) => this.profile(e)}>
            {this.state.userName}
            </span>
            <span
              className="nav"
              className="nav-selected"
              onClick={(e) => this.bookAnAppointment(e)}
            >
            Book An Appointment
            </span>
            <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
              {" "}
              My messages
            </span>
          </div>
          <Messages userId={this.state.userId} userName={this.state.userName}/>
        </div>
      );
    }
  }
}

export default NavBar;
