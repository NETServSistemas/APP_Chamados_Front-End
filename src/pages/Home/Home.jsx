import './Home.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar} from '@fortawesome/free-solid-svg-icons'
import { ChamadosTeste } from '../../data/chamados';
import { DetalhesTeste } from '../../data/detalhes';
import man from '../../../public/mann.jpg';
import HeaderComponent from '../../Componentes/Header';
import { Link } from 'react-router-dom';


async function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 //Modal.setAppElement("#modal"); //referencia do modal

const Home = () =>{

    const [modalIsOpen, setIsOpen] = React.useState(false); //inicializando o modal
    const [detalhes, setDetalhes] = useState([])
    const [detalhe, setDetalhe] = useState(null)
    const [detalhesChamadoID, setDetalhesChamadoID] = useState("")


    //efeitos colaterais que executa operações que não está totalmente ligada ao componente em si
    //esses efeitos podem ser a busca por dados de uma API ou alteração do DOM, registrar eventos etc
    useEffect(() => {
        const getDetalhes = async() => {
            const detalhes = DetalhesTeste //aqui pegamos os dados do nosso arquivo que contém um JSON e trazemos a nosso componente
            setDetalhes(detalhes)
        }

        getDetalhes() //executando a função criada 
    })

    //função para abrir o modal
    const handleVerDetalhesChamado = (idChamado) => { //esta função recebe como parâmetro o idChamado que está no JSON do arq chamados.js
        setDetalhesChamadoID(idChamado)
        const detalhe = detalhes.filter(d => d.idChamado = idChamado)[0]; //filtra todos os ids dos chamados do array de chamados
        setDetalhe(detalhe);
        setIsOpen(true); //abre o modal com esta função
      }

      //função para fechar o modal
      function closeModal() {   //fecha o modal deixando null os métodos que ativa ele
        setDetalhesChamadoID(null)
        setDetalhe(null);
        setIsOpen(false); //fecha o modal da tela
      }

    //TRAZENDO OS CHAMADOS DO JSON chamados.js
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

    console.log(detalhe)

    //pegando a data
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return (
    <>
        {/*ADICIONANDO O MODAL DIRETAMENTE DO BOOTSTRAP */}
        <div className={`modal ${modalIsOpen == false  ? 'fade' : ''}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> {/*fazemos uma verificação se existe um modal */}
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Detalhes do chamado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   {/* codigo detalhes */}
                   <div className='detalhes-body'>    
                            <h3 className='nmr'>Numero do chamado: {detalhe ? detalhe.numero : ""}</h3> {/*verificando se o user apertou o botão para trazer o modal*/} 
                        
                        <div className='header'>
                            <div className='identity'>
                                 <img src={man} alt='img' className='img'/> 
                            </div>

                            <div className='details'>
                                <h2>{detalhe ? detalhe.nome:  ""}</h2> {/*verificando se o user apertou o botão para trazer o modal*/}
                                <h3>Setor: {detalhe ? detalhe.setor : ""}</h3> {/*verificando se o user apertou o botão para trazer o modal*/}
                                <h3>Setor de destino: {detalhe ? detalhe.destino : ""}</h3>

                                <h3 className='contato'>
                                    <span>{detalhe ? detalhe.email : ""}</span>
                                </h3>
                            </div>
                            
                        </div>
                        
                        <br></br>
                        <br></br>
                        <p>{detalhe ? detalhe.descricaoDetalhe : ""}</p> {/*verificando se o user apertou o botão para trazer o modal*/}
                    </div>

                    <div className='atenderRecusar'>
                        <Link to="/Comentario">
                            <button className='Atender' >Atender</button>
                        </Link>
                        <button className='Recusar'>Recusar</button>
                    </div>

                    
                </div>
                </div>
            </div>
        </div>

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
                                    <button onClick={() => handleVerDetalhesChamado(chamado.idChamado)} data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais</button> 
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
                                <button onClick={() => handleVerDetalhesChamado(chamado.idChamado)} data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mais</button>
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

            <div className='Urgentes'>
                <div className='titulo'>
                    <h1>Urgentes</h1>
                </div>
            </div>
        </div>
        </main>
        
        
    </>
    )    
}
    
export default Home;