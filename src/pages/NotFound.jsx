import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteError,useNavigate } from "react-router-dom";
const NotFound = () => {
   const error = useRouteError(); // for git router error type
   console.error(error);
   const navigate = useNavigate();

   // back on click
   const goBack =()=>{
    navigate("/", { replace: true });
   }

  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">
            <div>
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
              <Button variant="link" onClick={goBack}>
                Home
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
