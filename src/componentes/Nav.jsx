import { Link } from 'react-router-dom';
import './Nav.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Nav = ({user,isAuthenticated}) => {




console.log(user);
console.log('autenticacion',isAuthenticated)
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
      </div>
     ) : (
      <div className="Nav-Bar">
      <ul className="ul-nav">
        <li><Link to='/'>Home</Link></li>
      </ul>  
      {isAuthenticated === true ? <LogoutButton/> : <LoginButton/>  }
      </div>
     )
  )
}

export default Nav;