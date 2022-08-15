import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImg from './count_nobackground1.png'

export default function Navbar(props) {
  return (
    <nav>
      <section className='wrap nav-container'>
        <div className='nav-left'>
          <div className='logo-img-container'>
            <img className='logo-img'src={logoImg} alt="" />
          </div>
          <Link to='/'><h2>casecount</h2></Link>
          <Link to='/cases'><h4>cases</h4></Link>
        </div>
        <div className='nav-right'>
          <Link to='/login'><h4>log in</h4></Link>
          <Link to='/favorites'><h4>favorites</h4></Link>
          <Link to='/cart'><h4>cart</h4></Link>
        </div>
      </section>
    </nav>
  )
}