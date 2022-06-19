import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      key="sm"
      bg="light"
      expand="sm"
      className="mb-3 border-bottom"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand onClick={()=>navigate("/")} className="navbarTitle">
          <img
            style={{ width: "60%", height: "60%" }}
            src="https://eatzy.co.uk/wp-content/uploads/2021/09/EATZY-LOGO-FINAL.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
              <NavDropdown
                className="small"
                title="Home"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item onClick={()=>navigate("/")}>Home</NavDropdown.Item>
                <NavDropdown.Item href="#action4" disabled>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" disabled>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" className="small" disabled>
                AboutUs
              </Nav.Link>
              <NavDropdown
                className="small"
                title="Pages"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item onClick={() => navigate("/list")}>
                  List posts
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="small"
                title="Portfolio"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3" disabled>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" disabled>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" disabled>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="small"
                title="Blog"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item disabled href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item disabled href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" className="small" disabled>
                Contact
              </Nav.Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="blue"
                className="bi bi-search"
                viewBox="0 -2 22 22"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigator;
