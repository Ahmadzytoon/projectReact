import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  useParams} from "react-router-dom";
import FeedProfileFriend from '../components/profileFriend/feedProfileFriend';


const Friendprofile = () => {

  const {id} =useParams();

  const current_ID = JSON.parse(localStorage.getItem('id'));
  const [dataUsers,setDataUsers] = useState([]);
  const [friendsUser,setFriendsUser] = useState([]); // data user friend as obj
  const [friends,setfriends] = useState([]); // data user friend as array
  const [pendingRequest,setpendingRequest] = useState([]);
  const [Myfriends,setMyfriends] = useState([]);
  const [requestFriend,setrequestFriend] = useState([]);
  const [pendingFriends,setpendingFriends] = useState([]);
  const [acceptrdFriends,setAcceptedFriends] = useState([]);
  const [requestFriends,setRequestFriends] = useState([]); 


  useEffect(()=>{
    getDataUsers();
    getFriendsUser();
    getFriendsPending();
    getFriendsAccepted();
    getFriendsRequest();
},[]);


    // لعرض  بيانات المستخدم في الموقع
    const getDataUsers = () => {

      axios.get(`http://localhost:80/405found/backend/user.php/users/${id}`)
      .then((respone)=>{
        setDataUsers(respone.data)
          console.log(respone.data);
      })
  }
    //   عرض جميع طلبات الصداقة الذين تمت الموافقة عليهم

    
    const getFriendsUser = () => {

      axios.get(`http://localhost:80/405found/backend/friends.php/${id}`)
      .then((respone)=>{
          console.log(respone.data);
          let friends = respone.data.map((ele)=>{
              return ele.friend_id
          })
          console.log(friends);
          setfriends(friends);
          setFriendsUser(respone.data)
      })
  }
/////////////////////////////////////////////////////////


 // اللي بعثهم المستخدم pending عرض جميع طلبات الصداقة في حالة 
 const getFriendsPending = () => {

  axios.get(`http://localhost:80/405found/backend/acceptFriend.php/${current_ID}`)
  .then((respone)=>{
      console.log(respone.data);
      let pendingRequest = respone.data.map((ele)=>{
          return ele.friend_id
      })
      setpendingRequest(pendingRequest);
      console.log(pendingRequest);
      setpendingFriends(respone.data)
  })
}
//   عرض جميع طلبات الصداقة الذين تمت الموافقة عليهم


const getFriendsAccepted = () => {

  axios.get(`http://localhost:80/405found/backend/friends.php/${current_ID}`)
  .then((respone)=>{
      console.log(respone.data);
      let friends = respone.data.map((ele)=>{
          return ele.friend_id
      })
      console.log(friends);
      setMyfriends(friends);
      setAcceptedFriends(respone.data)
  })
}

  // عرض طلبات الصداقة الخاصة بالمستخدم واللي لسا ما وافق عليهم

  const getFriendsRequest = () => {

      axios.get(`http://localhost:80/405found/backend/friendRequests.php/${current_ID}`)
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

  
//  pending وحالته بتكون friends  اضافة صديق جديد في جدول ال 
const AddFriends = (friendId) => {
  let inputs = {user_id:current_ID , friend_id:friendId};
  axios.post(`http://localhost:80/405found/backend/friends.php/save`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getFriendsPending();
      getFriendsRequest();
  })


  
}


// status الموافقة على طلب الصداقة وتغيير ال 
const AcceptFriend = (friendId) => {
  let inputs = {user_id:current_ID , friend_id:friendId};
  axios.put(`http://localhost:80/405found/backend/friends.php/edit`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getFriendsPending();
      getFriendsAccepted();
      getFriendsRequest();
  })


  
}

 
// الغاء ارسال طلب الصداقة
const removeRequest = (friendId) => {
  let inputs = {user_id:current_ID , friend_id:friendId};
  axios.put(`http://localhost:80/405found/backend/removeRequest.php/edit`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getFriendsPending();
      getFriendsAccepted();
  })


  
}

// حذف الصداقة
const removeFriend = (friendId) => {
  let inputs = {user_id:current_ID , friend_id:friendId};
  axios.put(`http://localhost:80/405found/backend/removeFriends.php`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getFriendsPending();
      getFriendsAccepted();
      
  })


  
}
/////////////////////////////////////////////////////////







    return (
       
              <div>
                {console.log(dataUsers,'ddddd')}
                {dataUsers.map((users,index)=>{
                  return(
 
                    <div  key={index}>
                    <div className="theme-layout">
                    <Navbar/>
                      <section>
                        <div className="feature-photo">
                          <figure><img src="../images/resources/timeline-1.jpg" alt="" /></figure>
      

      
                          <div className="add-btn">
                            <span>1205 friends</span>
                            
                            {(() => {
                            if (pendingRequest.includes(users.id) || Myfriends.includes(users.id) || requestFriend.includes(users.id)){
                                if(pendingRequest.includes(users.id)){
                                    return (
                                      
                                        <Link onClick={()=>removeRequest(users.id)}>remove request</Link>

                                    )

                                }
                                if(Myfriends.includes(users.id)){
                                    return (
                                                
                                                                                        <Link onClick={()=>removeFriend(users.id)}>remove friends</Link>

                                        )
                                        
                                }
                                if(requestFriend.includes(users.id)){
                                    return (
                                            
                                                    <Link onClick={()=>AcceptFriend(users.id)}>accept</Link>
                                                    )

                                                  }
                             
                            }else{
                                return ( 
                                  
                                  <Link  onClick={()=>AddFriends(users.id)}>Add</Link>
                                  
                                  )
                                }
                                
                              })()}
                          </div>

                        
                          
                          <div className="container-fluid">
                            <div className="row merged">
                              <div className="col-lg-2 col-sm-3">
                                <div className="user-avatar">
                                  <figure>
                                    <img src={require(`../image/${users.image}`)} alt="" />
                                  
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
                                      <a className href="timeline-photos.html" title data-ripple>Photos</a>
                                      <a className href="timeline-videos.html" title data-ripple>Videos</a>
                                      <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                      <a className href="timeline-groups.html" title data-ripple>Groups</a>
                                      <a className href="about.html" title data-ripple>about</a>
                                      <a className href="#" title data-ripple>more</a>
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
<FeedProfileFriend user_id={id}/>

{/* ___________right bar_____________________- */}
      <div className="col-lg-3">
          <aside className="sidebar static">

          <div className="widget">
          <div className="banner medium-opacity bluesh">
          <div className="bg-image" style={{backgroundImage: 'url(images/resources/baner-widgetbg.jpg)'}} />
          <div className="baner-top">
          <span><img alt="" src="images/book-icon.png" /></span>
          <i className="fa fa-ellipsis-h" />
          </div>


          <div className="banermeta">
          <p>
          create your own favourit page.
          </p>
          <span>like them all</span>
          <a data-ripple title href="#">start now!</a>
          </div>
          </div>											
          </div>
<div>

<div className="">
                  <h3>User information</h3>
                  <span className="">email:</span>
                  <span className="">{users.email}</span>
                </div>
                <div className="">
                  <span className="">Phone:</span>
                  <span className="">{users.phone}</span>
                </div>

</div>

          <div className="widget friend-list stick-widget">
          <h4 className="widget-title">User friends</h4>
          <div id="searchDir"></div>
          <ul id="people-list" className="friendz-list" style={{overflowY:'scroll'}}>

          {friendsUser.map((ele,index)=>{
            if(ele.friend_id === current_ID){
              return   (
                <li key={index}>
          <figure>
          <img src={require(`../image/${ele.image}`)} alt="" />
          <span className="status f-online" />
          </figure>
          <div className="friendz-meta">
          <Link to={`/Friendprofile/${ele.friend_id} `}> 
          {ele.name}
          </Link>  

          </div>
          </li>)
                    }
                    else {
                      return (<li key={index}>
          <figure>
          <img src={require(`../image/${ele.image}`)} alt="" />
          <span className="status f-online" />
          </figure>
          <div className="friendz-meta">
          <Link to={`/Friendprofile/${ele.friend_id} `}> 
          {ele.name}
          </Link>  

          </div>
          </li>)
}

})}
          


          </ul>

          </div>
          
          {/* friends list sidebar */}
          </aside>
      </div>



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
                  )
                  })},
                  </div>
    );
}

export default Friendprofile;
