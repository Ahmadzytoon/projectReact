import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const current_ID = JSON.parse(localStorage.getItem("id"));
  const [groups, setGroups] = useState([]);

  const [myAcceptrdGroups, setMyAcceptrdGroups] = useState([]);

  useEffect(() => {
    getGroups();
    getMyAcceptrdGroups();
  }, []);

  function getGroups() {
    axios
      .get(`http://localhost:80/405found/backend/groups.php/`)
      .then((response) => {
        console.log(response.data);
        setGroups(response.data);
      });
  }

  const getMyAcceptrdGroups = () => {
    axios
      .get(
        `http://localhost:80/405found/backend/getMyGroupAcceptedStatus.php/${current_ID}`
      )
      .then((response) => {
        console.log(response.data);
        setMyAcceptrdGroups(response.data);
      });
  };

  return (
    <div className="col-lg-3">
      <aside className="sidebar static">
        <div className="widget">
          <h4 className="widget-title">Shortcuts</h4>
          <ul className="naves">
            <li>
              <i className="ti-clipboard" />
              <Link to="/home" title>
                Home
              </Link>
            </li>
            <li>
              <i className="ti-user" />
              <Link to="/profile" title>
                Profile
              </Link>
            </li>
            <li>
              <i className="ti-mouse-alt" />
              <Link to="/groups" title>
                Groups
              </Link>
            </li>
      
            <li>
              <i className="ti-files" />
              <Link to="/Allusers" title>
                All Users
              </Link>
            </li>

            <li>
              <i className="ti-power-off" />
              <Link to="/" title>
                Logout
              </Link>
            </li>
          </ul>
        </div>
        {/* Shortcuts */}
{/* ____________________________________________Joined Groups_________________________________________________________ */}
        <div className="widget stick-widget">
          <h4 className="widget-title">Joined Groups</h4>
          <ul
            className="followers"
            id="scrollbar"
            style={{ overflowY: "scroll" }}
          >
            {myAcceptrdGroups
              .filter(function (ele) {
                if (ele.user_id === current_ID) {
                  return true; // skip
                }
                return false;
              })
              .map((element, index) => {
                return (
                  <li key={index}>
                    <figure>
                      <img
                        src={require(`../image/${element.group_image}`)}
                        alt=""
                      />
                    </figure>
                    <div className="friend-meta">
                      <h4>
                        <Link to={`/groups/singleGroup/${element.group_id}/show`} title>
                          {element.group_name}
                        </Link>
                      </h4>
                      {/* <Link to="#" title className="underline">Add Friend</Link> */}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* recent activites */}
{/* ____________________________________________My Groups_________________________________________________________ */}
        <div className="widget stick-widget">
          <h4 className="widget-title">My Groups</h4>
          <ul
            className="followers"
            id="scrollbar"
            style={{ overflowY: "scroll" }}
          >
            {groups
              .filter(function (ele) {
                if (ele.user_id === current_ID) {
                  return true; // skip
                }
                return false;
              })
              .map((element, index) => {
                return (
                  <li key={index}>
                    <figure>
                      <img
                        src={require(`../image/${element.group_image}`)}
                        alt=""
                      />
                    </figure>
                    <div className="friend-meta">
                      <h4>
                        <Link to={`/groups/singleGroup/${element.group_id}/show`} title>
                          {element.group_name}
                        </Link>
                      </h4>
                      {/* <Link to="#" title className="underline">Add Friend</Link> */}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* who's following */}
      </aside>
    </div>
  );
};

export default Sidebar;
