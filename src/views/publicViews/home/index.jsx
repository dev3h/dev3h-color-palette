import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";

import path from "../../../utils/path";
import * as apis from "../../../services";
import { PaletteCard } from "../../../components/user-components/shared-components";

const Home = () => {
  const location = useLocation();
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
      if (location.pathname === path?.HOME) {
        const response = await apis.getPaletteData();
        if (response?.success) setPalettes(response?.data);
      } else if (location.pathname === path.POPULAR) {
        const params = {
          "total_like[gt]": 1,
        };
        const response = await apis.getPaletteData(params);
        if (response?.success) setPalettes(response?.data);
      }
    };
    getPalettes();
  }, [location.pathname, params]);

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

export default Home;
