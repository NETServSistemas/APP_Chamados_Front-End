import './HomeUser.css';
import React, { useEffect, useState } from 'react';
import logoNetserv from '../../../public/Logo2.png';
import { ChamadosUser } from '../../data/chamadosUser';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderComponent from '../../Componentes/Header';
// import { ChamadosTeste } from '../../data/chamados';

//component
const HomeUser = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false); //inicializando o modal

  

    //TRAZENDO OS CHAMADOS DO JSON chamados.js
    const [chamados, setChamados] = useState([])
    const [chamadosAberto, setChamadossAberto] = useState([])
    const [chamadosAtendimento, setChamadosAtendimento] = useState([])

    useEffect(()=> {
        const buscaChamados = async() => {
            const chamados = ChamadosUser;
            setChamados(chamados);
            setChamadossAberto(chamados.filter((c) => c.statusChamado == "ABERTO"));
            setChamadosAtendimento(chamados.filter((c) => c.statusChamado == "ANDAMENTO"))
    }

    buscaChamados();
}, [])

  //função para abrir o modal
  //setIsOpen(true); //abre o modal com esta função

  function closeModal(){ 
      setIsOpen(false); //fecha o modal da tela
  }
  

    return(
        <>
            {/* ADICIONANDO O MODAL DIRETAMENTE DO BOOTSTRAP*/}
            <div className={`modal ${modalIsOpen == false  ? 'fade' : ''}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> {/*fazemos uma verificação se existe um modal */}
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Abrindo chamado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   {/* codigo detalhes */}
                        <div className='formChamado'>
                            <div className='info'>
                                <span> De: Setor Comercial</span>
                                <div className='selectionSetor'>
                                    <span> Para:</span>
                                        <select>
                                            <option value="">Selecione seu setor</option>
                                            <option value="Compras">Compras</option>
                                            <option value="RH">RH</option>
                                            <option value="Financeiro">Financeiro</option>
                                            <option value="Comercial">Comercial</option>
                                            <option value="Suporte Interno">Suporte Interno</option>
                                            <option value="Redes">Redes</option>
                                            <option value="Sistemas">Sistemas</option>
                                            <option value="Telefonia">Telefonia</option>
                                            <option value="Estoque">Estoque</option>
                                            <option value="Frota">Frota</option>
                                        </select>
                                </div>                    
                            </div>

                        <div className='tituloChamado'>
                            <label>Título: </label>
                            <input type='text' name='titulo' placeholder='Digite aqui o título do chamado'></input>
                        </div>

                            <div className='descricao'>
                                <label>Descrição</label>
                                <textarea className='descr' name='descricao' rows="10" cols="40"/>
                            </div>
                            <button className='enviar'>Enviar</button>
                    </div>

                    
                </div>
                </div>
            </div>
        </div>

        {/* <header>
            <div className='line'>
                <div className='btns'>
                    <button className='meusChamados' >Meus Chamados</button>
                    <button className='abrir'  onClick={() => setIsOpen(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">Abrir Chamado</button>
                </div>

                <div className='search'>
                    <input type='text' name='pesquisaChamado' placeholder='pesquise um chamado' ></input>
                </div>

                <div className='image'>
                    <img src={logoNetserv} alt='img' className='logo'/>
                </div>
            </div>
         </header> */}

         <HeaderComponent />

         <main>
        <div className='chamados'> 
            <div className='abertos'>
                <div className='titulo'>
                    
                    <h1>Abertos</h1>
                </div>
                    {chamadosAberto.map((chamado) => {
                        return (
                            <div key={chamado.idChamado} className='chamado'>
                                <div>
                                    <div> 
                                        <a href='#'>
                                            <FontAwesomeIcon icon={faTrash} className='trash'/>    
                                        </a>   
                                    </div>
                                    <div>   
                                    <a href='#'> 
                                        <FontAwesomeIcon icon={faStar} className='star'/>
                                    </a>
                                    </div>
                                </div>
                                <div className='chamado-body'>
                                    <h2 className='nome'>{chamado.nome}</h2>
                                    <h3>Setor: {chamado.setor}</h3>
                                    <br></br>
                                    <p>{chamado.tituloChamado}</p>
                                    <p>{chamado.descricaoChamado}</p>
                                    <button>Ver mais</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='andamento'>
                <div className='titulo'>
                    <h1>Em andamento</h1>
                </div>
                {chamadosAtendimento.map((chamado) => {
                    return (
                        <div key={chamado.idChamado} className='chamado'>
                           <div>
                                <div> 
                                    <a href='#'>   
                                        <FontAwesomeIcon icon={faTrash} className='trash'/>
                                    </a>    
                                </div>
                                <div>   
                                    <a href='#'> 
                                        <FontAwesomeIcon icon={faStar} className='star'/>
                                    </a>
                                </div>
                            </div>
                            <div className='chamado-body-atendimento'>
                                <h2>{chamado.nome}</h2>
                                <h3>Setor: {chamado.setor}</h3>
                                <br></br>
                                <p>{chamado.tituloChamado}</p>
                                <p>{chamado.descricaoChamado}</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    )
                })}
            </div>

                <div className='cancelado'>
                    <div className='titulo'>
                        <h1>Cancelado</h1>
                    </div>
                </div>

                <div className='concluido'>
                    <div className='titulo'>
                        <h1>Concluídos</h1>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default HomeUser;