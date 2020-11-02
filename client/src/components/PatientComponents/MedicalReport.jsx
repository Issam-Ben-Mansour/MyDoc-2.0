
//  // sex : "",
//             // bloodtype :"" ,
//             // primaryDiagnosis : ""
// import React, { Component } from 'react';

// import Axios from "axios"
// class ConfirmAppointment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             patientId:this.props.patientId,
//             name:this.props.name,
//             email:this.props.email ,
//             address : this.props.address,
//             city : this.props.city,
//             phoneNumber :this.props.phoneNumber ,
//         }
//         this.sendMedicalReport=this.sendMedicalReport.bind(this)
//         this. handleChange=this.handleChange.bind(this)
//     }
       
//      handleChange(e){
//          e.preventDefault()
//      this.setState({
//          [e.target.name] :e.target.value
//    })
//   }

//         sendMedicalReport(){
//             let patientId=this.state.patientId
//             let name=this.state.name
//             let address=this.state.address
//             let email=this.state.email
//             let city=this.state.city
//             let phoneNumber=this.state.phoneNumber
//             let sex =this.state.sex
//             let bloodtype=this.state.bloodtype
//             let primaryDiagnosis=this.state.primaryDiagnosis
//             Axios
//             .post("/reports/register",{patientId,name,address,email , city ,phoneNumber,sex,bloodtype,primaryDiagnosis})
//             .then(res=>console.log(res))
//             .catch(err=>console.log(err))

//       }
    
  
//     render() {
//         console.log(this.state)
//         return (
//                 <div>
//                     <input type="text" placeholder="sex" name="sex" onChange={this.handleChange}></input> <br></br>
//                    <input type="text" placeholder="blood type" name="bloodType" onChange={this.handleChange}></input> <br></br>
//                    <input type="text" placeholder="primary diagnosis" name="primaryDiagnosis" onChange={this.handleChange}></input>
//                    <br></br>
//                    <button onClick={this.sendMedicalReport}>Confirm</button>
//                 </div>
//              );
//     }
// }

// export default ConfirmAppointment;