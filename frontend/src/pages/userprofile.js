import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

const userprofile = () => {
    return (
       
                <div>
                  <div className="theme-layout">
                  <Navbar/>
                    <section>
                      <div className="feature-photo">
                        <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                        <div className="add-btn">
                          <span>1205 friends</span>
                          
                          <a href="#" title data-ripple>Edit Profile</a>
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
                                  <img src="images/resources/user-avatar.jpg" alt="" />
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
                                    <h5>Janice Griffith</h5>
                                    <span>Group Admin</span>
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
                              <div className="col-lg-6">
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
                                </div>{/* add post new box */}
                                <div className="loadMore">
                                {/*POST*/}
                                  <div className="central-meta item">
                                    <div className="user-post">
                                      <div className="friend-info">
                                        <figure>
                                          <img src="images/resources/friend-avatar10.jpg" alt="" />
                                        </figure>
                                        <div className="friend-name">
                                          <ins><a href="time-line.html" title>Janice Griffith</a></ins>
                                          <span>published: june,2 2018 19:PM</span>
                                        </div>
                                        <span><AiFillEdit className='icons'/><MdDeleteForever className='icons' style={{color:'red'}}/></span>
                                        <div className="post-meta">
                                          <img src="images/resources/user-post.jpg" alt="" />
                                          <div className="we-video-info">
                                            <ul>
                                              <li>
                                                <span className="views" data-toggle="tooltip" title="views">
                                                  <i className="fa fa-eye" />
                                                  <ins>1.2k</ins>
                                                </span>
                                              </li>
                                              <li>
                                                <span className="comment" data-toggle="tooltip" title="Comments">
                                                  <i className="fa fa-comments-o" />
                                                  <ins>52</ins>
                                                </span>
                                              </li>
                                              <li>
                                                <span className="like" data-toggle="tooltip" title="like">
                                                  <i className="ti-heart" />
                                                  <ins>2.2k</ins>
                                                </span>
                                              </li>
                                              <li>
                                                <span className="dislike" data-toggle="tooltip" title="dislike">
                                                  <i className="ti-heart-broken" />
                                                  <ins>200</ins>
                                                </span>
                                              </li>
                                              <li className="social-media">
                                                <div className="menu">
                                                  <div className="btn trigger"><i className="fa fa-share-alt" /></div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-html5" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-facebook" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-google-plus" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-twitter" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-css3" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-instagram" /></a>
                                                    </div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-dribbble" /></a>
                                                    </div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-pinterest" /></a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="description">
                                            <p>
                                              World's most beautiful car in Curabitur <a href="#" title>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="coment-area">
                                        <ul className="we-comet">
                                      {/*  COMMENT*/ }
  
                                          <li>
                                            <div className="comet-avatar">
                                              <img src="images/resources/comet-1.jpg" alt="" />
                                            </div>
                                            <div className="we-comment">
                                              <div className="coment-head">
                                                <h5><a href="time-line.html" title>Donald Trump</a></h5>
                                                <span>1 week ago</span>
                                                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                              </div>
                                              <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                                <i className="em em-smiley" />
                                              </p>
                                            </div>
                                          </li>
  
                                      {/*END COMMENT*/ }
  
                                       {/* INPUT COMMENT*/ }
                                          <li className="post-comment">
                                            <div className="comet-avatar">
                                              <img src="images/resources/comet-1.jpg" alt="" />
                                            </div>
                                            <div className="post-comt-box">
                                              <form method="post">
                                                <textarea placeholder="Post your comment" defaultValue={""} />
                                                <div className="add-smiles">
                                                  <span className="em em-expressionless" title="add icon" />
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
                                          </li>
                                      {/* END INPUT COMMENT*/ }
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                              </div>{/* centerl meta */}
                              <Rightbar/>
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
            
    );
}

export default userprofile;
