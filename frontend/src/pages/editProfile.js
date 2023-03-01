import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import axios from 'axios'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

const EditProfile = () => {

  const [like, setLike] = useState('')


  const {profile_id} = useParams();
  const {postID} = useParams();


  const current_Fname = localStorage.getItem('name');
  const current_ID = JSON.parse(localStorage.getItem('id'));
  const current_Email = localStorage.getItem('email');

  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);
  const [likes , setLikes] = useState([]);
  const [file, setFile] = useState(null);
  const [user , setUser] = useState([]);





  useEffect(()=>{
    getUser();
} , [])


function getUser(){
    axios.get(`http://localhost:80/405found/backend/userProfile.php/${current_ID}`)
    .then(response => {
        setUser(response.data);
    })
}


const handleEditUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs( {...inputs , [name]: value})
  }

  const handleEditUserSubmit  = async (e) => {
    e.preventDefault();

    const formEditData = new FormData();

    formEditData.append("name", inputs['name']);
    formEditData.append("first_name", inputs['first_name']);
    formEditData.append("last_name", inputs['last_name']);
    formEditData.append("phone", inputs['phone']);
    formEditData.append("password", inputs['password']);
    formEditData.append("file", file);
  
    try {
      const response = await axios.post(
        `http://localhost:80/405found/backend/editUserProfile.php/${current_ID}`, formEditData
      );
      console.log(response.data);
      // window.location.assign(`/profile`);
    } catch (error) {
      console.error(error);
    }
  };



    return (

    <>

        <div className="theme-layout">
        <Navbar/>
        {user.map((Oneuser)=>{
                                return( 
        <>
            <section>
              <div className="feature-photo">
                <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                <div className="add-btn">
                  <span>1205 friends</span>
                  
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
                          <img src={require(`../image/${Oneuser.image}`)} alt="" />
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
                            <h5>{Oneuser.nam}</h5>
                            <span>@{Oneuser.name}</span>
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
            </section>
          
            
          
            <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                    <Sidebar/>
                    <div className="col-lg-6">
                    <div className="central-meta">
                      <div className="editing-info">
                        <h5 className="f-title"><i className="ti-info-alt" /> Edit Basic Information</h5>
                        
                  
                        
                        <form id={`editUserForm${Oneuser.id}`} onSubmit={handleEditUserSubmit}>
                          <div className="form-group half">	
                            <input name="name" type="text" defaultValue={Oneuser.name} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Name</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input name="password" type="password" defaultValue={Oneuser.password} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Password</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input name="phone" type="number" defaultValue={Oneuser.phone} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Phone</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input type="file" name="file" id="file"onChange={(e) => setFile(e.target.files[0])} />
                            <label className="control-label" htmlFor="">Image</label><i className="mtrl-select" />
                          </div>
                        
                          <div className="submit-btns">
                            <button className="mtr-btn"><span>Update</span></button>
                          </div>
                        </form>
                      </div>
                    </div>	
                  </div>
                      <Rightbar/>
                    </div>	
                  </div>
                </div>
              </div>
            </div>	
          </section>
        </>
           )
                        })}
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
    </>
    );
}

export default EditProfile;
