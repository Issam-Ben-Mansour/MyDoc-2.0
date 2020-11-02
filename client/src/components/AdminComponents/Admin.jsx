import React, { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
        this.delete=this.delete.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:3000/doctors').then((res)=>{
            console.log(res.data)
this.setState({
    doctors: res.data
})
        })
    }
    delete (e,id){
        e.preventDefault()
       axios.delete(`http://localhost:3000/doctors/${id}`).then(()=>{
           this.componentDidMount();
       })
    }
    render() {
        const list = this.state.doctors.map((doc)=>(
            <tr key={doc.id}>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phoneNumber}</td>
            <td>{doc.price}</td>
            <td>{doc.Patients}</td>
            <td>{doc.Patients * 3 } DT</td>
            <td ><button className="del" onClick={(e)=>this.delete(e,doc.id)}>Delete</button></td>
            </tr>
        ))
        return (
<tbody>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Price</th>
    <th>N° Patients </th>
    <th>Total</th>
    <th>Delete doctor</th>
  </tr>
   {list}
</tbody>

        );
    }
}

export default Admin;