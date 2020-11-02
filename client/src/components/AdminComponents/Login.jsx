import React, { Component } from "react";

import Admin from "./Admin.jsx"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@gmail.com",
      password: "",
      userId: 0,
    }
    this.login=this.login.bind(this);
  }
  componentDidMount(){
    this.setState({
      email:"admin@gmail.com",
      password:"",
      userId: 0 ,
    })
  }
  login(e){
    e.preventDefault();
    const doctor = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/patients/login', doctor).then((res,req)=>{
      if(typeof res.data === "string" ){
        alert("check again please !")
        this.componentDidMount()
      }
      else{
        console.log(res.data)
        const token = res.headers.auth_token
        localStorage.setItem('auth_token', token)
        localStorage.getItem('auth_token')
        this.setState({
          email:"admin@gmail.com",
          password:"",
          userId: res.data.id
        })
      } 
    })
  }
  render() {
    const value = this.state.userId
    
    if (value === 0 ) {
      return (
        <div>
          <center>
            <br></br> <br></br>
           <form onSubmit={(e)=>this.login(e)}>
           <h1>Hello Boss </h1>
             <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}/><br></br> <br></br>
             <input type="submit" value="Log In" /><br></br> <br></br>
           </form>
          </center>
        </div>
      )
    } else if (value !== 0 ) {
      return (
        <div>
      <Admin />
      </div>
      )
    }
  }
}

export default Login;
