import React,{ useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chamado from './pages/Chamado/Chamado'
import './App.css'
import Home from './pages/Home/Home'; //importando a rota do Home
import HomeUser from './pages/HomeUser/HomeUser';
import Comentarios from './pages/Comentarios/Comentarios';


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
          <Route path='/HomeUsers' element={<HomeUser />} />
          <Route path='/Comentario' element={<Comentarios />} />
        </Routes>
      </Router>
    )
  }
  
}

export default App
