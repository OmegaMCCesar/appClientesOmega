import './CardCliente.css'
import { Link } from 'react-router-dom'

const CardCliente = ({name, number,horarioVisita,fecha,id}) => {


const imgAvatar = 'https://static.thenounproject.com/png/4035892-200.png'
  return(
    <div className='contenedor colorMan'>
      <img className='imgCard' src={imgAvatar} alt='img-avatar'/>
      <h1 ><Link to={`/cliente/${id}`} className='name'>Nombre: {name}</Link></h1>
      <h5 className='fechahora'>Numero: {number}</h5>
      <h5 className='fechahora'>Fecha: {fecha}</h5>
      <h5 className='fechahora'>Hora: {horarioVisita}</h5>
    </div>
  )
}

export default CardCliente;