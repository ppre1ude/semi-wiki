import './App.css';
import Image from './semicolon.png';

const App = () => {
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

      <div id="Overview">
        <div id="bar">개요</div>
        <div id="bar">업적</div>
        <div id="bar">논란 및 사건사고</div>
      </div>
    </div>
  );
};

export default App;
