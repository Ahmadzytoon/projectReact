import React from 'react';
import PostGroup from './postProfile';
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";


import ShareHome from '../home/shareHome';
import PostProfile from './postProfile';




const FeedProfile = (props) => {
  
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  // Posts



  function getPosts() {
    axios.get(`http://localhost:80/405found/backend/getPostForUser.php/${props.user_id}`)
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
                  posts.map((p) =>(
                                 <PostProfile  user_id={props.user_id} key = {p.id} post ={p}/>
                                 ))}
                                 </div>
                               </div>{/* centerl meta */}
    </>
  );
}

export default FeedProfile;
