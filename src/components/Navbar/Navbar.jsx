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
          <Link to='/' id="navlink"><h2>casecount</h2></Link>
          <Link to='/cases' id="navlink"><h4>cases</h4></Link>
        </div>
        <div className='nav-right'>
          {props.user ? <span>Welcome {props.user.name}!</span> : ""}
          {props.user ? <Link to='/logout' id="navlink"><h4>log out</h4></Link> : <Link to='/login' id="navlink"><h4>log in</h4></Link>} 
          <Link to='/favorites' id="navlink"><h4>favorites</h4></Link>
          <Link to='/cart' id="navlink"><h4>cart</h4></Link>
        </div>
      </section>
    </nav>
  )
}