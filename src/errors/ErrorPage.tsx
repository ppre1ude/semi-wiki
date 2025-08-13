import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <div className="title">
                <h1>404 Not Found</h1>
            </div>
            <div className="detail">
                <p>페이지를 찾을 수 없어요.</p>
            </div>
        </div>
    )
};

export default ErrorPage;