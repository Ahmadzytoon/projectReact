import { BsBellFill } from 'react-icons/bs'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {


  const id = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');
  const NameUser = localStorage.getItem('name');

  const [requestFriends,setRequestFriends] = useState([]);  
  const [requestFriend,setrequestFriend] = useState([]);

  useEffect(()=>{
    getFriendsRequest();

},[]);

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
        <div className="topbar stick">
            <div className="logo">
                <a title href="newsfeed.html"><img src="images/tag2.png" alt="" style={{marginTop:'-25px'}}/></a>
            </div>

            <div className="top-area">


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <ul className="setting-area">


                    <li className="nav-item dropdown">
                    
                        <Link className="nav-link dropdown-toggle" to={"/requestFriends"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <BsBellFill style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}}/>
                        </Link>{requestFriends.length}
{/* {requestFriends.map((ele,index)=>{
return(

<a className="dropdown-item" href="#"> 
<div>
<div style={{display:"flex",borderRadius:"50%",justifyContent:"space-evenly"}}>
<img style={{maxWidth:"50px",maxHeight:"50px"}} src={require(`../image/${ele.image}`)}/>
<p style={{fontWeight:"600"}}>{ele.name}</p>
</div>
<button size="sm" variant="success" onClick={()=>AcceptFriend(ele.user_id)}>Confirm</button>
<button style={{marginLeft:"2%"}} size="sm" variant="danger" onClick={()=>removeRequest(ele.user_id)}>Delete</button>


</div>
</a>
)})} */}
                        
                        
                    </li>

                
                    <li className="nav-item dropdown">
                    <div className="user-img">

                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img src={require(`../image/${ImageUser}`)} alt="" style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit',    width: "48px",
    height: "45px"}}/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href={'/profile'}> Profile</a>
                            <Link className="dropdown-item" to={`/profile/editProfile/${id}/edit`}>EditProfile</Link>
                            <a className="dropdown-item"  href="/" >Logout</a>
                        </div>
                        </div>
                    </li>


                </ul>
              
            </div>


        </div>

    );
}

export default Navbar;
