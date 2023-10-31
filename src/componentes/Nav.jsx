import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({user, setUser}) => {

  const horario = Date()


  return (
    <div className="Nav-Bar">
     <h6>{horario}</h6>
     <button onClick={() => setUser({nvl:!user.nvl})}>x</button>
    <ul className="ul-nav">
      <li><Link to='/'>Home</Link></li>
     {user.nvl === false ? <li><Link to='/clientes'>Clientes</Link></li> : null}
      <li><Link to='/form' >{user.nvl === true ? <>Solicitar Servico</> : <>Añadir Cliente</>}</Link></li>
    </ul>  
    </div>
  )
}

export default Nav;