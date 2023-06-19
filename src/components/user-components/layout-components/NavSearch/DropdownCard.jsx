import styled from "styled-components";
import { Divider } from "antd";

const StyledDropdownCard = styled.div`
  position: absolute;
  z-index: 100;
  background-color: lightblue;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledDropdownItem = styled.div`
  padding: 22px;
`;

const DropdownItem = ({ title }) => {
  return (
    <StyledDropdownItem>
      <h4>{title}</h4>
    </StyledDropdownItem>
  );
};

const DropdownCard = () => {
  return (
    <StyledDropdownCard>
      <DropdownItem title="Colors" />
      <Divider />
      <DropdownItem title="Collections" />
    </StyledDropdownCard>
  );
};

export default DropdownCard;
