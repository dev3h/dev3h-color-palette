import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  .reset-container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .reset-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .reset-header-title {
        flex: 1;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
    .reset-form {
      padding: 0px 50px;
    }
    .input-space {
      width: 100%;
    }
    .button-submit {
      width: 100%;
      text-transform: uppercase;
    }
  }
`;

const ResetPasswordLayout = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="reset-container">{children}</div>
    </StyledWrapper>
  );
};

ResetPasswordLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResetPasswordLayout;
