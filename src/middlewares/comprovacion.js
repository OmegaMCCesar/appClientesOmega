const comprovacionForm = (input) =>{

  const errors = {}

  console.log(input);
  if(!input.name){
    errors.name = 'Nombre obligatorio';
  } else if(!/^[a-zA-Z\s]*$/.test(input.name)|| input.name.length > 12 || input.name.includes('!')|| input.name.includes('"')|| input.name.includes('#')|| input.name.includes('$')|| input.name.includes('%')|| input.name.includes('&')|| input.name.includes('/')|| input.name.includes('(')|| input.name.includes(')')|| input.name.includes('=')|| input.name.includes('?')|| input.name.includes('¡')|| input.name.includes('*')|| input.name.includes('@')){
    errors.name = 'Nombre invalido';
  }

  if(!input.lastname) errors.lastname = 'Ingrese Apellido'
  


 return errors
}

export default comprovacionForm;