import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import "../styles/login.css";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const [oAuthCredentials, setOAuthCredentials] = useState({
    email: undefined,
    name: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  const oAuthHandleClick = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/oauthlogin`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(oAuthCredentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section className="journey">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <div className="mt-4 mx-4">
                  <GoogleOAuthProvider clientId="584594078595-34gia1q8lidamjknttbb10bn22u1k7qp.apps.googleusercontent.com">
                    <GoogleLogin
                      useOneTap={true}
                      size="medium"
                      onSuccess={(credentialResponse) => {
                        const userData = jwt_decode(
                          credentialResponse.credential
                        );
                        setOAuthCredentials((prev) => {
                          prev.email = userData.email;
                          prev.name = userData.given_name;
                        });
                        oAuthHandleClick();
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </GoogleOAuthProvider>
                </div>
                <p>
                  Don't have an account ? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
