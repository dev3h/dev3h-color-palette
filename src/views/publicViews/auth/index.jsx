import { useLocation } from "react-router-dom";
import styled from "styled-components";
import path from "../../../utils/path";
import UserRegisterForm from "./register-form";
import UserLoginForm from "./login-form";

export const StyledWrapper = styled.div`
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
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
      {location.pathname === `${path?.USERAUTH}${path?.REGISTER}` && <UserRegisterForm />}
      {location.pathname === `${path?.USERAUTH}${path?.LOGIN}` && <UserLoginForm />}
    </>
  );
};

export default UserAuthView;
