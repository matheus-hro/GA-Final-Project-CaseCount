import './Navbar.css';


import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImg from './count_nobackground1.png'

export default function Navbar(props) {
  return (
    <section className='nav-container'>
      <div className='nav-left'>
        <div className='logo-img-container'>
          <img src={logoImg} alt="" />
        </div>
        <Link to='/landing'><h2>casecount</h2></Link>
       
        <h4>cases</h4>
      </div>
      <div className='nav-right'>
        <h4>log in</h4>
        <h4>favorites</h4>
        <h4>cart</h4>
      </div>
    </section>
  )
}