import { NavLink } from "react-router-dom";
import "./HomePage.css";
import * as Components from "../../components/componentBarrel.mjs";
import homeImg from "../HomePage/home-img.png";

export default function HomePage(props) {
  const { NavResponsive } = Components;

  return (
    <>
      <NavResponsive setModalOpen={props.setModalOpen} user={props.user} />
      <article className="phone-gallery">
        <div className="intro-content">
          <h1 className="intro-title">Custom Cases</h1>
          <p>Select your phone, start customizing</p>
          <div className="phone-link-container">
            <NavLink className="phone-link" to="/canvas">
            SHOP CASES
            </NavLink>
          </div>
        </div>
        
        <div>
          <img className="phone-img" src={homeImg} alt="" />
        </div>
      </article>
    </>
  );
}
