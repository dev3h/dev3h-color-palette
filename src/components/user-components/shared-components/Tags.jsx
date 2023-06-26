import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Space } from "antd";

const StyledButtonTag = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props?.theme?.colors?.ec};
  gap: 5px;
  height: 32px;
  padding: 0 12px;
  border-radius: 50px;
  transition: all 0.3s ease-out;
  .name {
    opacity: 0.8;
    color: #000;
    transition: all 0.3s ease-out;
  }
  &:hover {
    background-color: ${(props) => props?.theme?.backgrounds?.hover};
  }
  &:hover .name {
    opacity: 1;
  }
`;

const StyledHex = styled.span`
  width: 13px;
  height: 13px;
  display: inline-block;
  background-color: ${(props) => `#${props?.hex}`};
  border-radius: 10000px;
`;

const Tags = ({ data }) => {
  return (
    <Space wrap>
      {data &&
        data?.map((item) => (
          <StyledButtonTag
            to={`palette/${item?.slug}`}
            className="button"
            key={item?._id}
          >
            {item?.hex && <StyledHex hex={item?.hex} />}
            <span className="name">{item?.name}</span>
          </StyledButtonTag>
        ))}
    </Space>
  );
};
Tags.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tags;
