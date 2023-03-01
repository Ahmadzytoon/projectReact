import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeedProfile from '../components/profile/feedProfile';


const Profile = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));


  const [dataUsers,setDataUsers] = useState([]);
  


  
  useEffect(()=>{
    getDataUsers();



    
},[]);

  // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/405found/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}




    return (
       <>
            {dataUsers.map((users,index)=>{

return <div  key={index}>
                   <div className="theme-layout">
                   <Navbar/>
                     <section>
                       <div className="feature-photo">
                         <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                         <div className="add-btn">
                           <span>1205 friends</span>
                           
                           <Link to={`/profile/editProfile/${users.id}/edit`} title data-ripple>Edit Profile</Link>
                         </div>
                         <form className="edit-phto">
                           <i className="fa fa-camera-retro" />
                           {/* <label className="fileContainer">
                             Edit Cover Photo
                             <input type="file" />
                           </label> */}
                         </form>
                         <div className="container-fluid">
                           <div className="row merged">
                             <div className="col-lg-2 col-sm-3">
                               <div className="user-avatar">
                                 <figure>
                                   <img src={require(`../image/${users.image}`)} alt="" />
                                   <form className="edit-phto">
                                     <i className="fa fa-camera-retro" />
                                     <Link to={`/profile/editProfile/${users.id}/edit`} title data-ripple>Edit Profile</Link>
                                   </form>
                                 </figure>
                               </div>
                             </div>
                             <div className="col-lg-10 col-sm-9">
                               <div className="timeline-info">
                                 <ul>
                                   <li className="admin-name">
                                     <h5>{users.name}</h5>
                                     <span>@{users.name}</span>
                                   </li>
                                   <li>
                                     <a className="active" href="time-line.html" title data-ripple>time line</a>
                                     <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                     <a className href="timeline-groups.html" title data-ripple>Groups</a>
                                     <a className href="about.html" title data-ripple>about</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </section>{/* top area */}
                     <section>
                     <div className="gap gray-bg">
                       <div className="container-fluid">
                         <div className="row">
                           <div className="col-lg-12">
                             <div className="row" id="page-contents">
                             <Sidebar/>
                          <FeedProfile user_id={current_ID}/>
                               <Rightbar/>
                             </div>	
                           </div>
                         </div>
                       </div>
                     </div>	
                   </section>
                    
                     <div className="bottombar">
                       <div className="container">
                         <div className="row">
                           <div className="col-md-12">
                             <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                             <i><img src="images/credit-cards.png" alt="" /></i>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                 </div>
                   })}
       </>
            
    )
                  }

export default Profile;
