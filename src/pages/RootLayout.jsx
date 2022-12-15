// react bootstrap
import { Container, Row, Col} from "react-bootstrap";
//react router
import { Outlet } from "react-router-dom";
// Import components
import Header from "../components/Header";

import { useSelector } from 'react-redux';
import Edit from './Edit';


//=> component <=//
const RootLayout = () => {
  const {edit} = useSelector(state=>state.posts)
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
          {
            edit &&
           <Edit />
          }
          
        </Col>
      </Row>
    </Container>
  );
};

export default RootLayout;
