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
      <div className="nav-wrap">
        <Navbar bg="brandYellow" variant="" sticky="top" expand="lg">
          <Navbar.Brand>
            <NavLink to="/">
              <img className="logo-img" src={logoImg} alt="" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink to="/canvas"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >Customize!</NavLink>
            </Nav>

            <Nav>
              {props.user ? <span>Welcome {props.user.name}!</span> : ""}
              {props.user ? <NavLink to="/logout"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >Log out</NavLink> :
                <NavLink to="/login"
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                  }
                >Log in</NavLink>}

              <NavLink to="/saved"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >Saved designs</NavLink>
              <span onClick={()=>props.setModalOpen(true)}
                className={inactiveClassName}
              >Cart</span>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </nav>
  );
}
