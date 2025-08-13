import React from 'react';
import './Profile.css';

const ProfileCard = ({ name, description, imageSrc }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={imageSrc} alt={name} className="profile-image" />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-description">{description}</p>
        <div className="action-buttons">
          <button className="action-button">보고서</button>
          <button className="action-button">역사</button>
          <button className="action-button">수정</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;