const comprovacionForm = (input) =>{

  const errors = {}

  console.log(input);
  if(!input.name){
    errors.name = 'Nombre obligatorio';
  } else if(!/^[a-zA-Z\s]*$/.test(input.name)|| input.name.length > 12 || input.name.includes('!')|| input.name.includes('"')|| input.name.includes('#')|| input.name.includes('$')|| input.name.includes('%')|| input.name.includes('&')|| input.name.includes('/')|| input.name.includes('(')|| input.name.includes(')')|| input.name.includes('=')|| input.name.includes('?')|| input.name.includes('¡')|| input.name.includes('*')|| input.name.includes('@')){
    errors.name = 'Nombre invalido';
  }

  if(!input.lastname) errors.lastname = 'Ingrese Apellido';

  if(!input.number) errors.number = 'Ingrese Numero';

  if(!input.address) errors.address = 'Ingrese Calle';

  if(!input.streets) errors.streets = 'Ingrese Calles';

  if(!input.referencias) errors.referencias = 'Ingrese algunas referencias';
  
  if(!input.fecha) errors.fecha = 'Elija algun dia';

  if(!input.horarioVisita) errors.horarioVisita = 'Elija un rango de horario';

  if(!input.equipo) errors.equipo = 'Cual es su equipo a revisar';

  if(!input.observaciones) errors.observaciones = '¿Cual es el problema de su equipo?'
  


 return errors
}

export default comprovacionForm;