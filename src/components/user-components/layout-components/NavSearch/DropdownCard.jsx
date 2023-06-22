import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider } from "antd";

// import { getColorTagData } from "../../../../services/ColorTagService";
import { getCollectionTagData } from "../../../../services/CollectionTagService";
import { getColorTags } from "../../../../redux/actions/app-actions";

const StyledDropdownCard = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  border: 1px solid #ececec;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .title {
    margin-bottom: 10px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    .button {
      display: flex;
      align-items: center;
      border: 1px solid ${(props) => props?.theme?.colors?.gray};
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
    }
  }
`;

const StyledDropdownItem = styled.div`
  padding: 22px;
`;
const StyledHex = styled.span`
  width: 13px;
  height: 13px;
  display: inline-block;
  background-color: ${(props) => `#${props?.hex}`};
  border-radius: 10000px;
`;
const DropdownItem = ({ title, data }) => {
  return (
    <StyledDropdownItem>
      <h4 className="title">{title}</h4>
      <div className="wrapper">
        {data &&
          data?.map((item) => (
            <Link to={`palette/${item?.slug}`} className="button" key={item?._id}>
              {item?.hex && <StyledHex hex={item?.hex} />}
              <span className="name">{item?.name}</span>
            </Link>
          ))}
      </div>
    </StyledDropdownItem>
  );
};

const DropdownCard = () => {
  const dispatch = useDispatch();
  const { colorTags } = useSelector((state) => state?.colorTags);

  const [collectionTags, setCollectionTags] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await getColorTagData();

  //       if (response?.success) {
  //         setColorTags(response?.data);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   getData();
  // }, []);
  useEffect(() => {
    dispatch(getColorTags());
  }, [dispatch]);
  console.log("colorTags", colorTags);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCollectionTagData();

        if (response?.success) {
          setCollectionTags(response?.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getData();
  }, []);

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
