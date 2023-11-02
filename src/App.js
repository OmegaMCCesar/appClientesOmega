import './App.css';
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import {useState, useEffect} from 'react'
import Cards from './componentes/Cards';
import { Route , Routes } from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './componentes/Home';
import Form from './componentes/Form';
import DetailCliente from './componentes/DetailCliente';
import Profile from './componentes/Profile';
import FormCliente from './componentes/FormCliente';


function App() {

const [clientes, setClientes] = useState([]);
const {user, isAuthenticated} = useAuth0()

const getClientes = () => axios.get('https://dbclientesomegamysql-production.up.railway.app')
.then(res => {
  setClientes(res.data)
})

useEffect(() => {
  getClientes()
},[])

const addCliente = (data)=>{
  console.log('datos para el post', data);
  axios.post('https://dbclientesomegamysql-production.up.railway.app/adminCreateCliente',data)
  .then(function (response) {
    getClientes()
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  return (
    <div className="App">
      <header>
        <Nav user={user} isAuthenticated={isAuthenticated}/>
      </header>
     <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/clientes'  element={<Cards clientes={clientes} user={user} isAuthenticated={isAuthenticated} />}/>
        <Route path='/form' element={<Form addCliente={addCliente} />} />
        <Route path='/cliente/:id' element={<DetailCliente clientes={clientes} />}/>
        <Route path='/profile' element={<Profile user={user} isAuthenticated={isAuthenticated} />}/>
        <Route path='/formVisita' element={<FormCliente  addCliente={addCliente} user={user} isAuthenticated={isAuthenticated}/>}/> 
    </Routes>
    </div>
  );
}

export default App;
