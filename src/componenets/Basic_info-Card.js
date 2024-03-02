import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {MdEdit} from "react-icons/md";
import './Basic_info-Card.css'
function Basic_info_Card() {
    const [isEditing, setIsEditing] = useState({
        gender: false,
        birthDate: false,
        birthYear: false,
        hometown: false,
        maritalStatus: false,
        address: false

        // Ajoutez d'autres champs ici
      });    const [gender, setGender] = useState('Male');
    const [birthDate, setBirthDate] = useState('December 9');
    const [birthYear, setBirthYear] = useState('2002');
    const [hometown, setHometown] = useState('From Ouazzane');
    const [maritalStatus, setMaritalStatus] = useState('Married');
    const [address, setAddress] = useState('Av. Allal Al Fassi');
  
    const handleEditClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: true }));
      };
    
      const handleSaveClick = (field) => {
        setIsEditing((prevIsEditing) => ({ ...prevIsEditing, [field]: false }));
      };
    
      const handleUpdate = async (attribute, value) => {
        try {
          const userId = '65df9af9a8ec6b0a27c42c36';
          const response = await axios.put(`http://localhost:8080/e-social/users/${userId}`, {
            [attribute]: value,
          });
    
          // Mettez à jour l'état local en fonction de la réponse du serveur
          switch (attribute) {
            case 'gender':
              setGender(value);
              break;
            case 'birthDate':
              setBirthDate(value);
              break;
            case 'birthYear':
              setBirthYear(value);
              break;
            case 'hometown':
              setHometown(value);
              break;
            case 'maritalStatus':
              setMaritalStatus(value);
              break;
              case 'address':
                setAddress(value);
                break;
            default:
              break;
          }
        } catch (error) {
          console.error(`Error updating ${attribute}:`, error);
        }
      };
    
    return (
        <div className="Basic-info p-3">
            <h5>Basic Info</h5>
            <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.gender ? (
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          ) : (
            <h6>{gender}</h6>
          )}

          <span>Gender</span>
        </div>
        {isEditing.gender ? (
          <a className="save-icon" onClick={() => { handleUpdate('gender', gender); handleSaveClick('gender'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('gender')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.birthDate ? (
            <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          ) : (
            <h6>{birthDate}</h6>
          )}

          <span>Birth Date</span>
        </div>
        {isEditing.birthDate ? (
          <a className="save-icon" onClick={() => { handleUpdate('birthDate', birthDate); handleSaveClick('birthDate'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('birthDate')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.birthYear ? (
            <input type="text" value={birthDate} onChange={(e) => setBirthYear(e.target.value)} />
          ) : (
            <h6>{birthYear}</h6>
          )}

          <span>Birth Year</span>
        </div>
        {isEditing.birthYear ? (
          <a className="save-icon" onClick={() => { handleUpdate('birthYear', birthYear); handleSaveClick('birthYear'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('birthYear')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.hometown ? (
            <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} />
          ) : (
            <h6>{hometown}</h6>
          )}

          <span>Hometown</span>
        </div>
        {isEditing.hometown ? (
          <a className="save-icon" onClick={() => { handleUpdate('hometown', hometown); handleSaveClick('hometown'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('hometown')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.maritalStatus ? (
            <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
          ) : (
            <h6>{maritalStatus}</h6>
          )}

          <span>Marital Status</span>
        </div>
        {isEditing.maritalStatus ? (
          <a className="save-icon" onClick={() => { handleUpdate('maritalStatus', maritalStatus); handleSaveClick('maritalStatus'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('maritalStatus')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
      <div className="mt-4 d-flex justify-content-between info_part">
        <div className="info">
          {isEditing.address ? (
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          ) : (
            <h6>{address}</h6>
          )}

          <span>Address</span>
        </div>
        {isEditing.address ? (
          <a className="save-icon" onClick={() => { handleUpdate('address', address); handleSaveClick('address'); }}>Save</a>
        ) : (
          <a className="edit-icon" onClick={() => handleEditClick('address')}>
            <MdEdit className="edit-icon" />
          </a>
        )}
      </div>
        </div>


    );
}
export default Basic_info_Card;
