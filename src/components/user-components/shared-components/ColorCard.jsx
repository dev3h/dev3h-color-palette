import { HeartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as fns from "../../../utils";
// import theme from "../../../configs/ThemeConfig";

const StyledColorCard = styled.div`
  width: 100%;
  height: 270px;
  /* border: 1px solid; */
  .palette {
    height: 80%;
  }
`;
const StylePaletteRow = styled.div`
  --height: calc(100% / 4);
  height: var(--height);
  background-color: ${(props) => `#${props?.color}`};
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover .palette-hex {
    display: inline-block;
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .palette-hex {
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    padding: 5px 10px;
    background-color: ${(props) => `#${props?.color}`};
    color: ${(props) => `#${props?.color}`};
    transition: all 0.3s ease-in-out;
    &::before {
      content: "${(props) => `#${props?.color}`}";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      transition: all 0.3s ease-out;
    }
  }
`;

const StyledPaletteAction = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  .palette-action--like {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid ${(props) => props?.theme?.colors?.ec};
    padding: 5px 14px;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props?.theme?.backgrounds?.hover};
    }
    .total-like {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const ColorCard = ({ palette }) => {
  const { colors, total_like, createdAt, _id, slug } = palette;
  const newColors = [];
  for (let i = 0; i < colors.length; i += 6) {
    const color = colors.slice(i, i + 6);
    newColors.push(color);
  }

  return (
    <StyledColorCard>
      <div className="palette">
        {newColors.map((color, index) => (
          <StylePaletteRow color={color} key={index}>
            <span
              className="palette-hex"
              onClick={() => fns.copyColor(color)}
            >{`#${color}`}</span>
          </StylePaletteRow>
        ))}
      </div>
      <StyledPaletteAction className="palette-action">
        <div className="palette-action--like">
          <HeartOutlined />
          <span className="total-like">{total_like}</span>
        </div>
        <span className="palette--created-at">{fns.formatDate(createdAt)}</span>
      </StyledPaletteAction>
    </StyledColorCard>
  );
};

ColorCard.propTypes = {
  palette: PropTypes.object.isRequired,
};

export default ColorCard;
