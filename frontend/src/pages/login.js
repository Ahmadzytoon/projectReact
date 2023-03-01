import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props){
      super(props);
      this.state={
          email:"",
          password:"",
          users:[],
      }
      this.users =this.props.users
      console.log( this.users);
  }

  componentDidMount = () =>{
      axios.get("http://localhost:80/405found/backend/user.php")
      .then((respone)=>{
          this.setState({
              users:respone.data
          })
          // setUsers(respone.data)
          console.log(respone.data);
      })
  }
  handleBlur = (event)=>{

  const {name , value}=event.target;

if(name==="email"){
  this.setState({
      email:value,
  })
  
}else if(name==="password"){
  this.setState({
      password:value,
  })
  
}
  }

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.users);
      if (this.state.email==="" || this.state.password==="" ){
          document.getElementById("err").style.display = 'block'
          document.getElementById("err").innerHTML = "**please inter your email and password"
      }
      this.state.users.map((ele)=>{
      if (ele.email!==this.state.email && ele.password!==this.state.password){
          document.getElementById("err").style.display = 'block'
          document.getElementById("err").innerHTML = "**please inter correct your email and password"
      }
  })
      this.state.users.map((ele)=>{
          if(ele.email===this.state.email && ele.password===this.state.password && this.state.email!=="" && this.state.password !==""){
                console.log(true);
                window.localStorage.setItem('email',this.state.email)
                window.localStorage.setItem('id',ele.id)
                window.localStorage.setItem('image',ele.image)

                window.location.assign('/home')

                

          }
       
      })

      
      
      
  }
render() {
    return (
        <div className="theme-layout">
        <div className="container-fluid pdng0">
          <div className="row merged">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="land-featurearea">
            <div className="land-meta">
              <h1>405 FOUND</h1>
              <p>
              While (!(succeed=try()));
              </p>
              <div className="friend-logo">
                <div><img src="images/tag2.png" alt="" /></div>
              </div>
            </div>	
          </div>
        </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="login-reg-bg black">
                <div className="log-reg-area sign">
                  <h2 className="log-title" style={{marginBottom:'40px'}}>Login</h2>
                 
                  <form className="loginRight" onSubmit={this.handleSubmit} noValidate >

                    <div className="form-group">	
                      <input  type='email' name='email' onBlur={this.handleBlur} noValidate />
                      <label className="control-label" >Email</label><i className="mtrl-select" />
                    </div>
                    <div className="form-group">	
                      <input type="password" name='password' onBlur={this.handleBlur} noValidate />
                      <label className="control-label">Password</label><i className="mtrl-select" />
                    </div>
                    <p className="errorr" id="err"></p>

                    <div className="submit-btns" style={{marginTop:'-50px'}}>
                      <button className="mtr-btn signin red" ><span>Login</span></button>
                    </div>
                    </form>
                    <p>Don’t have an account Yet? <a href="/register"><span className='redtext'>Register</span></a> now.</p>
                  
                </div>
              
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
}

}
