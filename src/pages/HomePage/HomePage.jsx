import { NavLink } from 'react-router-dom'
import homeImg from "../HomePage/home-img.png";
import './HomePage.css'

export default function HomePage(props) {
  return (
    <>
      <article className="phone-gallery">
        <div className="intro-content">
          <h1 className="intro-title">Custom Cases</h1>
          <p>Choose between differnt colors, prints, and styles of cases.</p>
          <div className="phone-link-container">
            <NavLink className="phone-link" to="/canvas">
            CUSTOMIZE YOUR CASE
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
