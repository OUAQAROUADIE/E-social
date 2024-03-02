import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import back from '../images/PR1497_FamilyRoadTrip_Banner.jpg';

import '../App.css';
import './Profile_Card1.css';
import { FcEditImage } from 'react-icons/fc';
import { FaRegEdit } from 'react-icons/fa';

function Profile_Card1() {
    const [profileImage, setProfileImage] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [username, setUsername] = useState('OUAQAR OUADIE');
    const [address, setAddress] = useState('Rabat, Morocco');
    const [userDetails, setUserDetails] = useState(null); // Nouveau state pour stocker les détails de l'utilisateur
    const userId = "65df9af9a8ec6b0a27c42c36";
    const handleProfileImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleBackgroundImageChange = (e) => {
        setBackgroundImage(e.target.files[0]);
    };

    const handleImageUpload = () => {
        // Console log pour déboguer
        console.log('backgroundImage:', backgroundImage);
        console.log('profileImage:', profileImage);
    
        const formData = new FormData();
        formData.append('profileImage', profileImage);
        formData.append('backgroundImage', backgroundImage);
    
        axios.put(`http://localhost:3000/e-social/users/{userId}/upload-profile-image`, formData)
            .then((response) => {
                console.log('Images uploaded successfully:', response.data);
    
                setUserDetails(() => ({
                    profileImage: response.data.profileImage,
                }));
            })
            .catch((error) => {
                console.error('Error uploading images:', error);
            });
    };
    

    return (
        <div className="first_card">
            <div className="profile_back">
                <img src={backgroundImage} alt="background profile" />
                <label htmlFor="backgroundImageInput" className="edit-background">
                    <FcEditImage />
                </label>
                <input
                    type="file"
                    id="backgroundImageInput"
                    style={{ display: 'none' }}
                    onChange={handleBackgroundImageChange}
                    onClick={handleImageUpload}
                />
            </div>
            <div className="profile_down">
                <img src={profileImage} alt="profile" />
                <label htmlFor="profileImageInput" className="edit-profile">
                    <FaRegEdit />
                </label>
                <input
                    type="file"
                    id="profileImageInput"
                    style={{ display: 'none' }}
                    onClick={handleImageUpload}
                    onChange={handleProfileImageChange}
                />
                <div className="d-flex justify-content-around Titles">
                    <h6>
                        <a href="#">About</a>
                    </h6>
                    <div className="Name">
                        <h6>{username}</h6>
                        <span>{address}</span>
                    </div>
                    <h6>
                        <a href="#">Friends</a>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Profile_Card1;
