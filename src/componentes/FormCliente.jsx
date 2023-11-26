import { useState } from "react"
import './FormCliente.css'
import comprovacionForm from "../middlewares/comprovacion"


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

const [errors, setErrors] = useState({
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

  setErrors(comprovacionForm({...valuesForm,[nameInp] : valueInp}))

  setValuesForm({...valuesForm,[nameInp] : valueInp})
}

const isEmpty = Object.values(valuesForm).some(x => (x === ''))



if(isAuthenticated === false)return(
<div className="contenedor_form">
<h1>ingrese para agendar una visita</h1>
</div>
)

  return (
    <div className="contenedor_form">
       <form  onSubmit={handleSubmit}>
         <label name='name'  >Nombre:</label>
         <input name="name" onChange={(e) => handleForm(e)}  value={valuesForm.name}/>
         {errors.name ? <p  className="error">{errors.name}</p> : null}


         <label name='lastname' id='lastname' >Apellido:</label>
         <input name="lastname" onChange={(e) => handleForm(e)}  value={valuesForm.lastname}/>
         {errors.lastname ? <p  className="error">{errors.lastname}</p> : null}

         <label>Numero Telefono o Whatsapp: </label>
         <input name="number" onChange={(e) => handleForm(e)} value={valuesForm.number}  />
         {errors.number ? <p  className="error">{errors.number}</p> : null}

         <label>Calle:</label>
         <input name="address" onChange={(e) => handleForm(e)} value={valuesForm.address}/>
         {errors.address ? <p  className="error">{errors.address}</p> : null}

         <label>Entre calles:</label>
         <input name="streets" onChange={(e) => handleForm(e)} value={valuesForm.streets}/>
         {errors.streets ? <p  className="error">{errors.streets}</p> : null}

         <label>Referencias: </label>
         <textarea placeholder="Ejemplo: numero de pisos de la casa, color de puerta, color de la fachada, negocios, escuelas o referente cercano"  rows='8' onChange={(e) => handleForm(e)} value={valuesForm.referencias} name="referencias" />
         {errors.referencias ? <p  className="error">{errors.referencias}</p> : null}


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
         {errors.fecha ? <p  className="error">{errors.fecha}</p> : null}

         <label>horarioVisita:</label>
         <select onChange={(e) => handleForm(e)} value={valuesForm.horarioVisita} name="horarioVisita" >
          <option>Horario</option>  
          <option>09hrs a 14hrs</option>
          <option>14hrs a 19hrs</option>
         </select>
         {errors.horarioVisita ? <p  className="error">{errors.horarioVisita}</p> : null}

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
         {errors.equipo? <p  className="error">{errors.equipo}</p> : null}


         <label>Observaciones:</label>
         <textarea placeholder="Ejemplo: tira agua, golpetea, no enfria, no calienta, no enciende,etc"  rows='8' onChange={(e) => handleForm(e)} value={valuesForm.observaciones} name="observaciones" />
         {errors.observaciones? <p  className="error">{errors.observaciones}</p> : null}


         <label>E-mail: {emailUser} </label> 
       

         <button className={"button-submit"} disabled={isEmpty} type="submit">Enviar</button>
       </form>
    </div>
  )
}

export default FormCliente;