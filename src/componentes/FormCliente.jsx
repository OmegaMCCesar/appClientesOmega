import { useState } from "react"
import './FormCliente.css'


const FormCliente = ({addCliente, user, isAuthenticated}) => {
   
let emailUser = ''

if(isAuthenticated){
 emailUser = user.email
}


const [valuesForm, setValuesForm] = useState({
  name : '',
  address: '',
  number: '',
  typeOS: '1',
  prediagnostico: 'undefined',
  refacciones: 'undefined',
  horarioVisita:'',
  tecnico: 'undefined',
  observaciones: '',
  tallerOModulo: 'online',
  fecha:'',
  user: "user",
  lastname: "",
  streets: "",
  email: emailUser,
  equipo: "",
  referencias: "",
})

const handleSubmit = (e) => {
  e.preventDefault()
  addCliente(valuesForm)
   setValuesForm({
    name : '',
    address: '',
    number: '',
    typeOS: '1',
    prediagnostico: 'undefined',
    refacciones: 'undefined',
    horarioVisita:'',
    tecnico: 'undefined',
    observaciones: '',
    tallerOModulo: 'online',
    fecha:'',
    user: "user",
    lastname: "",
    streets: "",
    email: emailUser,
    equipo: "",
    referencias: "",
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
         <label name='name'  >Nombre:</label>
         <input name="name" onChange={(e) => handleForm(e)}  value={valuesForm.name}/>

         <label name='lastname' id='lastname' >Apellido:</label>
         <input name="lastname" onChange={(e) => handleForm(e)}  value={valuesForm.lastname}/>

         <label>Numero Telefono o Whatsapp: </label>
         <input name="number" onChange={(e) => handleForm(e)} value={valuesForm.number}  />

         <label>Calle:</label>
         <input name="address" onChange={(e) => handleForm(e)} value={valuesForm.address}/>

         <label>Entre calles:</label>
         <input name="streets" onChange={(e) => handleForm(e)} value={valuesForm.streets}/>

         <label>Referencias: </label>
         <textarea placeholder="Ejemplo: numero de pisos de la casa, color de puerta, color de la fachada, negocios, escuelas o referente cercano"  rows='8' onChange={(e) => handleForm(e)} value={valuesForm.referencias} name="referencias" />



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

         <label>horarioVisita</label>
         <select onChange={(e) => handleForm(e)} value={valuesForm.horarioVisita} name="horarioVisita" >
          <option>Horario</option>  
          <option>09hrs a 14hrs</option>
          <option>14hrs a 19hrs</option>
         </select>

         <label>Equipo:</label>
         <select onChange={(e) => handleForm(e)}  name="equipo" value={valuesForm.equipo}>
          <option>Equipo</option>
          <option>Lavadora</option>
          <option>Secadora</option>
          <option>Estufa</option>
          <option>Vitrina</option>
          <option>Lavasecadora</option>
          <option>Otros</option>
         </select>


         <label>Observaciones</label>
         <textarea placeholder="Ejemplo: tira agua, golpetea, no enfria, no calienta, no enciende,etc"  rows='8' onChange={(e) => handleForm(e)} value={valuesForm.observaciones} name="observaciones" />

         <label>E-mail: {emailUser} </label> 
       

         <button className={"button-submit"} disabled={valuesForm.name === ''} type="submit">Enviar</button>
       </form>
    </div>
  )
}

export default FormCliente;