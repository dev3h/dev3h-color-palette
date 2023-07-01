import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Col, Row } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

import NavSearch from "./NavSearch";
import Container from "../shared-components/Container";
import path from "../../../utils/path";
import { getCurrentLogin } from "../../../redux/actions";
import { logout } from "../../../redux/actions";

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
  const dispatch = useDispatch();
  const { isLogin, current } = useSelector((state) => state?.user);
  useEffect(() => {
    if (isLogin) dispatch(getCurrentLogin());
  }, [dispatch, isLogin]);
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
            {current ? (
              <div style={{ display: "flex", gap: "5px" }}>
                <h3>{current?.displayname}</h3>
                <h3 onClick={() => dispatch(logout())}>
                  <LogoutOutlined />
                </h3>
              </div>
            ) : (
              <Link to={path?.LOGIN}>
                <UserOutlined className="auth-icon" />
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default AppHeader;
