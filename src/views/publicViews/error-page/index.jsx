import { useRouteError } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledWrapper, { errorPageTheme } from "./style-error-page";
import path from "../../../utils/path";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(path.HOME);
  };
  return (
    <ThemeProvider theme={errorPageTheme}>
      <StyledWrapper>
        <div className="error">
          <h1 className="code">{error.status}</h1>
          <h2 className="des">{error.statusText || error.message}</h2>
        </div>
        <button className="back-to-home" onClick={handleBackToHome}>
          Back to home
        </button>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default ErrorPage;
