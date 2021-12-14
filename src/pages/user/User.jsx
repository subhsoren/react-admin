import React from 'react';
import './User.css';
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                  <button className="userAddButton">Create</button>
                </Link>
                
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Kate Marie</span>
                            <span className="userShowUserTitle">Artist</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">katemarie12</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">07.08.1996</span>
                        </div>
                         <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">7234678671</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">katemarie12@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit </span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="katemarie12" className="userUpdateInput" />
                            </div>
                             <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Kate Marie" className="userUpdateInput" />
                            </div>
                             <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="katemarie12@gmail.com" className="userUpdateInput" />
                            </div>
                             <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="7234678671" className="userUpdateInput" />
                            </div>
                             <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/8942523/pexels-photo-8942523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userUpdateImg" />
                                <label htmlFor="file"> <Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display: 'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                  
                </div>
            </div>
            
        </div>
    )
}

export default User
