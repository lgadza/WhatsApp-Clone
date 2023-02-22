import { Row, Col, Container } from "react-bootstrap-v5";
import * as Icon from "react-bootstrap-icons";
import Whatsapp from "../img/whatsapp-logo.png";
import Avatar from "./Avatar";

const NavigationBar = () => {
  return (
    <Container fluid className="navigation-bar">
      <Container>
        <Row>
          <div className="mt-5">
            <Avatar src={Whatsapp} alt="whatsapp" width={40} height={40} />

            <span className="ml-3">WHATSAPP WEB</span>
          </div>
        </Row>
      </Container>
    </Container>
  );
};
export default NavigationBar;
