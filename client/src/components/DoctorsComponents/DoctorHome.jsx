import React, { Component } from "react";
import Login from "./Login.jsx";
import Sign from "./Sign.jsx";


class DoctorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "main",
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ view: e.target.value });
  }

  render() {
    if (this.state.view === "main") {
      return (
        <div >
          <div className="bg">
            <form>
            <center>
            <h1>Welcome Doctor </h1>
              <button className="btn" value="login" onClick={this.changeView}>
                Login
              </button><br></br>
              <button className="btn" value="SignIn" onClick={this.changeView}>
                SignIn
              </button><br></br>
            </center>
            </form>
            
          </div>
          
          <p>When you use an online consultation service, you can talk to a trained professional from the comfort of your own cabine </p>
          </div>
         
        
        
      );
    } else if (this.state.view === "login") {
      return <Login />;
    } else if (this.state.view === "SignIn") {
      return <Sign/>;
    }
  }
}
export default DoctorHome;
