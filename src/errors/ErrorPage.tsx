import './ErrorPage.css';
import Image from '@/assets/warning.png';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <img src={Image} alt="이미지"></img>
            <div className="title">
                <h1>잘못된 접근입니다.</h1>
            </div>
            <div className="detail">
                <p>페이지를 찾을 수 없어요. 주소 또는 검색어를 다시 한 번 확인 해 주세요.</p>
            </div>
            <br></br>
            <br></br>
            <a href="/"><button id="home">메인 페이지로 이동</button></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" onClick={() => history.back()}><button id="back">이전 페이지로 이동</button></a>
        </div>
    )
};

export default ErrorPage;