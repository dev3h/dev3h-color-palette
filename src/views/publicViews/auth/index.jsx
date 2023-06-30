import { useLocation } from "react-router-dom";
import styled from "styled-components";
import path from "../../../utils/path";
import UserRegisterForm from "./register-form";
import UserLoginForm from "./login-form";

export const StyledWrapper = styled.div`
  .form-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .header-title {
      flex: 1;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .input-space {
    width: 100%;
  }
  .button-submit {
    width: 100%;
    text-transform: uppercase;
  }
  .action {
    display: flex;
    justify-content: space-between;
  }
`;

const UserAuthView = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === path?.REGISTER && <UserRegisterForm />}
      {location.pathname === path?.LOGIN && <UserLoginForm />}
    </>
  );
};

export default UserAuthView;
