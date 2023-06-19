import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;
`;
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
