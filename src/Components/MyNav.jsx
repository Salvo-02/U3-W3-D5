import { Button, Col, Container, Form, FormControl } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_TO_NEWSEARCH } from "../Redux/actions";

const MyNav = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TO_NEWSEARCH, payload: input });
    setInput("");
  };
  return (
    <Col>
      <div className="navbar navbar-expand-md fixed-left justify-content-between">
        <Container>
          <div>
            <a className="navbar-brand" href="#">
              {" "}
              <img className="mt-4" src={logo} alt="Spotify Logo" style={{ width: 131, height: 41 }} />
            </a>

            <div className=" navbar-nav d-flex flex-column">
              <div>
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center fs-5" href="#">
                      <HouseDoorFill />
                      &nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center fs-5" href="#">
                      <BookFill />
                      &nbsp; Your Library
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" input-group mt-3">
                <Form onSubmit={handleSubmit}>
                  <FormControl value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" />
                  <div className="input-group-append">
                    <Button variant="outline-secondary" className=" btn-sm h-100" type="submit">
                      GO
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default MyNav;
