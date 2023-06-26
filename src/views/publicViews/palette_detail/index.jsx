import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Space } from "antd";

import { getPaletteData } from "../../../services";
import { ColorCard, Tags } from "../../../components/user-components/shared-components";
import * as fns from "../../../utils/";

const StyledPaletteDetail = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${(props) => props?.theme?.colors?.ec};
  .palette-wrapper {
    width: 50%;
    margin: 0 auto;
    .palette-info {
      width: 100%;
      border-collapse: collapse;

      tr {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        &:nth-child(2) {
          text-transform: uppercase;
        }
        &:not(:last-child) {
          border-bottom: 1px solid ${(props) => props?.theme?.colors?.ec};
        }
        &:not(:first-child) td {
          border-radius: 5px;
          transition: all 0.3s ease-out;
          cursor: pointer;
          &:hover {
            background-color: ${(props) => props?.theme?.colors?.ec};
          }
        }
        td {
          padding: 10px;
        }
      }
    }
    .tags-wrapper {
      justify-content: center;
      width: 100%;
      margin: 25px 0;
    }
  }
`;

const StyleColorItem = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => `#${props?.color}`};
  border-radius: 10000px;
`;

const PaletteDetail = () => {
  const { slug } = useParams();
  const [palette, setPalette] = useState({});
  const [colors, setColors] = useState([]);
  const [rgbColors, setRgbColors] = useState([]);
  useEffect(() => {
    const getPaletteDetail = async () => {
      const response = await getPaletteData({ slug });
      if (response?.success) {
        setPalette(response?.data[0]);
        const newColors = fns.splitColorString(response?.data[0]?.colors);
        const rgbColors = newColors?.map((color) => fns.hex2rgb(color));
        if (newColors) setColors(newColors);
        if (rgbColors) setRgbColors(rgbColors);
      }
    };
    getPaletteDetail();
  }, [slug]);
  console.log(palette);

  return (
    <StyledPaletteDetail>
      <div className="palette-wrapper">
        <ColorCard palette={palette} />
        <table className="palette-info">
          <tr>
            {colors &&
              colors?.map((color, index) => (
                <td key={index}>
                  <StyleColorItem color={color} />
                </td>
              ))}
          </tr>
          <tr>
            {colors &&
              colors?.map((color, index) => (
                <td key={index} onClick={() => fns.copyColor(color)}>
                  <div className="color" style={{ backgroundColor: `#${color}` }}></div>
                  <div className="color-code">{`#${color}`}</div>
                </td>
              ))}
          </tr>

          <tr>
            {rgbColors &&
              rgbColors?.map((rgbColor, index) => (
                <td key={index} onClick={() => fns.copyColor(rgbColor)}>
                  {rgbColor}
                </td>
              ))}
          </tr>
        </table>
        <Space wrap className="tags-wrapper">
          <Tags data={palette?.tags?.collectionTags} />
          <Tags data={palette?.tags?.colorTags} />
        </Space>
      </div>
    </StyledPaletteDetail>
  );
};

export default PaletteDetail;
