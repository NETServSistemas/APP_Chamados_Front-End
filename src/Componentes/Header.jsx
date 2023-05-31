import React,{ useState } from "react";
import man from '../../public/mann.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar,faBars } from '@fortawesome/free-solid-svg-icons'


const HeaderComponent = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false); //inicializando o modal
    const [detalhes, setDetalhes] = useState([])
    const [detalhe, setDetalhe] = useState(null)
    const [detalhesChamadoID, setDetalhesChamadoID] = useState("")


    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
return (
    <>
    {/*ADICIONANDO O MODAL DIRETAMENTE DO BOOTSTRAP */}
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
        {/*FIM MODAL*/}

        <header>
            <div className='line'>
                <div className='btns'>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <FontAwesomeIcon icon={faBars}  className="menu"/>
                    </button>

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

               

                {/**navbar */}
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
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

                <div className='search'>
                    <input type='text' name='pesquisaChamado' placeholder='pesquise um chamado' ></input>
                </div>
            </div>
    </header>
    </>
);

}

export default HeaderComponent;