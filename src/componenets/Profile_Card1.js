import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import './Profile_Card1.css';
import { FcEditImage } from 'react-icons/fc';
import { FaRegEdit,FaRegSave } from 'react-icons/fa';
import { MdEditSquare } from "react-icons/md";



function Profile_Card1() {
    const [profileImage, setProfileImage] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(`${process.env.PUBLIC_URL}/image/Jim_Spiegel.jpg`);
    const [BackgroundImagePreview, setBackgroundImagePreview] = useState(null);
    const [username, setUsername] = useState('OUAQAR OUADIE');
    const [address, setAddress] = useState('Rabat, Morocco');
    const [userDetails, setUserDetails] = useState(null); // Nouveau state pour stocker les détails de l'utilisateur
    const userId = "65df9af9a8ec6b0a27c42c36";

    const [isEditing, setIsEditing] = useState({
        username: false,
       

      }); 
      const handleEditClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: true }));
      };
    
      const handleSaveClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: false }));
      };

      const [userData, setUserData] = useState({});

      useEffect(() => {
        // Charger les données utilisateur depuis le backend lors du montage du composant
        const fetchUserData = async () => {
          try {
            const userId = '65df9af9a8ec6b0a27c42c36';
            const response = await axios.get(`http://localhost:8080/e-social/users/id/${userId}`);
            setUserData(response.data); 
            setUsername(response.data.username);
         
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
      

    useEffect(() => {
      
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/e-social/users/${userId}`);
                setProfileImage(response.profileImage); 
                setBackgroundImage(response.backgroundImage); 
                console.log("user data :" ,response);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);
      useEffect(() => {
        setProfileImagePreview(userDetails?.profileImage);
        setBackgroundImagePreview(userDetails?.backgroundImage);
    }, [userDetails]);



    const handleProfileImageChange = (e) => {
        setProfileImage(e.target.files[0]);


       
        const reader = new FileReader();
        reader.onload = function (event) {
            setProfileImagePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    
    };

    const handleBackgroundImageChange = (e) => {
        setBackgroundImage(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = function(event) {
            setBackgroundImagePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);

    };

    const handleImageProfileUpload = () => {
        // Console log pour déboguer
        console.log('backgroundImage:', backgroundImage);
        console.log('profileImage:', profileImage);
    
        const formData = new FormData();
        formData.append('profileImage', profileImage);
    
        axios.put(`http://localhost:8080/e-social/users/${userId}/upload-profile-image`, formData)
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

    const handleUpdate = async (attribute, value) => {
        try {
          const userId = '65df9af9a8ec6b0a27c42c36';
          const response = await axios.put(`http://localhost:8080/e-social/users/${userId}`, {
            [attribute]: value,
          });
        } catch (error) {
            console.error(`Error updating ${attribute}:`, error);
          }
        };
        
    

    const handleImageBackgroundUpload = () => {
     
        console.log('backgroundImage:', backgroundImage);
    
        const formData1 = new FormData();
        formData1.append('backgroundImage', backgroundImage);
    
        axios.put(`http://localhost:8080/e-social/users/${userId}/upload-background-image`, formData1)
            .then((response) => {
                console.log('Images uploaded successfully:', response.data);
    
                setUserDetails(() => ({
                    backgroundImage: response.data.backgroundImage,
                }));
            })
            .catch((error) => {
                console.error('Error uploading images:', error);
            });
    };
    

    return (
        <div className="first_card">
            <div className="profile_back">
                <img src={BackgroundImagePreview} alt="background profile" />
                <label htmlFor="backgroundImageInput" className="edit-background">
                    <FcEditImage />
                </label>
                <input
                    type="file"
                    id="backgroundImageInput"
                    style={{ display: 'none' }}
                    onChange={handleBackgroundImageChange}
                    onClick={handleImageBackgroundUpload}

                />
            </div>
            <div className="profile_down">
                <img src={profileImagePreview} alt="profile" />
                <label htmlFor="profileImageInput" className="edit-profile">
                    <FaRegEdit />
                </label>
                <input
                    type="file"
                    id="profileImageInput"
                    style={{ display: 'none' }}
                    onClick={handleImageProfileUpload}
                    onChange={handleProfileImageChange}

                />
                <div className="d-flex justify-content-around Titles">
                    <h6>
                        <a href="#">About</a>
                    </h6>
                    <div className="Name d-flex justify-content-between ">
                    <div className="mt-2 d-flex justify-content-between info_part">
  <div className="info2">
    {isEditing.username ? (
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    ) : (
      <p className='username'>{username}</p>
    )}
  </div>
  {isEditing.username ? (
    <a className="save-icon mt-2 " onClick={() => { handleUpdate('username', username); handleSaveClick('username'); }}><FaRegSave className="save-username" />
    </a>
  ) : (
    <a className="edit-icon" onClick={() => handleEditClick('username')}>
      <MdEditSquare className="edit-icon icon-edit-username" />
    </a>
  )}
</div>
</div>

                                    <h6>
                                        <a className='friends-title' href="#">Friends</a>
                                    </h6>
                </div>
        </div>
        </div>

    );
}

export default Profile_Card1;
