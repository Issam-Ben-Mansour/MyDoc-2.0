import React, { Component } from 'react';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
        appointments:[],
         userId:this.props.userId
        };
        this.delete= this.delete.bind(this)
      }
      componentDidMount() {
          axios.get("http://localhost:3000/appointments").then((res)=>{
              this.setState({
                  appointments: res.data,
              })
          })
      }
      delete(e,id) {
          e.preventDefault()
          axios.delete(`http://localhost:3000/appointments/${id}`).then(()=>{
              this.componentDidMount()
          })
      }
    render() {
        const listApp = this.state.appointments.filter((app)=>app.check === "accept" && this.state.userId === app.doctorId).map((item)=>(
            <div key={item.id} className="prop">
            <h1>hello doctors you have an appointment at this date </h1><br></br>
            <button onClick={(e) => this.delete(e,item.id)}>delete</button>
            </div> 
          ))       
           return (
            <div>
               {listApp}         
            </div>
        );
    }
}

export default Appointments;