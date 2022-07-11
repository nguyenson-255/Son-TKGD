import React, { useEffect, useState, useRef } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  // const loginNameRef = useRef();
  // const loginPasswordRef = useRef();
  const user = useSelector((state) => state.auth.currentUser );
  console.log(user);;


  const [name,setName] = useState("")
  const [password,setPassword] = useState("")

  // const classes = userStyle()
  const dispatch = useDispatch()



  // console.log(loginNameRef)
  // console.log(loginPasswordRef.input.)
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login({
      username: name,
      password: password
    }))
  };

  return (
    <Helmet title="Login">
      {/* <CommonSection title="Login" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}

                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
