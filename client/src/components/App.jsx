import React from "react";
import DoctorHome from "./DoctorsComponents/DoctorHome.jsx";
import PatientHome from "./PatientComponents/PatientHome.jsx";
import Login from "./AdminComponents/Login.jsx"

class App extends React.Component {
  constructor() {
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
        <div className="bg">
          <div>
            <center>
            <div className="tit">MyDoc 🚑 </div>
              <button className="btnd" value="Doctor" onClick={this.changeView}>
                Doctor
              </button><br></br>
              <button className="btnp" value="Patient" onClick={this.changeView}>
                Patient
              </button>
            </center>
            <center>
              <p>With the evolution of the internet, new options are appearing in the medical world and we believe that this is an asset for the medical field of tomorrow.<br></br><br></br>

We want to provide a better quality of primary care and an immediate medical response to all our patients, thanks to online consultation with doctors. Online medical consultation is a specialty that has grown in recent years. It saves time for patients compared to obtaining appointments with doctors.
<br></br>
signature : <br></br>
<strong> <i onClick={(e)=>this.setState({view:"admin"})}> tantana </i> </strong>
</p>
  
            </center>
          </div>
        </div>
      );
    } else if (this.state.view === "Doctor") {
      return <DoctorHome />;
    } else if (this.state.view === "Patient") {
      return <PatientHome />;
    }else if (this.state.view === "admin") {
      return <Login />;
    }
  }
}

export default App;
