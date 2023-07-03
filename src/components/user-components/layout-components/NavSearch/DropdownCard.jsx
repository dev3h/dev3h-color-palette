import { useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  display: ${(props) => (props?.isClick ? "block" : "none")};
  transition: all 0.3s ease-out;
  .title {
    margin-bottom: 10px;
  }
`;

const StyledDropdownItem = styled.div`
  padding: 20px;
`;

const DropdownItem = ({ title, data, ttag = "" }) => {
  return (
    <StyledDropdownItem onClick={(e) => e.stopPropagation()}>
      <h4 className="title">{title}</h4>
      <Tags data={data} ttag={ttag} />
    </StyledDropdownItem>
  );
};

const DropdownCard = forwardRef(({ handleDropdownClick, isClick }, ref) => {
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
    <StyledDropdownCard
      ref={ref}
      className="dropdown-card"
      onClick={(e) => {
        e.stopPropagation();
        handleDropdownClick(e);
      }}
      isClick={isClick}
    >
      <DropdownItem title="Colors" data={colorTags} ttag="colorTags" />
      <Divider />
      <DropdownItem title="Collections" data={collectionTags} ttag="collectionTags" />
    </StyledDropdownCard>
  );
});

DropdownCard.propTypes = {
  handleDropdownClick: PropTypes.func.isRequired,
  isClick: PropTypes.bool.isRequired,
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  ttag: PropTypes.string.isRequired,
};

export default DropdownCard;
