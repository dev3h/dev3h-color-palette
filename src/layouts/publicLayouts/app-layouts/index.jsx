import { Col, Row } from "antd";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import {
  AppHeader,
  SideBar,
} from "../../../components/user-components/layout-components";
import { Container } from "../../../components/user-components/shared-components";
import { useCheckMobileView } from "../../../hooks";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const StyledSidebar = styled(Col)`
  @media screen and (max-width: 576px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
  }
`;
const PublicLayout = () => {
  const isMobileView = useCheckMobileView();
  return (
    <div>
      <AppHeader />
      <div>
        <Container>
          <Wrapper>
            <Row gutter={24}>
              <StyledSidebar
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 4 }}
                lg={{ span: 3 }}
              >
                <SideBar isMobile={isMobileView} />
              </StyledSidebar>
              <Col
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 20 }}
                lg={{ span: 17 }}
              >
                <Outlet />
              </Col>
              <Col
                className="gutter-row"
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                lg={{ span: 4 }}
              >
                Right
              </Col>
            </Row>
          </Wrapper>
        </Container>
      </div>
    </div>
  );
};

export default PublicLayout;
