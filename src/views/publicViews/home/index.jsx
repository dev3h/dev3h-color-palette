import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "antd";

import { getPalettes } from "../../../redux/actions/app-actions";
import { ColorCard } from "../../../components/user-components/shared-components";

const Home = () => {
  const dispatch = useDispatch();
  const { palettes } = useSelector((state) => state?.palettes);

  useEffect(() => {
    dispatch(getPalettes());
  }, [dispatch]);
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
            <ColorCard palette={palette} />
          </Col>
        ))}
    </Row>
  );
};

export default Home;
