import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Cards from './componentes/Cards';
import { Route , Routes } from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './componentes/Home';
import Form from './componentes/Form';
import DetailCliente from './componentes/DetailCliente';


function App() {

const [clientes, setClientes] = useState([]);
const [user, setUser] = useState({
  nvl: true
})

const getClientes = () => axios.get('http://localhost:3000/')
.then(res => {
  setClientes(res.data)
})

useEffect(() => {
  getClientes()
},[])

const addCliente = (data)=>{
  
  axios.post('http://localhost:3000/createCliente',data)
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
        <Nav user={user} setUser={setUser}/>
      </header>
     <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/clientes'  element={<Cards clientes={clientes} />}/>
        <Route path='/form' element={<Form addCliente={addCliente} />} />
        <Route path='/cliente/:id' element={<DetailCliente clientes={clientes} />}/>
    </Routes>
    </div>
  );
}

export default App;
