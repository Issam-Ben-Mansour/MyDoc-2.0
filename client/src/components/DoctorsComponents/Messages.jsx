import React, { Component } from 'react';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
        messages:[],
         userId:this.props.userId,
         userName:this.props.userName
        };
        this.delete = this.delete.bind(this);
        this.deleteAll= this.deleteAll.bind(this);
      }
      componentDidMount() {
          axios.get('http://localhost:3000/messages').then((res)=>{
              this.setState({
              messages: res.data
              })
          })
      }
      delete(e,id){
          e.preventDefault()
          axios.delete(`http://localhost:3000/messages/${id}`).then(()=>{
              this.componentDidMount()
          })
      }
      deleteAll(e){
        e.preventDefault()
        axios.delete(`http://localhost:3000/messages/${id}`).then(()=>{
            this.componentDidMount()
        })
    }
    render() {
        const list = this.state.messages.filter((message) => this.state.userName === message.receiverId).map((msg)=>(
             <div key={msg.id}>
                 <h1>{msg.senderId} : {msg.text}</h1>
                 <button onClick={(e) => this.delete(e,msg.id)}>Delete message</button>
             </div>

        ))
        return (
            <div>
               {list}
               <button onClick={(e) => this.deleteAll(e)}>Delete all </button>
            </div>
        );
    }
}

export default Messages;