import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";


const ShareGroup = (props) => {


  const group_id = props.group_id;

  const current_ID = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');

  const [users,setUsers] = useState([]);
  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);


  const [file, setFile] = useState(null);

  useEffect(()=>{
    getUsers();
  

},[]);
  const getUsers = async () => {

    await axios.get(`http://localhost:80/405found/backend/user.php/read/${current_ID}`)
    .then((respone)=>{
        setUsers(respone.data[0])
       
    })
}

// create post
const handleImagePost = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("post", inputs);
  formData.append("user_id", current_ID);
  formData.append("file", file);
  formData.append("group_id", group_id);

  try {
    const response = await axios.post(
      "http://localhost:80/405found/backend/postsGroup.php", formData
    );
    console.log(response.data);
    // window.location.assign(`/groups/${group_id}/show`);
  } catch (error) {
    console.error(error);
  }
};

const handlePost = (e) => {
  const value = e.target.value;
  setInputs(value)
}
  return (
    <>
                              <div className="central-meta">
                          <div className="new-postbox">
                            <figure>
                              <img src={require(`../../image/${ImageUser}`)} alt="" />
                            </figure>
                            <div className="newpst-input">
                            <form onSubmit={handleImagePost}>                                
                            <textarea id={current_ID} onChange={handlePost} rows={3} placeholder="write something" defaultValue={""} />
                                <div className="attachments">
                                  <ul>
                              
                                    <li>
                                      <i className="fa fa-image" />
                                      <label className="fileContainer">
                                        <input id="file"
                     onChange={(e) => setFile(e.target.files[0])}  type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <i className="fa fa-video-camera" />
                                      <label className="fileContainer">
                                        <input type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <button type="submit">Publish</button>
                                    </li>
                                  </ul>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
    </>
  );
}

export default ShareGroup;
