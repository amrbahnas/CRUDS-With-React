// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
//react router 
import { Outlet } from "react-router-dom";
// Import components
import Header from "../components/Header";

//=> component <=//
const RootLayout = () => {
  
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
};

export default RootLayout;
