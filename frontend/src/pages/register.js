import React, { Component } from 'react';
import axios from "axios";


const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const checkPass=RegExp(/^^[A-Za-z]\w{8,31}$/);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
export default class Register extends Component {


    constructor(props) {
        super(props);
          this.state = {
            name: null,
            email: null,
            password: null,
            phone: null,
            repassword: null,
            test:"",
            accept:false,
            users:[],
            errors: {
              name: '',
              email: '',
              phone: '',
              password: '',
              repassword: '',
            }
          };
          this.users =this.props.users
          console.log(this.users);
        }
        componentDidMount = () =>{
          axios.get("http://localhost:80/405found/backend/user.php/users/")
          .then((respone)=>{
            let email = respone.data.map((ele) => {
                  return ele.email
            })
            console.log(email);
              this.setState({
                  users:email
              })
              // setUsers(respone.data)
              console.log(respone.data);
          })
      }
        handleChange = (event) => {
          console.log(event);
          // event.preventDefault();
          const { name, value } = event.target;
          console.log( event.target.name, event.target.value );
            // let name = event.target.name;
            // let value = event.target.value;
          let errors = this.state.errors;
          switch (name) {
            case 'name': 
              errors.name = 
                value.length < 5
                  ? 'Full Name must be 5 characters long!'
                  : '';
              break;
              case 'email': 
              errors.email = 
              !validEmailRegex.test(value)
              ? 'Email is not valid!'
              : this.state.users.includes(value) 
              ? 'Email is already has been taken'
              : '' ; 
              break;
              case 'phone': 
                errors.phone = 
                  value.length !== 10
                    ? 'Phone must be 10 characters !'
                    : '';
                break;
            case 'password': 
            this.setState({
              test:value
            })
            errors.password = 
            checkPass.test(value)
            
            // value.length < 8 
  
            ? ''
            : 'Password must be 8 characters long!';
            break;
            case 'repassword': 
            console.log(this.state.test);
              errors.repassword = 
                value !== this.state.test
                  ? 'Confirm Password not match!'
                  : '';
              break;
            default:
              break;
          }
        
          this.setState({errors, [name]: value}, ()=> {
              console.log(errors)
          })
        }



        handleSubmit = (event) => {
          event.preventDefault();
          this.setState({accept:true,})

          const { name, email,password,phone } = this.state;
  
          let errors = this.state.errors;
          if(name === null){
              errors.name =  'Name is required'
          }
          if(email=== null){
              errors.email =  'email is required'
          }
          if(phone=== null){
              errors.phone =  'phone is required'
          }
          if(password === null){
              errors.password =  'password is required'
          }
   
          this.setState({errors}, ()=> {
              console.log(errors)
          })
  
          if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            // let newUser ={name:this.state.name,email:this.state.email,password:this.state.password}
            // this.users.push(newUser);
            let inputs = {name:this.state.name,email:this.state.email,phone:this.state.phone,password:this.state.password}
            axios.post("http://localhost:80/405found/backend/user.php/save",inputs)
            .then((respone)=>{
                console.log(respone.data);
                window.location.assign('/');
            })
    
  
            // localStorage.setItem('users',JSON.stringify(this.users))
          }else{
            console.error('Invalid Form')
          }
          console.log( this.users);
  
        }
      




  render() {
    const {errors} = this.state;
    return (
        <div className="theme-layout">
        <div className="container-fluid pdng0 black">
          <div className="row merged">
        
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
              <div className="login-reg-bg black">
                <div className="log-reg-area sign">
                  <h2 className="log-title">Register</h2>
                  
                  <form method="POST" onSubmit={this.handleSubmit} noValidate style={{maxHeight:'500px'}} >

                    <div className="form-group inputMargin">	
                      <input  placeholder=" " type='text' name='name' onChange={this.handleChange} noValidate />
                      <label className="control-label" htmlFor="input">Full name</label><i className="mtrl-select" />
                      {errors.name.length > 0 && this.state.accept && <span className='error'>{errors.name}</span>}

                    </div>
                    <div className="form-group inputMargin">	
                    <input type="email"   placeholder=""  name='email' onChange={this.handleChange} noValidate />
                    <label className="control-label" htmlFor="input">Email</label><i className="mtrl-select" />
                    {errors.email.length > 0 && this.state.accept && <span className='error'>{errors.email}</span>}

                  </div>
                    <div className="form-group inputMargin">	
                    <input type="text"   placeholder=""  name='phone' onChange={this.handleChange} noValidate />
                    <label className="control-label" htmlFor="input">Phone</label><i className="mtrl-select" />
                    {errors.phone.length > 0 && this.state.accept && <span className='error'>{errors.phone}</span>}

                  </div>
                    <div className="form-group inputMargin">	
                      <input type="password" placeholder="" name="password" onChange={this.handleChange} noValidate />
                      <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />
                      {errors.password.length > 0 && this.state.accept && <span className='error'>{errors.password}</span>}

                    </div>
                    <div className="form-group inputMargin">	
                      <input type="password" placeholder=" " name='repassword' onChange={this.handleChange} noValidate />
                      <label className="control-label" htmlFor="input">Confirm Password</label><i className="mtrl-select" />
                      {errors.repassword.length > 0 && this.state.accept && <span className='error'>{errors.repassword}</span>}

                    </div>
                   
                    
                    <div className="submit-btns ">
                      <button className="mtr-btn signup red"><span>Register</span></button>

                    </div>
                    </form>
                    <p>Already have an account? <a href='/' type="button"><span className='redtext'>Login Now!</span></a></p>
                  
                </div>
              
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="land-featurearea">
              <div className="land-meta">
                <h1>405 FOUND</h1>
                <p>
                Connect with software developers community around you on 405 FOUND.
                </p>
                <div className="friend-logo">
                  <div className='logoreg'><img src="images/tag2.png" alt="" /></div>
                </div>
                {/* <a href="#" title className="folow-me">Follow Us on</a> */}
              </div>	
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}

}
