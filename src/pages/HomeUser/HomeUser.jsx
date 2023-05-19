import './HomeUser.css';
import React, { useEffect, useState } from 'react';
import logoNetserv from '../../../public/Logo2.png';
import { ChamadosUser } from '../../data/chamadosUser';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//component
const HomeUser = () => {

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


    return(
        <body>
        <header>
            <div className='line'>
                <div className='btns'>
                    <button className='meusChamados' >Meus Chamados</button>
                    <button className='abrir'>Abrir Chamado</button>
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
    </body>
    )
}

export default HomeUser;