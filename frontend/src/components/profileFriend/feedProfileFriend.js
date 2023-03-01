import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

import ShareHome from "../home/shareHome";
import PostProfile from "./postProfileFriend";
import PostProfileFriend from "./postProfileFriend";

const FeedProfileFriend = (props) => {
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
        {/* 
<div className="central-meta">
  <div className="new-postbox">
    <figure>
      <img src="images/resources/admin2.jpg" alt="" />
    </figure>
    <div className="newpst-input">
      <form method="post">
        <textarea rows={2} placeholder="write something" defaultValue={""} />
        <div className="attachments">
          <ul>
            <li>
              <i className="fa fa-music" />
              <label className="fileContainer">
                <input type="file" />
              </label>
            </li>
            <li>
              <i className="fa fa-image" />
              <label className="fileContainer">
                <input type="file" />
              </label>
            </li>
            <li>
              <i className="fa fa-video-camera" />
              <label className="fileContainer">
                <input type="file" />
              </label>
            </li>
            <li>
              <i className="fa fa-camera" />
              <label className="fileContainer">
                <input type="file" />
              </label>
            </li>
            <li>
              <button type="submit">Post</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</div> */}

        {/* add post new box */}
        <div className="loadMore">
          {/*POST*/}


          {(posts == []) ?
                  <></>
                  :
                  posts.map((p) =>(
                    <PostProfileFriend  user_id={props.user_id} key = {p.id} post ={p}/>
                    ))}

        </div>
      </div>
    </>
  );
};

export default FeedProfileFriend;
