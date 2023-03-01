

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Groups from './pages/groups';
import SingleGroup from './pages/singleGroup';
import Profile from './pages/profile'
import EditProfile from './pages/editProfile';
import Users from './pages/users';
import CreateGroup from './pages/createGroup';
import Friends from './pages/friends';
import Nav from './components/nav';

function App() {
  return (
    <Routes>
    <Route path="/home" element={ <Home/> } />
    <Route path="/Allusers" element={ <Users/> } />
    <Route path="/" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/groups/singleGroup/:id/show" element={<SingleGroup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/profile/editProfile/:id/edit" element={<EditProfile/>}/>
    <Route path="/createGroup" element={<CreateGroup/>}/>

    <Route path="/friends" element={ <Friends/> } />

    <Route path="/nav" element={<Nav/>}/>


  </Routes>
  );
}

export default App;
