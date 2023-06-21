import React, { useEffect, useState } from "react";
import man from '../../public/mann.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DetalhesTeste } from '../data/detalhes.js'
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false); //inicializando o modal
    const [detalhes, setDetalhes] = useState([])
    const [detalhe, setDetalhe] = useState(null)
    const [detalhesChamadoID, setDetalhesChamadoID] = useState("")

    useEffect(() => {
        const getDetalhes = async () => {
            const detalhes = DetalhesTeste //aqui pegamos os dados do nosso arquivo que contém um JSON e trazemos a nosso componente
            setDetalhes(detalhes)
        }

        getDetalhes() //executando a função criada 
    })


    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return (
        <>
            <div className={`modal ${modalIsOpen == false ? 'fade' : ''}`} id="abrirChamadoModal" tabindex="-1" aria-labelledby="abrirChamadoModalLabel" aria-hidden="true"> {/*fazemos uma verificação se existe um modal */}
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
                                    <textarea className='descr' name='descricao' rows="10" cols="40" />
                                </div>
                                <button className='enviar'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*fim modal*/}

            <header>
                <div className='line'>
                    <div className='btns'>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <FontAwesomeIcon icon={faBars} className="menu" />
                        </button>

                        <Link to="/">
                            <button className='filtro' >Home</button>
                        </Link>



                        <button className='abrirChamado' data-bs-toggle="modal" data-bs-target="#abrirChamadoModal">Abrir Chamado</button>

                    </div>

                    {/**navbar */}
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className='bodyInfo'>
                                <img src={man} alt='img' className='img' />
                                <h2>Ricardo Cardoso</h2>
                                <h3>Setor: Sistemas</h3>
                                <span>Email: ricardo.cardoso@netserv.com.br</span>
                            </div>

                            <div className="buttons">
                                <div className='bodylink'>
                                    <a href='/CadastroModelos'>Cadastro de Modelos</a>
                                </div>

                                <div className='bodylink'>
                                    <a href='/CadastroPerifericos'>Cadastro de Periféricos</a>
                                </div>

                                <div className='bodylink'>
                                    <a href='/CadastraPessoas'>Cadastro de Pessoas</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='search'>
                        <input type='text' name='pesquisaChamado' placeholder='pesquise um chamado' ></input>
                    </div>
                </div>

                <div className="bemVindo">
                    <span>Bem vindo Ricardo Cardoso</span>
                    <img src={man} alt='img' className='img' />
                </div>
            </header>
        </>
    );

}

export default HeaderComponent;