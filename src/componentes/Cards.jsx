import CardCliente from "./CardCliente"
import './Cards.css'

const Cards = ({clientes}) => {

  return (
    <div>
      <h1 className="h1-cards">Lista de Clientes</h1>
    <div className="cards">
        {clientes.map((cliente , index) => {
        return <CardCliente id={cliente.id} key={index} name={cliente.name} number={cliente.number}  fecha={cliente.fecha} horarioVisita={cliente.horarioVisita}/>
      })}
    </div>
    </div>
  )
}

export default Cards;