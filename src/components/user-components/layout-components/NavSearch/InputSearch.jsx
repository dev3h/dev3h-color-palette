import React from "react";
import styled, { css } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const StyledInputSearch = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 50px;
  position: relative;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 1px 2px 1px 34px;
  transition: all 0.3s ease-out;
  ${(props) =>
    props.isfocus === "true" &&
    css`
      padding-left: 10px;
    `}
  &:focus {
    outline: none;
    ${(props) =>
      props.isfocus === "true" &&
      css`
        padding-left: 10px;
      `}
  }
`;

const StyledSearchIcon = styled(SearchOutlined)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  transition: all 0.3s ease-out;
  ${(props) =>
    props.isfocus === "true" &&
    css`
      display: none;
    `}
`;

const InputSearch = ({ handleInputFocus, handleInputBlur, isFocus }) => {
  return (
    <StyledInputSearch>
      <StyledSearchIcon isfocus={isFocus.toString()} />
      <StyledInput
        placeholder="Search palettes"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isfocus={isFocus.toString()}
      />
    </StyledInputSearch>
  );
};

export default InputSearch;
