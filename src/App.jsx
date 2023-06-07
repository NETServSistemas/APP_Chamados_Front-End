import React,{ useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chamado from './pages/Chamado/Chamado'
import './App.css'
import Home from './pages/Home/Home'; //importando a rota do Home
import Comentarios from './pages/Comentarios/Comentarios';
import CadastraModelo from './pages/Cadastro/Modelos/CadastroModelos';
import CadastraPessoas from './pages/Cadastro/Pessoas/Pessoas';
import CadastroPerifericos from './pages/Cadastro/Perifericos/CadastroPerifericos';
import Login from './pages/Login/Login';

class App extends React.Component  {
  constructor(props){
    super(props);

    this.state = {
      setor: "",
      titulo: "",
      descricao: ""
    }
  }
  
  render(){
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Chamado />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Comentario' element={<Comentarios />} />
          <Route path='/CadastroModelos' element={<CadastraModelo />} />
          <Route path='/CadastroPerifericos' element={ <CadastroPerifericos /> } />
          <Route path='/CadastraPessoas' element={<CadastraPessoas />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    )
  }
  
}

export default App
