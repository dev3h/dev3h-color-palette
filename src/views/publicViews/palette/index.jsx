import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";

import * as apis from "../../../services";
import { PaletteCard } from "../../../components/user-components/shared-components";

const Palette = () => {
  const [palettes, setPalettes] = useState([]);
  const [params] = useSearchParams();

  useEffect(() => {
    let urlParams = [];
    for (const [key, value] of params.entries()) {
      urlParams.push({ key, value });
    }
    const queries = {};
    for (let i of params) queries[i[0]] = i[1];

    const getPalettes = async () => {
      const response = await apis.getPaletteData(queries);
      if (response?.success) setPalettes(response?.data);
    };
    getPalettes();
  }, [params]);

  return (
    <Row gutter={24}>
      {palettes &&
        palettes?.map((palette) => (
          <Col
            key={palette?._id}
            className="gutter-row"
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={6}
          >
            <PaletteCard palette={palette} />
          </Col>
        ))}
    </Row>
  );
};

export default Palette;
