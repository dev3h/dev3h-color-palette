import { Card } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledUserAuth = styled.div`
  min-height: 100vh;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    .auth-wrapper {
      max-width: 1000px;
      width: 100%;
      margin: auto;
      padding: 40px 20px;
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }
`;

const UserAuthLayout = () => {
  return (
    <StyledUserAuth>
      <div className="flex">
        <div className="auth-wrapper">
          <Outlet />
        </div>
      </div>
    </StyledUserAuth>
  );
};

export default UserAuthLayout;
