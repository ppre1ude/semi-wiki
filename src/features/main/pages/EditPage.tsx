import './EditPage.css';

const EditPage = () => {
    return (
        <div className="main-page-container">
            <div className="title">
                <h1>Semicolon;</h1>
            </div>

            <hr></hr>

            <div className="editbox">
                <input type="text"></input>
            </div>

            <br></br>
            <br></br>

            <div className="summary">
                요약
                <input type="text"></input>
            </div>

            <br></br>
            <br></br>

            <div className="editbtn">
                <button id="editbtn">수정하기</button>
            </div>

        </div>
    );
};

export default EditPage;