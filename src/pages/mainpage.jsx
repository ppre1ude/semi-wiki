import React from 'react';
import Profile from './Profile';
import ContentTabs from './ContentTabs';
import './MainPage.css';

const MainPage = () => {
  const profileData = {
    name: "최재원",
    description: "최선을 다한 한화의 오늘 경기는 재 역전을 당하여 원하는 승리를 놓치고 말았습니다.\n",
    imageSrc: ""
  };

  return (
    <div className="main-page-container">
      <div className="main-content">
        <Profile {...profileData} />
        <ContentTabs />
      </div>
    </div>
  );
};

export default mainpage;