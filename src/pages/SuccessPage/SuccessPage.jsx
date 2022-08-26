import { useEffect } from "react";
import homeImg from "../HomePage/home-img.png";
import './SuccessPage.css'

export default function HomePage(props) {
  useEffect(()=>{
    props.setCart({lineItems:[],subtotal:0})
  },[])

  return (
    <>
      <article className="phone-gallery">
        <div className="intro-content">
          Thanks for your order, {props.user.name}!!
        </div>
        
        <div>
          <img className="phone-img" src={homeImg} alt="" />
        </div>
      </article>
    </>
  );
}
