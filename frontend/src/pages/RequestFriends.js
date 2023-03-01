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


const RequestFriends = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));
  const id = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');
  const NameUser = localStorage.getItem('name');

  const [requestFriends,setRequestFriends] = useState([]);  
  const [requestFriend,setrequestFriend] = useState([]);


  const [dataUsers,setDataUsers] = useState([]);
  


  
  useEffect(()=>{
  

    getDataUsers();
      getFriendsRequest();

},[]);

  // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/405found/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}

const getFriendsRequest = () => {

  axios.get(`http://localhost:80/405found/backend/friendRequests.php/${id}`)
  .then((respone)=>{
      console.log(respone.data);
      let requestFriend = respone.data.map((ele)=>{
          return ele.user_id
      })
      console.log(requestFriend);
      setrequestFriend(requestFriend);
      setRequestFriends(respone.data)
  })
}

  // status الموافقة على طلب الصداقة وتغيير ال 
  const AcceptFriend = (friendId) => {
    let inputs = {user_id:id , friend_id:friendId};
    axios.put(`http://localhost:80/405found/backend/friends.php/edit`,inputs)
    .then((respone)=>{
        getFriendsRequest();
    })
  }

      // الغاء  طلب الصداقة
      const removeRequest = (friendId) => {
        let inputs = {user_id:friendId , friend_id:id};
        axios.put(`http://localhost:80/405found/backend/removeRequest.php/edit`,inputs)
        .then((respone)=>{
            console.log(respone.data);
            getFriendsRequest();
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
                                     <Link className="" to={"/profile"} title data-ripple>time line</Link>
                                     <Link className to={"/groups"} title data-ripple>Groups</Link>
                                     <Link className="active" to={"/requestFriends"}  title data-ripple>Request Friends</Link>
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
                             <div className="col-lg-6">
                               {/* ____________________________________start_____________________________________________ */}
                             <div className="central-meta">
                        <div className="groups">
                          <span><i className="fa fa-users" />Request Friends</span>
                        </div>


                        <ul className="nearby-contct">

{requestFriends.map((ele,index)=>{
return(

                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src={require(`../image/${ele.image}`)}alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4>  <Link to={`/Friendprofile/${ele.user_id} `}> 
                                    {ele.name}
                                  </Link>  </h4>
                              
                                <button  title className="add-butn" data-ripple onClick={()=>AcceptFriend(ele.user_id)}>Confirm</button>
                                
                                <button title className="add-butn" data-ripple onClick={()=>removeRequest(ele.user_id)}>Delete</button>
                              </div>
                            </div>
                          </li>
                        )})}
            
                        </ul>


                      </div>
                             </div>	



                             {/* _____________________________________end____________________________________________ */}
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

export default RequestFriends;
