import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const LoginPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () =>
    showSignUp ? setShowSignUp(false) : setShowSignUp(true);
  return (
    <Container className="sign-page">
      <Row>
        <Col className="d-flex flex-column justify-content-start ml-5">
          <span className="d-flex my-5 h2">Use WhatsApp on your computer</span>
          <div>
            <span className="d-flex my-4">1. Open WhatsApp on your phone</span>
            <span className="d-flex my-4 align-items-center">
              2. Tap <strong className="px-1">Menu</strong>{" "}
              <Icon.ThreeDotsVertical size={20} color="gray" /> or{" "}
              <strong className="px-1">Settings</strong>{" "}
              <Icon.Gear size={20} color="gray" className="mr-1" /> and select
              <strong className="px-1">linked Devices</strong>
            </span>
            <span className="d-flex my-4">
              3. Tap on <strong className="px-1">linked Devices</strong>
            </span>
            <span className="d-flex my-4">
              4. Point your phone to this screen to capture the code
            </span>
          </div>
        </Col>
        <Col className="mb-5">
          {showSignUp && <SignUp SignIn={handleShowSignUp} />}
          {!showSignUp && <SignIn signUp={handleShowSignUp} />}
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
