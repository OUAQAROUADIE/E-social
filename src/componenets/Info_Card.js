import React from 'react';
import {MdEdit} from "react-icons/md";
import './Info_Card.css'
function Info_Card() {
    return (
        <div className=" global-info">
            <div className=" mt-3 d-flex justify-content-between info-part ">
                    <h6 className="font-weight-bold" >Phone Number</h6>
                    <span>+212 637541024</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />
            <div className="mt-3 d-flex justify-content-between info-part" >
                    <h6>Email</h6>
                    <span>Ouaqauarouadie@gmail.com</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part ">
                    <h6>Work and Education</h6>
                    <span>Student at INPT</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part">
                    <h6>WebSite</h6>
                    <span>site.com</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part ">
                    <h6>About you</h6>
                    <span className="w-50 m-lg-2">Write some details about yourself Write some details about yourself Write some details about yourself Write some details about yourself</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
            <hr style={{ width: '94%', color:'#717171',marginLeft:'2%', marginTop:'1%' }} />

            <div className="mt-3 d-flex justify-content-between info-part">
                    <h6>Favourite</h6>
                    <span className="w-50 m-lg-2">Write some details about yourself Write some details about yourself Write some details about yourself</span>
                <a className="edit-icon"><MdEdit className="edit-icon" /></a>
            </div>
        </div>


    );
}
export default Info_Card;
