import { Link } from 'react-router-dom';
import './Nav.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import instagram from '../images/instagram.png'
import facebook from '../images/Facebook_Square_icon-icons.com_49948.png'

const Nav = ({user,isAuthenticated}) => {

  return (
     isAuthenticated ? (
      <div className="Nav-Bar">
      <ul className="ul-nav">
        <li><Link to='/'>Home</Link></li>
       {isAuthenticated === true && (user.email === "luiscesar.munoz.cervantes.upiit@gmail.com" || user.email=== "jesusfutwer3@gmail.com") ? <li><Link to='/clientes'>Clientes</Link></li> : null}
        {isAuthenticated === true && (user.email === "luiscesar.munoz.cervantes.upiit@gmail.com" || user.email=== "jesusfutwer3@gmail.com") ? <li><Link to='/form' ><>Añadir Cliente</></Link></li> : null}
        {isAuthenticated === true ? <li><Link to='/profile'>Perfil</Link></li> : null} 
        {user.email === "luiscesar.munoz.cervantes.upiit@gmail.com" || user.email  === "jesusfutwer3@gmail.com" ? null : <li><Link to='/formVisita'>Agendar visita</Link></li>}
      </ul>  
      {isAuthenticated === true ? <LogoutButton/> : <LoginButton/>  }
      <a className='a_redes' target='_blanck' href='https://instagram.com/omegamc.1?igshid=MzMyNGUyNmU2YQ=='><img src={instagram} alt='instagram' className='icons_nav'/></a>
      <a className='a_redes' target='_blanck' href='https://www.facebook.com/profile.php?id=61552902452992'><img src={facebook} alt='facebook' className='icons_nav'/></a>
      </div>
     ) : (
      <div className="Nav-Bar">
      <ul className="ul-nav">
        <li><Link to='/'>Home</Link></li>
      </ul>
      {isAuthenticated === true ? <LogoutButton/> : <LoginButton/>  }
      {isAuthenticated === false && <h3>Ingresa para agendar un servicio</h3> }
      <a className='a_redes' target='_blanck' href='https://instagram.com/omegamc.1?igshid=MzMyNGUyNmU2YQ=='><img src={instagram} alt='instagram' className='icons_nav'/></a>
      <a className='a_redes' target='_blanck' href='https://www.facebook.com/profile.php?id=61552902452992'><img src={facebook} alt='facebook' className='icons_nav'/></a>
      </div>
     )
  )
}

export default Nav;