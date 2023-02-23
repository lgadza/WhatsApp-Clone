import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { getMe, registerUser } from "../redux/actions";
import Spinners from "./Spinner";
import { useNavigate } from "react-router-dom";
const SignUp = ({ signIn }) => {
  // ***************** States****************
  const [isSignIn, setIsSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ********************Selectors***************
  const registrationResponse = useSelector(
    (state) => state.registerUser.registrationResponse
  );

  const isLoading = useSelector((state) => state.registerUser.isLoading);
  const isError = useSelector((state) => state.registerUser.isError);
  const registerData = {
    name: name,
    surname: surname,
    email: email,
    password: password,
  };

  // ***********Event Handlers*******************
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUserData = async () => {
    setSignUp(true);
    await dispatch(registerUser(registerData));
    await setResponse(true);

    await dispatch(getMe(registrationResponse.accessToken));
    navigate("/chats");
  };

  return (
    <>
      <span className="d-flex my-5 h2">Sign Up</span>
      <span className="d-flex  mb-1 text-secondary ">
        Please fill <strong className="mx-1">ALL fields</strong> in the form to
        create an account
      </span>
      {password !== confirmPassword && signUp && (
        <Alert variant="danger" className="blink_me ">
          Password and Confirm Password do not match
        </Alert>
      )}

      {isLoading && signUp && (
        <div className="  d-flex justify-content-center">
          {" "}
          <Spinners />
        </div>
      )}
      {isError && (
        <Alert variant="danger" className="mt-5">
          <Alert.Heading>!You got an error!</Alert.Heading>
          <p>
            Something went wrong on our side, we are working on it, we apologies
            for the inconvenience caused
          </p>
        </Alert>
      )}
      {response && (
        <Alert variant="primary">{registrationResponse.message}</Alert>
      )}

      <Form.Group className="d-flex mb-4 ">
        <Col className="pl-0">
          <Form.Control
            placeholder="First name"
            required
            onInput={handleName}
          />
        </Col>
        <Col className="pr-0">
          <Form.Control
            placeholder="Last name"
            required
            onInput={handleSurname}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-4">
        <Col className="px-0">
          {" "}
          <Form.Control
            type="email"
            placeholder=" Email"
            onInput={handleEmail}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-4">
        <Col className="px-0">
          <Form.Control
            type="password"
            placeholder=" Password"
            onInput={handlePassword}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-2">
        <Col className="px-0">
          <Form.Control
            type="password"
            placeholder=" Confirm Password"
            onInput={handleConfirmPassword}
          />
        </Col>
      </Form.Group>
      <Link to="" className="w-50">
        <Button
          disabled={!password || !name || !email || !surname}
          className="px-4 sign-up-btn w-100"
          variant="primary"
          onClick={handleUserData}
        >
          Sign Up
        </Button>
      </Link>
      <span className="mb-2">
        <strong>OR</strong>
      </span>
      <Col className=" d-flex px-0 mb-3 ">
        <a
          href={`${process.env.REACT_APP_BE_PROD_URL}/users/googleLogin`}
          className="w-100"
        >
          <Button className="px-4 w-100" variant="primary">
            <Icon.Google size={20} />
            <span className="ml-3">Continue with Google</span>
          </Button>
        </a>
      </Col>
      <div className="mb-3">
        <span>
          I already have an account?{" "}
          <Link onClick={() => signIn()}>Sign in</Link>
        </span>
      </div>
    </>
  );
};
export default SignUp;
