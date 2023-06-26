import { Card } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledUserAuth = styled.div`
  min-height: 100vh;
  .auth-wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    width: 100%;
    padding: 40px 20px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;

const UserAuthLayout = () => {
  return (
    <StyledUserAuth>
      <div className="auth-wrapper">
        <Outlet />
      </div>
    </StyledUserAuth>
  );
};

export default UserAuthLayout;
