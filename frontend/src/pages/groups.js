import React from 'react';
import Navbar from '../components/navbar';
import RightBarcreateGrope from '../components/rightBarcreateGrope';
import Sidebar from '../components/sidebar';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Groups = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));

  const[data,setData]=useState([]);
  const [pendingMembers,setPendingMembers] = useState([]);
  const [acceptedMembers,setAcceptedMembers] = useState([]);

  useEffect(()=>{
    getGroups();
    getPendingMempers();
    getAcceptedMempers();
          },[])

          // لعرض كل الجروبات في الموقع

  const getGroups =()=>{
      
      axios.get("http://localhost/405found/backend/groups.php")
    
      .then((res)=>{
          console.log(res.data)
          setData(res.data)
      })
 } 


// لاضافة عضو لجروب معين
const AddToGroup = (groupId) => {
let inputs = {user_id:current_ID , group_id:groupId};
axios.post(`http://localhost:80/405found/backend/membersGroup.php/save`,inputs)
.then((respone)=>{
    console.log(respone.data);
    getGroups();
    getPendingMempers();
    
          // getFriendsRequest();
})
}
   //للجروبات pending لعرض كل طلبات المستخدم اللي حالتهم 
  const getPendingMempers = () => {

      axios.get(`http://localhost:80/405found/backend/getPendingMember.php/${current_ID}`)
      .then((respone)=>{
          console.log(respone.data);
          let pendingMembers = respone.data.map((ele)=>{
              return ele.group_id
          })
          console.log(pendingMembers);
          setPendingMembers(pendingMembers);
          // setPendingMempers(respone.data)
      })
  }

       //للجروبات accepted لعرض كل طلبات المستخدم اللي حالتهم 
       const getAcceptedMempers = () => {

        axios.get(`http://localhost:80/405found/backend/getAcceptedMember.php/${current_ID}`)
        .then((respone)=>{
            console.log(respone.data);
            let acceptedMembers = respone.data.map((ele)=>{
                return ele.group_id
            })
            console.log(acceptedMembers);
            setAcceptedMembers(acceptedMembers);
            // setPendingMempers(respone.data)
        })
    }

// لحذب طلب الاضافة 
  const removeRequest = (GroupId) => {
    let inputs = {user_id:current_ID , group_id:GroupId};
    axios.put(`http://localhost:80/405found/backend/getPendingMember.php/edit`,inputs)
    .then((respone)=>{
        console.log(respone.data);
        getGroups();
        getPendingMempers();
    })

  }

// __________


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
                          <span><i className="fa fa-users" /> Groups</span>
                        </div>
                        <ul className="nearby-contct">
                          {/* _____________ */}
                          {data.filter(function(ele) {
                    // لحتى ما اطبع المستخد اللي عامل تسجيل دخول
                    if (ele.user_id === current_ID) {
                        return false; // skip
                    }
                    return true;
                    }).map((ele,index)=>(
                          <li key={index}>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src={require(`../image/${ele.group_image}`)} alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>{ele.group_name}</a></h4>
                                <span> <Link to={`/groups/singleGroup/${ele.group_id}/show`}> Show Group </Link></span>
                                <em>32k Members</em>


                          
                                {(() => {
                            if (pendingMembers.includes(ele.group_id) || acceptedMembers.includes(ele.group_id) ){
                                if(pendingMembers.includes(ele.group_id)){
                                  return ( 
                                          <button  title onClick={()=>removeRequest(ele.group_id)} className="add-butn" data-ripple>remove request</button> 

                                      
                                      )

                                }
                                if(acceptedMembers.includes(ele.group_id)){
                                    return (
                                        <button onClick={()=>removeRequest(ele.group_id)} title className="add-butn" data-ripple>join now</button>

                

                                    
                                                )

                                }
                              
                             
                            }else{
                              return ( 
                                        <button title onClick={()=>AddToGroup(ele.group_id)} className="add-butn" data-ripple>join now</button>

                              
                            
                              )
                          }
              
            })()}
                              </div>
                            </div>
                          </li>



))}
                          {/* __________________ */}
                        

                        </ul>
                      </div>{/* photos */}
                    </div>{/* centerl meta */}
                
                    <RightBarcreateGrope/>    {/* sidebar */}
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

export default Groups
