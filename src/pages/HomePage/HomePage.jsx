import {NavLink} from 'react-router-dom'
import './HomePage.css'
import * as Components from '../../components/componentBarrel.mjs';




export default function HomePage(props){
  const { NavResponsive} = Components;

  return (
    <>
    <NavResponsive setModalOpen={props.setModalOpen} user={props.user} />
   
    <article className='intro-content'>
        <h1 className='intro-title'>Custom Cases</h1>
        <p>Select your phone, start customizing</p>
       
      </article>
      <article className='wrap phone-gallery'>
        <NavLink className="phone-link" to='/canvas'>
          <div className='phone-container'>
            <div>
              <img className="phone-img" src="./images/iphone12.png" alt="" />
            </div>
            <h4>iPhone</h4>
          </div>
        </NavLink>
        <NavLink className="phone-link" to='/canvas'>
          <div className='phone-container'>
            <div>
              <img className="phone-img" src="./images/pixel4a.png" alt="" />
            </div>
            <h4>Pixel 4</h4>
          </div>
        </NavLink>
      </article>
    </>
  )
}