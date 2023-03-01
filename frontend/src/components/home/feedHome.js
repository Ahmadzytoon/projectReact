import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ShareHome from './shareHome';
import PostHome from './postHome';
const FeedHome = () => {


  
  const current_ID = JSON.parse(localStorage.getItem('id'));

  
  const [inputs, setInputs] = useState("")
  const [posts, setPosts] = useState([]);
  
  
  useEffect(() => {
    // console.log(current_ID);
    getPosts();
  }, [])


const getPosts = async () =>{
 await axios.get(`http://localhost:80/405found/backend/posts.php/${current_ID}`)
  .then(response => {
    console.log(response.data);
    setPosts(response.data);
  })
}

  return (
    <>
              <div className="col-lg-6">
                            <ShareHome/>
                            

                              {/* add post new box */}
                              <div className="loadMore">
                              {/*POST*/}
                              {(posts == []) ?
                  <></>
                  :
                  posts.map((post) =>(
                             <PostHome key = {post.id} post ={post}/>
                             ))}
                              </div>
                            </div>
    </>
  );
}

export default FeedHome;
