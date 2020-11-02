import React, { Component } from 'react';
import Login from './Login.jsx';
import SignIn from './signIn.jsx';

class PatientHome extends Component {
    constructor(props) {
        super();
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
                  <h1>Welcome Patient</h1>
                    <button className="btn" value="login" onClick={this.changeView}>
                      Login
                    </button><br></br>
                    <button className="btn" value="SignIn" onClick={this.changeView}>
                      SignIn
                    </button>
                  </center>
                    </form>
                </div>
                <p>
We want to provide a better quality of primary care and an immediate medical response to all our patients, thanks to online consultation with doctors. Online medical consultation is a specialty that has grown in recent years. It saves time for patients compared to obtaining appointments with doctors.</p>
              </div>
            );
          } else if (this.state.view === "login") {
            return < Login/>;
          } else if (this.state.view === "SignIn") {
            return <SignIn />;
          }
        }
      }
export default PatientHome;