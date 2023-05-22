import './Home.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import logoNetserv from '../../../public/Logo2.png'
import { ChamadosTeste } from '../../data/chamados';
import Modal from 'react-modal';

async function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 Modal.setAppElement("#root"); //referencia do modal

const Home = () =>{

    const [modalIsOpen, setIsOpen] = React.useState(false); //inicializando o modal

    //função para abrir o modal
    function openModal() {
        setIsOpen(true);
      }

      //função para fechar o modal
      function closeModal() {
        setIsOpen(false);
      }

    const [chamados, setChamados] = useState([])
    const [chamadosAberto, setChamadossAberto] = useState([])
    const [chamadosAtendimento, setChamadosAtendimento] = useState([])
    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        const buscaChamados = async() => {
            const chamados = ChamadosTeste;
            setChamados(chamados);
            setChamadossAberto(chamados.filter((c) => c.statusChamado == "ABERTO"));
            setChamadosAtendimento(chamados.filter((c) => c.statusChamado == "ANDAMENTO"))
        }

        buscaChamados();
    }, [])

    if(!chamados || chamados.length == 0) {
        return (
            <div className="c-loader"></div>
        )
    }

    return (
    <body>
        <header>
            <div className='line'>
                <div className='btns'>
                    <button className='filtro' >Filtro
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="iconFunil">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                    </button>

                    <button className='urgentes'>Urgentes
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="iconStar">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className='search'>
                    <input type='text' name='pesquisaChamado' placeholder='pesquise um chamado' ></input>
                </div>

                <div className='image'>
                    <img src={logoNetserv} alt='img' className='logo'/>
                </div>
            </div>
         </header>

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
                                    <button onClick={openModal}>Ver mais</button>

                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Example Modal"
                                        overlayClassName="modal-overlay"
                                        className="modal-content"
                                    >
                                         
                                    </Modal>
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
        
    </body>
    )    
}
    
export default Home;