// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import components
import Header from "../components/Header";

//react router 
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container>
      <Header/>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default RootLayout;
