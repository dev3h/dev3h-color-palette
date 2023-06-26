import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "antd";

import { getColorTags, getCollectionTags } from "../../../../redux/actions/app-actions";
import { Tags } from "../../shared-components";

const StyledDropdownCard = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  border: 1px solid ${(props) => props?.theme?.colors?.ec};
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  .title {
    margin-bottom: 10px;
  }
`;

const StyledDropdownItem = styled.div`
  padding: 22px;
`;

const DropdownItem = ({ title, data }) => {
  return (
    <StyledDropdownItem>
      <h4 className="title">{title}</h4>
      <Tags data={data} />
    </StyledDropdownItem>
  );
};

const DropdownCard = () => {
  const dispatch = useDispatch();
  const { colorTags } = useSelector((state) => state?.colorTags);
  const { collectionTags } = useSelector((state) => state?.collectionTags);

  useEffect(() => {
    dispatch(getColorTags());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCollectionTags());
  }, [dispatch]);

  return (
    <StyledDropdownCard>
      <DropdownItem title="Colors" data={colorTags} />
      <Divider />
      <DropdownItem title="Collections" data={collectionTags} />
    </StyledDropdownCard>
  );
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DropdownCard;
