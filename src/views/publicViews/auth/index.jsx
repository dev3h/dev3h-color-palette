import { useState } from "react";
import styled from "styled-components";
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
  const [isRegister, setIsRegister] = useState(false);

  const moveForm = (isRegister) => {
    setIsRegister(isRegister);
  };
  return (
    <>
      {isRegister ? (
        <UserRegisterForm moveForm={moveForm} />
      ) : (
        <UserLoginForm moveForm={moveForm} />
      )}
    </>
  );
};

export default UserAuthView;
