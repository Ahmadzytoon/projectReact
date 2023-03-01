import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import { useState , useEffect } from 'react';
import axios from 'axios';
const CreateGroup = () => {

  const current_ID = JSON.parse(localStorage.getItem('id'));

    const [name, setName] = useState("");
    const [file, setFile] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("user_id", current_ID);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:80/405found/backend/groups.php",
        formData
      );
      console.log(response.data);
      // window.location.assign('/groups')

    } catch (error) {
      console.error(error);
    }
  };


    return (

      
      <div>
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
                  <div className="editing-info">
                    <h5 className="f-title"><i className="ti-info-alt" /> Create new group</h5>
                    <form id="consultation-form" className="feed-form" onSubmit={handleSubmit}>
                      <div className="form-group half">	
                        <input  type="file"  name="img" id="file" accept="image/*"  onChange={(e) =>setFile(e.target.files[0])} />
                        
                      </div>
                      <div className="form-group half">	
                        <input type="text"  id="text"  onChange={(e) => setName(e.target.value)} />
                        <label className="control-label" htmlFor="input">Group Name</label><i className="mtrl-select" />
                      </div>
                      
                      <div className="submit-btns">
                        <button  className="mtr-btn"><span>Create</span></button>
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

      // ___________
    
    );
}

export default CreateGroup;
