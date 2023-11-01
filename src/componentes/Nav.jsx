import { Link } from 'react-router-dom';
import './Nav.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Nav = ({user,isAuthenticated}) => {


  return (
    <div className="Nav-Bar">
    <ul className="ul-nav">
      <li><Link to='/'>Home</Link></li>
     {user.nvl === false ? <li><Link to='/clientes'>Clientes</Link></li> : null}
      <li><Link to='/form' >{user.nvl === true ? <>Solicitar Servico</> : <>Añadir Cliente</>}</Link></li>
      {isAuthenticated === true ? <li><Link to='/profile'>Perfil</Link></li> : null} 
    </ul>  
    {isAuthenticated === true ? <LogoutButton/> : <LoginButton/>  }
    </div>
  )
}

export default Nav;