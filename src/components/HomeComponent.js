import React from "react";
import { Container, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const { post } = useSelector((state) => state);

  //ana sayfada random post göstermek üzere random picker tanımlandı.
  //bu sayede anasayfadaki post her sayfa yenilendiğinde random bir sekilde değişecektir. 

  const myArray = ["1", "2", "3", "4"];

  let rand = (Math.random() * myArray.length) | 0;
  let rValue = myArray[rand];

  const randomPost = post.filter((data) => data.id === rValue);

  return (
    <div>
      <Container className="d-flex">
        <Col xs={9} className="p-4 pt-5 ">
          <img
            className="p-3 pt-2"
            src={randomPost[0]?.img}
            width="100%"
            height="600px"
          />
          <Container className="p-5 pt-2">
            <p>
              <b>By</b>:{randomPost[0]?.author}, <b>at</b>{" "}
              {randomPost[0]?.postedAt}
            </p>
            <h4>{randomPost[0]?.title}</h4>
            <p>{randomPost[0]?.description}</p>
            <div className="d-flex justify-content-between">
              <p onClick={() => navigate(`/list/${randomPost[0]?.id}`)} className="homeReadMore">
                ...Read More
              </p>
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </div>
            </div>
          </Container>
        </Col>
        <Col
          xs={3}
          className="p-2 pe-5 mt-5 d-flex flex-column"
          style={{ height: "100vh" }}
        >
          <Row className="border p-2" style={{ height: "15%" }}>
            <h6>
              <b>Search</b>
            </h6>
            <InputGroup className="ms-0 mt-4 mb-4">
              <Form.Control
                placeholder="Type here..."
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </InputGroup>
          </Row>
          <Row className="border mt-1 p-2 pt-5" style={{ height: "35%" }}>
            <h6>
              <b>Categories</b>
            </h6>
            <div className="d-flex flex-column">
              <span>
                <b>Entertainment</b>
              </span>
              <span>
                <b>Business</b>
              </span>
              <span>
                <b>Adventure</b>
              </span>
              <span>
                <b>Decorating</b>
              </span>
              <span>
                <b>Travelling</b>
              </span>
              <span>
                <b>Shopping</b>
              </span>
            </div>
          </Row>
          <Row style={{ height: "30%" }}>
            <img
              src="https://cdn.graciousquotes.com/wp-content/uploads/2020/08/Live-your-best-and-act-your-best-and-think-your-best-each-day-for-there-may-be-no-tomorrows..jpg"
              className="p-0 mt-1"
              height="100%"
            />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default HomeComponent;
