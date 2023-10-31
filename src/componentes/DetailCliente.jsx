import { useParams } from "react-router";
import './DetailCliente.css'

const DetailCliente = ({clientes}) => {

console.log(clientes);
const {id} = useParams()
const aux = Number(id)


const cliente = clientes.filter(persona => persona.id === aux)
const clienteData = cliente[0]
console.log(clienteData,'esto es cliente ')

  return(
  <div className="contenedor-detalle">
    <h1 className="name-cliente">Nombre: {clienteData.name}</h1>
    <h4>Dia: {clienteData.fecha}</h4>
    <h4>Horario Visita:{clienteData.horarioVisita}</h4>
    <h4>Numero: {clienteData.number}</h4>
    <h4>Taller O Modulo: {clienteData.tallerOModulo}</h4>
    <h4>Direccion: {clienteData.address}</h4>
    <h4>TypeOS: {clienteData.typeOS}</h4>
    <h4>Prediagnostico: {clienteData.prediagnostico}</h4>
    <h4>Refacciones: {clienteData.refacciones}</h4>
    <h4>Tecnico: {clienteData.tecnico}</h4>
    <h4>Observaciones: {clienteData.observaciones}</h4>

    
  </div>
  )
}

export default DetailCliente;