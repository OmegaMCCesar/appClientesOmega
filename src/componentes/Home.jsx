import './Home.css'
import promo from '../images/logoomegapromo.jpg'

const Home = () => {



  return (
    <div className='contenenor-home'>
      <div className='contenedor_logo_bienvenida'>
     <h1 className='title-bienvenido'>Bienvenido a OmegaMc</h1>
      </div>
      <img className='posteromega' src="posteromega.ico" alt="posteromega" />
      <img className='posteromega' src={promo} alt="promoomega" />
    </div>
  )
}

export default Home;