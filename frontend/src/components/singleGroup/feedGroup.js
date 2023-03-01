import React from 'react';
import PostGroup from './postGroup';
import ShareGroup from './shareGroup';
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
const FeedGroup = (props) => {
  const {profile_id} = useParams();

  const current_Fname = JSON.parse(localStorage.getItem('first_name'));
  const current_Lname = JSON.parse(localStorage.getItem('last_name'));
  const current_ID = JSON.parse(localStorage.getItem('id'));
  // const current_Email = JSON.parse(localStorage.getItem('email'));

  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);
  const [likes , setLikes] = useState([]);

  useEffect(()=>{
    getPosts();
} , [])

function getPosts(){
  axios.get(`http://localhost:80/405found/backend/postsGroup.php/${props.group_id})`)

  .then(response => {
      setPosts(response.data);
      console.log(response.data);
      console.log(props.group_id);
  })
}

  return (
    <>
                      <div className="col-lg-6">
                              <ShareGroup group_id={props.group_id} />
                            
                                {/* add post new box */}
                              <div className="loadMore">
                                {(posts == []) ?
                  <></>
                  :

                  posts.map((p) =>(
                    <PostGroup group_id={props.group_id}  key = {p.id} post ={p}/>
                    ))}
                         
                          
                              </div>
                          </div>
    </>
  );
}

export default FeedGroup;
