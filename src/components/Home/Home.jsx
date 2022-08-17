import ColourPicker from '../Picker/Picker';
import './Home.css';

export default function Home(props) {
  return (
    <section>
      <article className='intro-content'>
        <h1 className='intro-title'>Custom Cases</h1>
        <p>Select your phone, start customizing</p>
       
      </article>
      <article className='wrap phone-gallery'>
        <div className='phone-container'>
          <div>
            <img className="phone-img" src="./images/iphone12.png" alt="" />
          </div>
          <h4>iPhone</h4>
        </div>
        <div className='phone-container'>
          <div>
            <img className="phone-img" src="./images/pixel4a.png" alt="" />
          </div>
          <h4>Pixel 4</h4>
        </div>
      </article>
    
    </section>
  )
}