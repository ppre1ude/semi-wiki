import { useState } from 'react';
import './Mainpage.css';
import Image from './semicolon.png';

const Mainpage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // 드롭다운 메뉴를 클릭하면 열거나 닫는 함수
  const handleDropdownToggle = (id: any) => {
    // 이미 열려있는 메뉴를 다시 클릭하면 닫고, 그렇지 않으면 해당 메뉴를 엽니다.
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="main-page-container">
      <div className="title">
        <h1>Semicolon;</h1>
        <div className="btn">
          <button id="btn1">보고서</button>
          <button id="btn2">역사</button>
          <button id="btn2">수정</button>
        </div>
      </div>

      <hr></hr>

      <div className="mainpage">
        <div className="img">
          <img src={Image} alt="이미지"></img>
        </div>
        <div className="section">
          <h2>Semicolon;</h2>
          <p>세미콜론</p>
        </div>
      </div>

      <div id="dropdown-menu-container">
        <div className="dropdown-item">
          <button className="bar dropdown-toggle" onClick={() => handleDropdownToggle('overview')}>
            개요
            <span className={`arrow ${openDropdown === 'overview' ? 'up' : 'down'}`}>
              {openDropdown === 'overview' ? '▲' : '▼'}
            </span>
          </button>
          {openDropdown === 'overview' && (
            <div className="dropdown-content">
              <p>
                Semicolon;의 개요
              </p>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <button className="bar dropdown-toggle" onClick={() => handleDropdownToggle('achievements')}>
            업적
            <span className={`arrow ${openDropdown === 'achievements' ? 'up' : 'down'}`}>
              {openDropdown === 'achievements' ? '▲' : '▼'}
            </span>
          </button>
          {openDropdown === 'achievements' && (
            <div className="dropdown-content">
              <p>
                Semicolon;의 업적
              </p>
            </div>
          )}
        </div>

        <div className="dropdown-item">
          <button className="bar dropdown-toggle" onClick={() => handleDropdownToggle('controversies')}>
            논란 및 사건사고
            <span className={`arrow ${openDropdown === 'controversies' ? 'up' : 'down'}`}>
              {openDropdown === 'controversies' ? '▲' : '▼'}
            </span>
          </button>
          {openDropdown === 'controversies' && (
            <div className="dropdown-content">
              <p>
                Semicolon;의 논란 및 사건 사고
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Mainpage;
