import React, { useState } from 'react';
import './ContentTabs.css';

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState('개요');

  const renderContent = () => {
    switch (activeTab) {
      case '개요':
        return <div>최재원의 개요에 대한 내용이 여기에 들어갑니다.</div>;
      case '업적':
        return <div>최재원의 업적에 대한 내용이 여기에 들어갑니다.</div>;
      case '논란 및 사건 사고':
        return <div>최재원의 논란 및 사건 사고에 대한 내용이 여기에 들어갑니다.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="content-tabs-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === '개요' ? 'active' : ''}`}
          onClick={() => setActiveTab('개요')}
        >
          개요
        </button>
        <button
          className={`tab-button ${activeTab === '업적' ? 'active' : ''}`}
          onClick={() => setActiveTab('업적')}
        >
          업적
        </button>
        <button
          className={`tab-button ${activeTab === '논란 및 사건 사고' ? 'active' : ''}`}
          onClick={() => setActiveTab('논란 및 사건 사고')}
        >
          논란 및 사건 사고
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default ContentTabs;