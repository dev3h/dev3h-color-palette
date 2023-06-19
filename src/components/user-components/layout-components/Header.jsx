import styled from "styled-components";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import Container from "../shared-components/Container";
import path from "../../../utils/path";

const StyledHeader = styled.header`
  padding: 10px 0;
`;

const AppHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <Row gutter={24}>
          <Col className="gutter-row" span={4}>
            <Link to={path.HOME}>
              <img src="https://picsum.photos/50/50" alt="" />
            </Link>
          </Col>
          <Col className="gutter-row" span={16}>
            <NavSearch />
          </Col>
          <Col className="gutter-row" span={4}>
            Select
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default AppHeader;