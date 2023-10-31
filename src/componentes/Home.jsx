import imgFlayer from './flayer.jpg'
import './Home.css'

const Home = () => {



  return (
    <div className='contenenor-home'>
     <h1 className='title-bienvenido'>Bienvenido a omegaMc</h1>
     <img className='imagen-flayer' src={imgFlayer} alt='imagen-flayer'/>
    </div>
  )
}

export default Home;