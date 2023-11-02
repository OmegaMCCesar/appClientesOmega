import CardCliente from "./CardCliente"
import './Cards.css'

const Cards = ({clientes,user,isAuthenticated}) => {

let userAdmin = ''

if(isAuthenticated){
  user.email === "luiscesar.munoz.cervantes.upiit@gmail.com" || user.email=== "jesusfutwer3@gmail.com" ? userAdmin = user.email : userAdmin = ''
}

  return (
  
    <div>
   {userAdmin !== '' ? <h1 className="h1-cards">Lista de Clientes</h1> : <h1 className="h1-cards">Not Found</h1>}
  <div className="cards">
      {userAdmin !== '' &&  clientes.map((cliente , index) => {
      return <CardCliente id={cliente.id} key={index} name={cliente.name} number={cliente.number}  fecha={cliente.fecha} horarioVisita={cliente.horarioVisita}/>
    })}
  </div>
  </div> 
   )
}

export default Cards;