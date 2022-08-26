import "./NavResponsive.css";

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logoImg from "./ccountLogo.png";

export default function NavResponsive(props) {
  const inactiveClassName = "navlink"
  const activeClassName = inactiveClassName + " active"


  return (
    <nav>
      <div className="wrap">
        <Navbar bg="brandYellow" variant="" sticky="top" expand="lg">
          <Navbar.Brand>
            <NavLink to="/">
              <img className="logo-img" src={logoImg} alt="" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >cases</NavLink>
            </Nav>

            <Nav>
              {props.user ? <span>Welcome {props.user.name}!</span> : ""}
              {props.user ? <NavLink to="/logout"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >log out</NavLink> :
                <NavLink to="/login"
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >login</NavLink>}

              <NavLink to="/saved"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >saved</NavLink>
              <span onClick={()=>props.setModalOpen(true)}
                className={inactiveClassName}
              >cart</span>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </nav>
  );
}
