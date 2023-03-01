import React from 'react';
import Navbar from '../components/navbar';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';


const Friends = () => {
    return (
        <div className="theme-layout">
        <Navbar/>
       
       	
        <section>
        
        
          <div className="gap gray-bg">
            <div className="container-fluid">
            
              <div className="row">
                <div className="col-lg-12">
                  <div className="row" id="page-contents">
                  
              <Sidebar/>
                    <div className="col-lg-6">
                      <div className="central-meta">
                        <div className="groups">
                          <span><i className="fa fa-users" />Friends</span>
                        </div>
                        <ul className="nearby-contct">
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group1.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>funparty</a></h4>
                                
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group2.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>ABC News</a></h4>
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group3.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>SEO Zone</a></h4>
                                
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group4.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>Max Us</a></h4>
                                
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group5.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>Banana Group</a></h4>
                               
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group6.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>Bad boys n Girls</a></h4>
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group7.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>bachelor's fun</a></h4>
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group4.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>Max Us</a></h4>
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src="images/resources/group3.jpg" alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>SEO Zone</a></h4>
                                
                                <a href="#" title className="add-butn" data-ripple>unfriend</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>{/* photos */}
                    </div>{/* centerl meta */}
                
                    <Rightbar/>    {/* sidebar */}
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
    );
}

export default Friends;
