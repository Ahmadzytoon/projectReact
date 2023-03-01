import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';






const Rightbar = () => {

  
const {profile_id} = useParams();

const current_ID = JSON.parse(localStorage.getItem('id'));
const current_Email = localStorage.getItem('email');

const [inputs , setInputs] = useState("")
const [users , setUsers] = useState([]);
const [usersData , setDataUsers] = useState([]);



useEffect(()=>{
    getUsers();
    getDataUsers();
} , [])


function getUsers(){
    axios.get(`http://localhost:80/405found/backend/getAllFriendsUser.php/${profile_id}`)
    .then(response => {
      console.log(response.data);
        setUsers(response.data);
    })
  }
  
  const getDataUsers = () => {

    axios.get(`http://localhost:80/405found/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data[0])
        console.log(respone.data[0]);
    })
}
  var i = 1;








// 
  const id = JSON.parse(localStorage.getItem('id'));
    const [acceptrdFriends,setAcceptedFriends] = useState([]);
    const [friends,setfriends] = useState([]);


    useEffect(()=>{
      getFriendsAccepted();
  },[]);
    //   عرض جميع طلبات الصداقة الذين تمت الموافقة عليهم

    
    const getFriendsAccepted = () => {

      axios.get(`http://localhost:80/405found/backend/friends.php/${id}`)
      .then((respone)=>{
          console.log(respone.data);
          let friends = respone.data.map((ele)=>{
              return ele.friend_id
          })
          console.log(friends);
          setfriends(friends);
          setAcceptedFriends(respone.data)
      })
  }




    

    return (
        
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
                                <div className="widget friend-list stick-widget">
                                  <h4 className="widget-title">Friends</h4>
                                  <div id="searchDir" />
                                  <ul id="people-list" className="friendz-list" style={{overflowY:'scroll'}}>

                                  {acceptrdFriends.map((ele,index)=>{
            return(

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
                                    </li>

)})}

                                
                                  </ul>

                                </div>{/* friends list sidebar */}
                              </aside>
                            </div>

);
};



export default Rightbar;
