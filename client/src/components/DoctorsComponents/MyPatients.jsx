import React, { Component } from 'react';

class MyPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports:[]
        }
    }
    componentDidMount(){
   axios.get('http://localhost:3000/reports').then((res)=>{
        this.setState({
        reports: res.data
        })
    })
    }
    render() {
        const list = this.state.reports.map((item)=>(
            <div className="repo" key={item.id}>
                <h3>Name : {item.name}</h3>
                <h3>Nmail : {item.email}</h3>
                <h3>Adress : {item.adress}</h3>
                <h3>City : {item.city}</h3>
                <h3>PhoneNumber : {item.phoneNumber}</h3>
                <h3>Sex : {item.sex}</h3>
                <h3>Blood type : {item.bloodtype}</h3>
                <h3>Primary Diagnosis : {item.primaryDiagnosis}</h3>


            </div>
        ))
        return (
            <div>
               {list}
            </div>
        );
    }
}

export default MyPatients;