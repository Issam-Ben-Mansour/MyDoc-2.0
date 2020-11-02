import React, { Component } from 'react';
// import Profile from "./Profile.jsx";
import Axios from "axios"
class ConfirmAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorId:this.props.doctorId,
            patientId:"",
            name:"",
            email:this.props.email ,
            address : "" ,
            city : "" ,
            phoneNumber :""  ,
            price:this.props.price,
         next:false
            // sex : "",
            // bloodtype :"" ,
            // primaryDiagnosis : ""
        }
        
        this.confirmApp=this.confirmApp.bind(this)
    }
       componentDidMount(){
        let email=this.state.email
                 Axios
                 .post("http://localhost:3000/patients/profile",{email})
                 .then(res=>this.setState({patientId:res.data.id, name:res.data.name,address:res.data.address,city:res.data.city,phoneNumber:res.data.phoneNumber}))
                 .catch(err=>console.log(err))
    }

        confirmApp(){
            let patientId=this.state.patientId
            let doctorId=this.state.doctorId
            let price=this.state.price
            let check=""
            Axios
            .post("/appointments/register",{patientId,doctorId,price,check})
            .then(res=>this.setState({next:!this.state.next }))
            .catch(err=>console.log(err))

      }
    
  
    render() {
        console.log(this.state)
    // if(this.state.next===true)
             return (
           <div> 
               <h1>Confirm Appointment :</h1>
                <h2> name :{this.state.name}</h2>
                <h2>email :{this.state.email}</h2>
                <button onClick={this.confirmApp}>Confirm</button>
           </div>
       )
        }
        
      
    }


export default ConfirmAppointment;