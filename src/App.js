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


function App() {

const [clientes, setClientes] = useState([]);
const {user, isAuthenticated} = useAuth0()
const [userr, setUserr] = useState({
  nvl: false
})

const getClientes = () => axios.get('https://dbclientesomegamysql-production.up.railway.app')
.then(res => {
  setClientes(res.data)
})

useEffect(() => {
  getClientes()
},[])

const addCliente = (data)=>{
  console.log('datos para el post', data);
  axios.post('https://dbclientesomegamysql-production.up.railway.app/createCliente',data)
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
        <Nav user={userr} setUserr={setUserr} isAuthenticated={isAuthenticated}/>
      </header>
     <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/clientes'  element={<Cards clientes={clientes} />}/>
        <Route path='/form' element={<Form addCliente={addCliente} />} />
        <Route path='/cliente/:id' element={<DetailCliente clientes={clientes} />}/>
        <Route path='/profile' element={<Profile user={user} isAuthenticated={isAuthenticated} />}/>
    </Routes>
    </div>
  );
}

export default App;
