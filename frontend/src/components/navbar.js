import React, { useState } from 'react';
import { BsBellFill } from 'react-icons/bs'


const Navbar = () => {



    return (
        <div className="topbar stick">
            <div className="logo">
                <a title href="newsfeed.html"><img src="images/tag2.png" alt="" style={{marginTop:'-25px'}}/></a>
            </div>

            <div className="top-area">


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <ul className="setting-area">


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <BsBellFill style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}}/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-comment" style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}} />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                    <div className="user-img">

                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img src="images/resources/admin.jpg" alt="" style={{ borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}}/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </li>


                </ul>
              
            </div>


        </div>

    );
}

export default Navbar;
