import "./NavResponsive.css";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import logoImg from "./ccountLogo.png";

export default function NavResponsive(props) {
  return (
    <nav>
      <div className="wrap">
        <Navbar bg="brandYellow" variant="" sticky="top" expand="lg">
          <Navbar.Brand>
            <Nav.Link href="/" >
              <img className="logo-img" src={logoImg} alt="" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link href="/">cases</Nav.Link>
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/saved">saved</Nav.Link>
              <Nav.Link href="/cart">cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </nav>
  );
}
