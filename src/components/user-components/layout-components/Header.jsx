import styled from "styled-components";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import NavSearch from "./NavSearch";
import Container from "../shared-components/Container";
import path from "../../../utils/path";

const StyledHeader = styled.header`
  padding: 10px 0;
  .row {
    align-items: center;
  }
  .auth-icon {
    font-size: 30px;
    border: 1px solid ${(props) => props?.theme?.colors?.ec};
    border-radius: 10000px;
    overflow: hidden;
    color: ${(props) => props?.theme?.colors?.gray};
  }
`;

const AppHeader = () => {
  return (
    <StyledHeader>
      <Container>
        <Row gutter={24} className="row">
          <Col
            className="gutter-row"
            xs={{ span: 3 }}
            sm={{ span: 3 }}
            md={{ span: 4 }}
            lg={{ span: 3 }}
          >
            <Link to={path.HOME}>
              <img src="https://picsum.photos/50/50" alt="" />
            </Link>
          </Col>
          <Col
            className="gutter-row"
            xs={{ span: 21 }}
            sm={{ span: 21 }}
            md={{ span: 20 }}
            lg={{ span: 17 }}
          >
            <NavSearch />
          </Col>
          <Col className="gutter-row" xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 4 }}>
            <Link to={path.USERAUTH}>
              <UserOutlined className="auth-icon" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default AppHeader;
