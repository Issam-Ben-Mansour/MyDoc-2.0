import React, { Component } from "react";

import axios from "axios"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     doctors:[],
     appointments:[],
     userId:this.props.userId,
     userName:this.props.userName
    };
    this.accept = this.accept.bind(this);
    this.cancel = this.cancel.bind(this);
  }
 componentDidMount() {
      axios.get("http://localhost:3000/doctors").then((res) => {
     this.setState({
       doctors: res.data,
     })
   })
     axios.get("http://localhost:3000/appointments").then((res) => {
      this.setState({
        appointments: res.data,
      })
     })
 }
 cancel(e,id){
   e.preventDefault()
   app = {
     check : "cancel"
   }
   axios.put(`http://localhost:3000/appointments/${id}`,app).then(() => {
     this.componentDidMount()
   })
 }
 accept(e,id){
  e.preventDefault()
  app = {
    check : "accept"
  }
  axios.put(`http://localhost:3000/appointments/${id}`,app).then(() => {
    this.componentDidMount()
  })
}
  render() {
    const list = this.state.doctors.filter((doc)=>this.state.userId === doc.id).map((item)=>(
      <div key={item.id} className="prop">
      <li>Cabine Name : {item.cabineName}</li>
      <li>Email : {item.email}</li>
      <li>Address : {item.address}</li>
      <li>Phone : {item.phoneNumber}</li>
      </div> 
    ))
    const listApp = this.state.appointments.filter((app)=>app.check === "sended" && this.state.userId === app.doctorId).map((item)=>(
      <div key={item.id} className="prop">
      <h1>hello doctors please i want to have an appointment as soon as possible</h1><br></br>
      <button onClick={(e) => this.accept(e,item.id)}>Accept</button>
      <button onClick={(e) => this.cancel(e,item.id)}>Cancel</button>
      </div> 
    ))
   return (
   <div>
   <ul>
   {list}
   </ul>
   <ul>
   {listApp}
   </ul> 
   </div>
  ) 
  }
}

export default Profile;
