import { useState } from 'react'
import './CardCliente.css'
import { Link } from 'react-router-dom'

const CardCliente = ({name, number,horarioVisita,fecha,id}) => {


const [color, setColor] = useState(true)  
const [status, setStatus] = useState(false)

console.log(id);

const imgAvatar = 'https://static.thenounproject.com/png/4035892-200.png'
  return(
    <div className={color ? 'contenedor colorMan' : 'contenedor colorWoman'}>
      <img className='imgCard' src={imgAvatar} alt='img-avatar'/>
      <h1 className='name'><Link to={`/cliente/${id}`}>{name}</Link></h1>
      <strong>{number}</strong>
      <h5 className='fechahora'>{`${fecha}  ${horarioVisita}`}</h5>
      {status ? <h6 className='status'>Terminado</h6> : <h6 className='status'>Pendiente</h6>}
      <button onClick={() => setColor(!color)} className={!color? 'colorMan btn-color' : 'colorWoman btn-color'}>Color</button>
      <button onClick={() => setStatus(!status)} className={!color? 'colorMan btn-color' : 'colorWoman btn-color'}>Status</button>
    </div>
  )
}

export default CardCliente;