import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userId: 0,
      userName: ""
    }
    this.login=this.login.bind(this);
  }
  componentDidMount(){
    this.setState({
      email:"",
      password:"",
      userId: 0 ,
      userName:""
    })
  }
  login(e){
    e.preventDefault();
    const doctor = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/doctors/login', doctor).then((res,req)=>{
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
          email:"",
          password:"",
          userId: res.data.id, 
          userName: res.data.name
        })
      } 
    })
  }
  render() {
    
    if (this.state.userId === 0 ) {
      return (
        <div>
          <center>
            <br></br> <br></br>
           <form onSubmit={(e)=>this.login(e)}>
             <input type="text" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/><br></br> <br></br>
             <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}/><br></br> <br></br>
             <input type="submit" value="Log In" /><br></br> <br></br>
           </form>
          </center>
        </div>
      )
    } else if (this.state.userId !== 0 ) {
      return (
        <div>
      <NavBar userId={this.state.userId} userName={this.state.userName}/>
      </div>
      )
    }
  }
}

export default Login;
