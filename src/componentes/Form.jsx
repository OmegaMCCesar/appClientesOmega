import { useState } from "react"
import './Form.css'

const Form = ({addCliente}) => {
   
const [valuesForm, setValuesForm] = useState({
  name : '',
  address: '',
  number: '',
  typeOS: '1',
  prediagnostico: '',
  refacciones: '',
  horarioVisita:'',
  tecnico: '',
  observaciones: '',
  tallerOModulo: '',
  fecha:'',
  user: "user",
  lastname: "undefined",
  streets: "undefined",
  email: "undefined",
  equipo: "undefined",
  referencias: "undefined",
})

const handleSubmit = (e) => {
  e.preventDefault()
  addCliente(valuesForm)
   setValuesForm({
    name : '',
    address: '',
    number: '',
    typeOS: '1',
    prediagnostico: '',
    refacciones: '',
    horarioVisita:'',
    tecnico: '',
    observaciones: '',
    tallerOModulo: '',
    fecha:'',
    user: "user",
    lastname: "undefined",
    streets: "undefined",
    email: "undefined",
    equipo: "undefined",
    referencias: "undefined",
  })
}

const handleForm = (e) => {
  const nameInp = e.target.name
  const valueInp = e.target.value
  setValuesForm({...valuesForm,[nameInp] : valueInp})
  console.log(valuesForm)
}

  return (
    <div className="contenedor_form">
       <form  onSubmit={handleSubmit}>
         <label name='name' id='name' >Nombre:</label>
         <input name="name" onChange={(e) => handleForm(e)}  value={valuesForm.name}/>

         <label>Direccion:</label>
         <input name="address" onChange={(e) => handleForm(e)} value={valuesForm.address}/>

         <label>Numero Telefono o Whatsapp: </label>
         <input name="number" onChange={(e) => handleForm(e)} value={valuesForm.number}  />

         <label >typeOS:</label>
         <select name="typeOS" value={valuesForm.typeOS} onChange={(e) => handleForm(e)} > 
          <option>1</option>
          <option>2</option>
         </select>

         <label>Prediagnostico:</label>
         <textarea rows='8' onChange={(e) => handleForm(e)} value={valuesForm.prediagnostico} name="prediagnostico"/>

         <label>Refacciones:</label>
         <textarea rows='8' onChange={(e) => handleForm(e)} value={valuesForm.refacciones} name="refacciones" />

         <label>Fecha:</label>
         <select onChange={(e) => handleForm(e)}  name="fecha" value={valuesForm.fecha}>
          <option>Dia</option>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miercoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sabado</option>
         </select>

         <label>horarioVisita:</label>
         <select onChange={(e) => handleForm(e)} value={valuesForm.horarioVisita} name="horarioVisita" >
          <option>Horario</option>  
          <option>09hrs a 11hrs</option>
          <option>11hrs a 13hrs</option>
          <option>13hrs a 15hrs</option>
          <option>15hrs a 17hrs</option>
          <option>17hrs a 19hrs</option>
         </select>

         <label>Tecnico:</label>
          <select onChange={(e) => handleForm(e)} value={valuesForm.tecnico} name="tecnico">
            <option>Tecnico</option>
            <option>Cesar</option>
            <option>Jesus</option>
         </select> 

         <label>Observaciones:</label>
         <textarea  rows='8' onChange={(e) => handleForm(e)} value={valuesForm.observaciones} name="observaciones" />

         <label >Taller O Modulo:</label> 
          <select onChange={(e) => handleForm(e)} value={valuesForm.tallerOModulo} name="tallerOModulo">
            <option>Solicitado en</option>
            <option>Online</option>
            <option>San Gregorio</option>
            <option>Santa Cruz</option>
          </select> 
        

         <button className={"button-submit"} disabled={valuesForm.name === ''} type="submit">Enviar</button>
       </form>
    </div>
  )
}

export default Form;