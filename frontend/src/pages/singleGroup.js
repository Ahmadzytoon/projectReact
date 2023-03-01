import Navbar from '../components/navbar';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Nav from '../components/nav';
import GroupRightBar from '../components/groupRightBar';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  useParams} from "react-router-dom";

import FeedGroup from '../components/singleGroup/feedGroup';

const SingleGroup = () => {
   
  const {id} =useParams();
  const current_ID = JSON.parse(localStorage.getItem('id'));






  const [groups , setGroups] = useState([]);
  const [allGroups , setDataGroups] = useState([]);
  const [usersGroups , setUserGroups] = useState([]);
  const [pendingRequestGroups , setPendingRequestGroups] = useState([]);

  const [myAcceptedGroups , setMyAcceptrdGroups] = useState([]);


  const [pendingMembers,setPendingMembers] = useState([]);
  const [acceptedMembers,setAcceptedMembers] = useState([]);


  useEffect(()=>{
    getDataGroups();
    getUsersGroup();
    getPendingRequest();
    getMyAcceptrdGroups();
    getGroups();
    getPendingMempers();
    getAcceptedMempers();

   
    
} , [])

const getMyAcceptrdGroups = () => {

  axios.get(`http://localhost:80/405found/backend/getMyGroupAcceptedStatus.php/${current_ID}`)
  .then(response => {
      console.log(response.data)
      let myAcceptedGroups = response.data.map((ele)=>{
        return ele.group_id
    })
    console.log(myAcceptedGroups);
    console.log(id);
    console.log(myAcceptedGroups.hasOwnProperty(id));
    console.log(myAcceptedGroups.includes(id));
      setMyAcceptrdGroups(myAcceptedGroups);
  })

}
const getDataGroups = () => {

  axios.get(`http://localhost:80/405found/backend/getDataGroups.php/${id}`)
  .then(response => {
      console.log(response.data)
      setGroups(response.data);
  })
}

const getUsersGroup = () => {

  axios.get(`http://localhost:80/405found/backend/getUsersGroup.php/${id}`)
  .then(response => {
      console.log(response.data)
      setUserGroups(response.data);
  })

}

const getPendingRequest = () => {
  axios.get(`http://localhost:80/405found/backend/getPendingRequestForGroup.php/${id}`)
  .then((respone)=>{
      console.log(respone.data);
    
      setPendingRequestGroups(respone.data);
      // setPendingMempers(respone.data)
  })
}

// لحذف عضو من الجروب
const deleteFromGroup = (userId) => {

  let inputs = {user_id:userId , group_id:id};
  axios.put(`http://localhost:80/405found/backend/deleteRequestForGroup.php`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getDataGroups();
      getUsersGroup();
      getPendingRequest();
      
  })

}

// لحذف طلب الانظمام لل الجروب
const deleteRequest = (userId) => {

  let inputs = {user_id:userId , group_id:id};
  axios.put(`http://localhost:80/405found/backend/deleteRequestForGroup.php`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getDataGroups();
      getUsersGroup();
      getPendingRequest();
      
  })

}
//  لقبول طلب الانظمام لل الجروب
const acceptRequest = (userId) => {

  let inputs = {user_id:userId , group_id:id};
  axios.put(`http://localhost:80/405found/backend/membersGroup.php`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getDataGroups();
      getUsersGroup();
      getPendingRequest();
      
  })
}

// /////////////////////////////////
// لعرض كل الجروبات في الموقع

function getGroups(){
  axios.get(`http://localhost:80/405found/backend/groups.php/`)
  .then(response => {
      console.log(response.data)
      setDataGroups(response.data);
      
  })
}


// لاضافة عضو لجروب معين
const AddToGroup = (groupId) => {
  let inputs = {user_id:current_ID , group_id:groupId};
  axios.post(`http://localhost:80/405found/backend/membersGroup.php/save`,inputs)
  .then((respone)=>{
      console.log(respone.data);
      getPendingMempers();
      
            // getFriendsRequest();
  })
}
     //للجروبات pending لعرض كل طلبات المستخدم اللي حالتهم 
    const getPendingMempers = () => {

        axios.get(`http://localhost:80/405found/backend/getPendingMember.php/${current_ID}`)
        .then((respone)=>{
            console.log(respone.data);
            let pendingMembers = respone.data.map((ele)=>{
                return ele.group_id
            })
            console.log(pendingMembers);
            setPendingMembers(pendingMembers);
            // setPendingMempers(respone.data)
        })
    }

         //للجروبات accepted لعرض كل طلبات المستخدم اللي حالتهم 
         const getAcceptedMempers = () => {

          axios.get(`http://localhost:80/405found/backend/getAcceptedMember.php/${current_ID}`)
          .then((respone)=>{
              console.log(respone.data);
              let acceptedMembers = respone.data.map((ele)=>{
                  return ele.group_id
              })
              console.log(acceptedMembers);
              setAcceptedMembers(acceptedMembers);
              // setPendingMempers(respone.data)
          })
      }

  // لحذب طلب الاضافة 
    const removeRequest = (GroupId) => {
      let inputs = {user_id:current_ID , group_id:GroupId};
      axios.put(`http://localhost:80/405found/backend/getPendingMember.php/edit`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getGroups();
          getPendingMempers();
      })

    }

    // delete group

    const  deleteGroup = (id) => {
      axios.delete(`http://localhost:80/405found/backend/groups.php/${id}`).then(function(response){
        window.location.assign('/')
      })
    }





// ///////////////////////////////////////
let flag = false;
    return (
      <>

{myAcceptedGroups.map((ele)=>{
                    if (ele == id) {
                      flag=true;
                      console.log(true);
                    }
                })}   
    {groups.map((groups,index)=>{

    return (
        <div className="theme-layout">
         <Navbar/>
          <section>
            <div className="feature-photo">
              <figure><img style={{maxHeight: '70vh'}}  src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="aa" /></figure>
              <div className="add-btn">
                <span>1.3k followers</span>
                {(() => {
              if (!(groups.user_id == current_ID)){
                            if (pendingMembers.includes(groups.group_id) || acceptedMembers.includes(groups.group_id) ){
                                if(pendingMembers.includes(groups.group_id)){
                                  return ( 
                                    <Link>
                                        <i className="" onClick={()=>removeRequest(groups.group_id)}>remove request</i>
                                    </Link>
                              )

                                }
                                if(acceptedMembers.includes(groups.group_id)){
                                    return (

                                        <Link to={`/groups/${groups.group_id}/show`}>
                                            <i  onClick={()=>removeRequest(groups.group_id)}>delete group</i>
                                        </Link>


                                    
                                    )

                                }
                              
                             
                            }else{
                              return ( 
                  
                                <Link>
                                    <i  onClick={()=>AddToGroup(groups.group_id)}>Join Group</i>
                                </Link>
                            
                              )
                          }}
                            
                
            })()}

              




              </div>
              <form className="edit-phto">
                <i className="fa fa-camera-retro" />
                <label className="fileContainer">
                  Edit Cover Photo
                  <input type="file" />
                </label>
              </form>
              <div className="container-fluid">
                <div className="row merged">
                  <div className="col-lg-2 col-sm-3">
                    <div className="user-avatar">
                      <figure>
                        <img src={groups && groups.group_image ?require(`../image/${groups.group_image}`) : "https://www.example.com/example.png"} alt="" />
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input type="file" />
                          </label>
                        </form>
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-10 col-sm-9">
                    <div className="timeline-info">
                      <ul>
                        <li className="admin-name">
                          <h5>{groups.group_name}</h5>
                          <span>@{groups.group_name}</span>
                        </li>
                        <li>
                          <a className="active" href="fav-page.html" title data-ripple>Page</a>
                          <a className href="inbox.html" title data-ripple>inbox</a>
                          <a className href="insights.html" title data-ripple>insights</a>
                          <a className href="fav-page.html" title data-ripple>posts</a>
                          <a className href="page-likers.html" title data-ripple>likers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                        <Sidebar/> 
                        <FeedGroup group_id={id} />

                      {/* centerl meta */}
                      {/* ______________________GroupRightBar______________________ */}
                      <div className="col-lg-3">
        <aside className="sidebar static">


          <div className="widget">
            <h4 className="widget-title">Group Admin</h4>	
            <div className="your-page">
              <figure>
                <a href="#" title><img  src={groups && groups.image ? require(`../image/${groups.image}`) : "https://www.example.com/example.png"} alt="vcc" /></a>
              </figure>
              <div className="page-meta">
                <a href="#" title className="">{groups.name}</a>
                
             
              
                 
                
              </div>
            </div>
          </div>
          
          
          {/* page like widget */}
          <div className="widget">
            <div className="banner medium-opacity bluesh">
              <div className="bg-image" style={{backgroundImage: 'url(images/resources/baner-widgetbg.jpg)'}} />
              <div className="baner-top">
                <span><img alt="" src="images/book-icon.png" /></span>
                <i className="fa fa-ellipsis-h" />
              </div>


        

              <div className="banermeta">
                <p>
                  create your own favourite page.
                </p>
                <span>like them all</span>
                <a data-ripple title href="#">start now!</a>
              </div>
  




            </div>											
          </div>
          {/* ___________________Request Members_____________________ */}
          { groups.user_id === current_ID ?
          <div className="widget friend-list stick-widget">
            <h4 className="widget-title">Request Members   ({pendingRequestGroups.length})</h4>
            <div id="searchDir" />
            <ul id="people-list" className="friendz-list" style={{overflowY:'scroll'}}>

            { pendingRequestGroups.map((element,index) => {
                          return (


              <li  key={index}>
                <figure>
                  <img src={require(`../image/${element.image}`)} alt="" />
                  <span className="status f-online" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">{element.name}</a>
                  <button  onClick={() => {acceptRequest(element.user_id)}}>accept</button>
                  <button  onClick={() => {deleteRequest(element.user_id)}}>delete</button>
                </div>
              </li>

)  })}
        
          
            </ul>
          
          </div>
          : "" }
          {/* _____________________________________Members________________________________________ */}
          <div className="widget friend-list stick-widget">
            <h4 className="widget-title">Members    ({usersGroups.length})</h4>
            <div id="searchDir" />
            <ul id="people-list" className="friendz-list" style={{overflowY:'scroll'}}>

            { usersGroups.map((element,index) => {
                          return (


              <li key={index}>
                <figure>
                  <img src={require(`../image/${element.image}`)} alt="" />
                  <span className="status f-online" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">{element.name}</a>

                  { groups.user_id === current_ID ?
                  <button onClick={() => {deleteFromGroup(element.user_id)}}>Delete</button>
                  : "" }
                </div>
              </li>
   )  })}
          
              {/* <li>
                <figure>
                  <img src="images/resources/friend-avatar3.jpg" alt="" />
                  <span className="status f-off" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">jason borne</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d777c6e72737f5d7a707c7471337e7270">[email&nbsp;protected]</a></i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar4.jpg" alt="" />
                  <span className="status f-off" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">Cameron diaz</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bed4dfcdd1d0dcfed9d3dfd7d290ddd1d3">[email&nbsp;protected]</a></i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar5.jpg" alt="" />
                  <span className="status f-online" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">daniel warber</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="553f34263a3b37153238343c397b363a38">[email&nbsp;protected]</a></i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar6.jpg" alt="" />
                  <span className="status f-away" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">andrew</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5933382a36373b193e34383035773a3634">[email&nbsp;protected]</a></i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar7.jpg" alt="" />
                  <span className="status f-off" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">amy watson</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5933382a36373b193e34383035773a3634">[email&nbsp;protected]</a></i>
                </div>
              </li>
              <li>
                <figure>
                  <img src="images/resources/friend-avatar5.jpg" alt="" />
                  <span className="status f-online" />
                </figure>
                <div className="friendz-meta">
                  <a href="time-line.html">daniel warber</a>
                  <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dbb1baa8b4b5b99bbcb6bab2b7f5b8b4b6">[email&nbsp;protected]</a></i>
                </div>
              </li> */}
          
            </ul>
            <div className="chat-box">
              <div className="chat-head">
                <span className="status f-online" />
                <h6>Bucky Barnes</h6>
                <div className="more">
                  <span><i className="ti-more-alt" /></span>
                  <span className="close-mesage"><i className="ti-close" /></span>
                </div>
              </div>
              <div className="chat-list">
                <ul>
                  <li className="me">
                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt="" /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                    </div>
                  </li>
                  <li className="you">
                    <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt="" /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                    </div>
                  </li>
                  <li className="me">
                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt="" /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                    </div>
                  </li>
                </ul>
                <form className="text-box">
                  <textarea placeholder="Post enter to post..." defaultValue={""} />
                  <div className="add-smiles">
                    <span title="add icon" className="em em-expressionless" />
                  </div>
                  <div className="smiles-bunch">
                    <i className="em em---1" />
                    <i className="em em-smiley" />
                    <i className="em em-anguished" />
                    <i className="em em-laughing" />
                    <i className="em em-angry" />
                    <i className="em em-astonished" />
                    <i className="em em-blush" />
                    <i className="em em-disappointed" />
                    <i className="em em-worried" />
                    <i className="em em-kissing_heart" />
                    <i className="em em-rage" />
                    <i className="em em-stuck_out_tongue" />
                  </div>
                  <button type="submit" />
                </form>
              </div>
            </div>
          </div>
          {/* friends list sidebar */}
        </aside>
      </div>
                      {/* ______________________ end GroupRightBar______________________ */}
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
        )})}
          </>
    );
  
   
}

export default SingleGroup;
