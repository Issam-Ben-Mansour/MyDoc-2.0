import React,{Component} from 'react'
import Axios from "axios"
import ConfirmAppointment from "./ConfirmAppointment.jsx"
class Cities extends Component {
    constructor(props){
        super(props)
        this.state={
             docType:this.props.type,
            city:this.props.state,
            docs:[],
            booked:[],
            email:this.props.email
        }
       
    }
    book(){
        var con=document.getElementById("container")
        var checkboxes= con.getElementsByTagName("input")
        var docs=[]
        
        for( var i = 0; i < checkboxes.length; i++ ){ 
         var object=JSON.parse(checkboxes[i].value)
            if(checkboxes[i].checked){
             docs.push(object)
            }
        
          }
           this.setState({ booked:docs})
        }
        
    componentDidMount(){
        //         this component will make a post request to the database then filter and render the doctors that match the elements of the state
    
         var {docType,city}=this.state
      
              Axios
               .post("http://localhost:3000/doctors/docstate",{docType,city})
               .then(res=>{
                   this.setState({
                   docs:res.data,
                   
               })})
               //set the state with the res
               .catch(err=>{throw err})
        }

    render() { 
        console.log(this.state)
        if(this.state.booked.length){
            return <ConfirmAppointment doctorId={this.state.booked[0].id} price={this.state.booked[0].price} email={this.state.email}/>
        } else{
            return (
                <div id="container">
                 {this.state.docs.map((e,i)=>
                 <div key={i} >
                      <h2> Name :{e.name}</h2>
                      <h2> Addres :{e.address}</h2>
                      <h2>City :{e.city}</h2>
                      <h2> Email :{e.email}</h2>
                      <h2> Phone number :{e.phoneNumber}</h2>
                      <h2>Cabine name :{e.cabineName}</h2>
                      <h2>Fees :{e.price}</h2>
                      <label >Book an appointment</label>
                      <input type ="checkbox"  value={JSON.stringify(e)}></input>
                      </div>
                 )}
                 <button onClick={this.book.bind(this)}>Book an appointment</button>
                </div>
            
                )

        }
       
    }
}
 
export default Cities