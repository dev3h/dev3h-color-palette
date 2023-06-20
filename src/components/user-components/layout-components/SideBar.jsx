import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { appNavTree } from "../../../configs/NavigationConfig";

const StyledMenu = styled.div`
  display: flex;

  ${(props) => {
    return props.ismobile === "true"
      ? css`
          flex-direction: row;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
        `;
  }}
`;
const StyledMenuItem = styled(NavLink)`
  font-size: 16px;
  display: flex;
  ${(props) =>
    props.ismobile === "true"
      ? css`
          padding: 10px;
          flex-direction: column;
        `
      : css`
          padding: 0 10px;
          flex-direction: row;
        `};
  align-items: center;
  gap: 10px;

  transition: all 0.3s ease-out;
  border-radius: 10px;
  height: 42px;
  width: 100%;
  ${(props) =>
    props.ismobile === "false" &&
    css`
      &:hover {
        color: #000;
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}

  ${(props) => {
    return props.active === props.id
      ? css`
          color: #000;
          ${props.ismobile === "false" &&
          css`
            background-color: ${(props) => props.theme.backgrounds.active};
          `}
        `
      : css`
          color: ${(props) => props.theme.colors.gray};
        `;
  }}
`;

const SideBar = ({ isMobile }) => {
  const [current, setCurrent] = useState("new");

  // Hàm xử lý khi chọn một option trong menu
  const handleClick = (key) => {
    setCurrent(key);
  };

  return (
    <StyledMenu ismobile={isMobile.toString()}>
      {appNavTree.map((item) => (
        <StyledMenuItem
          onClick={() => handleClick(item.key)}
          active={current}
          id={item?.key}
          key={item.key}
          ismobile={isMobile.toString()}
          to={item.path}
        >
          {current === item.key ? item.iconFilled : item.iconOutlined}
          {item.title}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

SideBar.propTypes = {
  isMobile: PropTypes.bool,
};

export default SideBar;
