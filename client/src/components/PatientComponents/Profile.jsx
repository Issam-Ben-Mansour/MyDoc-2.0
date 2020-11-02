import React, { Component } from "react";
import MyAppointments from "./MyAppointments.jsx"
import Axios from "axios"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient:[],
     patientId:"",
     appointmentId:"",
     name:this.props.name,
     email:this.props.email,
     selectType:false,
     next:false
    };
   
  }
  componentDidMount(){
   let email=this.state.email
             Axios
             .post("http://localhost:3000/patients/profile",{email})
             .then(res=>this.setState({patient:[res.data],patientId:res.data.id}))
             .catch(err=>console.log(err))
}
searchDoc(){
  let id=this.state.patientId
  Axios.post("http://localhost:3000/appointments/docId",{id})
     .then(res=>this.setState({appointmentId:res.data.doctorId ,next:!this.state.next}))
}
 
  render() {
  if(this.state.next===true){
    return <MyAppointments doctor={this.state.appointmentId}/>
  }else{
    return (
     
      <div>
        {this.state.patient.map(patient => (
             <div key={patient.id}>
                  <li> Email :{patient.email}</li> 
                   <li> City :{patient.city}</li> 
                   <li> Address{patient.address}</li> 
                   <li>Phone Number :{patient.phoneNumber}</li> 
             </div>
          ))}
          <button onClick={this.searchDoc.bind(this)}>check my appointments</button>
      </div>
     
   ) 
  }
    
 
  }
}

export default Profile;
