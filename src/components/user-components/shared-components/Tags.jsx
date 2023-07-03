import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Space, Checkbox } from "antd";

import path from "../../../utils/path";

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox {
    display: none;
  }
`;

const StyledButtonTag = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props?.theme?.colors?.ec};
  gap: 5px;
  height: 32px;
  padding: 0 12px;
  border-radius: 50px;
  transition: all 0.3s ease-out;
  background-color: ${(props) =>
    props?.isChecked ? props?.theme?.backgrounds?.hover : "#fff"};
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

const Tags = ({ data, ttag }) => {
  const navigate = useNavigate();
  const [checkedTags, setCheckedTags] = useState([]);
  const [tagType, setTagType] = useState("");

  useEffect(() => {
    if (checkedTags.length > 0) {
      const searchParams = new URLSearchParams();

      if (tagType === "colorTags") {
        searchParams.set("colorTags", checkedTags.join(","));
      } else if (tagType === "collectionTags") {
        searchParams.set("collectionTags", checkedTags.join(","));
      }

      navigate(`${path.PALETTE}?${searchParams.toString()}`);
    }
  }, [checkedTags, navigate, tagType]);

  const handleCheck = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedTags((prev) => [...prev, value]);
    } else {
      setCheckedTags((prev) => prev.filter((item) => item !== value));
    }
    setTagType(e.target?.ttag);
  };

  return (
    <Space wrap>
      {data &&
        data?.map((item) => (
          <StyledCheckbox
            key={item?._id}
            onChange={(e) => handleCheck(e)}
            value={item?.slug}
            checked={checkedTags.includes(item?.slug)}
            ttag={ttag}
          >
            <StyledButtonTag
              isChecked={checkedTags.includes(item?.slug)}
              className="button"
            >
              {item?.hex && <StyledHex hex={item?.hex} />}
              <span className="name">{item?.name}</span>
            </StyledButtonTag>
          </StyledCheckbox>
        ))}
    </Space>
  );
};
Tags.propTypes = {
  data: PropTypes.array.isRequired,
  ttag: PropTypes.string.isRequired,
};

export default Tags;
