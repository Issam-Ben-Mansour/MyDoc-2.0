import React, { Component } from "react";
import Axios from "axios"
class MyAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
        docId:this.props.doctor,
        doctor:[]
    };
   
  }
  componentDidMount(){
   let docId=this.state.docId
             Axios
             .post("http://localhost:3000/doctors/docId",{docId})
             . then(res=>this.setState({doctor:[res.data]}))
             .catch(err=>console.log(err))
             
}

 
  render() {
  console.log(this.state)
    
   return (
     
     <div>
                {this.state.doctor.map(doc => (
            <div key={doc.id}>
                <li>{doc.name}</li>
                <li>{doc.email}</li>
                <li>{doc.address}</li>
                <li>{doc.city}</li>
                <li>{doc.phoneNumber}</li>
            </div>
         ))}
            
     </div>
    
  ) 
  }
}

export default MyAppointments;
