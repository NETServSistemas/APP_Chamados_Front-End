import HeaderComponent from '../../../Componentes/Header';
import { ChamadosTeste } from '../../../data/chamados';
import './CadastroModelos.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const CadastraModelo = (props) => {

    //criando um estado para cada campo do formulário
    const [descricao, setDescricao] = useState('');
    const [tipomodelo, setTipoModelo] = useState(null);
    const [tamanhoTela, setTamanhoTela] = useState('');
    const [qtdChips, setQtdChips] = useState('');
    const [memoria, setMemoria] = useState('');
    const [armazenamento, setArmazenamento] = useState('');
    const [portasUSB, setPortasUSB] = useState('');
    const [portasRede, setPortasRede] = useState('');
    const [marca, setMarca] = useState('');
    const [chamado, setChamado] = useState([]);
    const [modelo, setModelo] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const buscaModelo = async () => {
            const modelo = ChamadosTeste;
            setChamado(modelo);
        }
        buscaModelo();
    })

    const modeloChamado = ChamadosTeste[0];
    const modelos = modeloChamado;

    /*função de limpar campos */
    const handlelimpar = () => {
        setDescricao('');
        setTamanhoTela('');
        setQtdChips('');
        setTipoModelo('');
        setMemoria('');
        setArmazenamento('');
        setPortasUSB('');
        setPortasRede('');
        setMarca('');
    }

    //função do botão salvar
    const handleSalvar = () => {
        const dados = {
            descricao,
            tipomodelo,
            tamanhoTela,
            qtdChips,
            memoria,
            armazenamento,
            portasUSB,
            portasRede,
            marca
        }

        //Exibindo os dados na tela
        const dadosContainer = document.querySelector('.dados'); //selecionando a div onde aparecerá os dados 

        //CRIANDO ELEMENTOS DE LISTA PARA APRESENTAR NA TELA
        const lista = document.createElement('ul');

        //a cada dado inserido cria uma opção de lista
        for (const campo in dados) {
            const item = document.createElement('li');
            item.textContent = `${campo}: ${dados[campo]}`; //mostra na tela
            lista.appendChild(item);
        }

        dadosContainer.innerHTML = ''; //limpando o conteúdo anterior
        dadosContainer.appendChild(lista); //adicionando a lista à div dadosContainer
    }

    return (
        <>
            {/*MODAL EXCLUIR*/}
            <div className={`modal ${modalIsOpen == false ? 'fade' : ''}`} id="excluirModelo" tabIndex="-1" aria-labelledby="excluirModeloModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Alerta!</h5>
                        </div>
                        <div className="modal-body">
                            <p>Deseja excluir esta pessoa?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btnSim">Sim</button>
                            <button type="button" className="btnNao" data-bs-dismiss="modal">Não</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*MODAL EDITE */}
            <div className={`modal ${modalIsOpen == false ? 'fade' : ''}`} id="editarModelo" tabIndex="-1" aria-labelledby="criarModeloModalLabel" aria-hidden="true"> {/*fazemos uma verificação se existe um modal */}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Criando Modelos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* codigo detalhes */}
                            <div className='form'>

                                <div className='campo-select'>
                                    <label>Tipo de modelo:</label>
                                    <select name="tipomodelo" id="tipo" value={props.tipomodelo}
                                        onChange={(e) => setTipoModelo(e.target.value)}>
                                        <option value={null}>Selecione</option>
                                        <option value={"Notebook"}>Notebook</option>
                                        <option value={"Smartphone"}>Smartphone</option>
                                    </select>
                                </div>

                                {tipomodelo !== null && (
                                    <>
                                        {tipomodelo === 'Notebook' ? (
                                            <>
                                                <div className='campo'>
                                                    <label>Descrição:</label>
                                                    <input type='text' name='descricao' value={modelos.modeloPessoa[0].descricaoModelo}
                                                        placeholder='Descreva o modelo'
                                                        onChange={(e) => setDescricao(e.target.value)}
                                                    />
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Tamanho da tela:</label>
                                                    <select name="tamanhotela" id="tela" value={modelos.modeloPessoa[0].tamanhoTela}
                                                        onChange={(e) => setTamanhoTela(e.target.value)}>
                                                        <option>12</option>
                                                        <option>13</option>
                                                        <option>14</option>
                                                        <option>15</option>
                                                        <option>16</option>
                                                        <option>17</option>
                                                    </select>
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Quantidade de Chips:</label>
                                                    <select name="qntdChips" id="chips" value={modelos.modeloPessoa[0].QntdChips}
                                                        onChange={(e) => setQtdChips(e.target.value)}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>

                                                <div className='campo'>
                                                    <label>Memória:</label>
                                                    <input type='text' name='memoria' value={modelos.modeloPessoa[0].Memoria}
                                                        onChange={(e) => setMemoria(e.target.value)} placeholder='GB' />
                                                </div>

                                                <div className='campo'>
                                                    <label>Armazenamento:</label>
                                                    <input type='text' name='armazenamento' value={modelos.modeloPessoa[0].Armazenamento}
                                                        onChange={(e) => setArmazenamento(e.target.value)} placeholder='GB' />
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Portas USB:</label>
                                                    <select name="usb" id="usb" value={modelos.modeloPessoa[0].PortasUSB}
                                                        onChange={(e) => setPortasUSB(e.target.value)} >
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Portas de Rede:</label>
                                                    <select name="portasrede" id="rede" value={modelos.modeloPessoa[0].PortasRede}
                                                        onChange={(e) => setPortasRede(e.target.value)}>
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Marca:</label>
                                                    <select name="marca" id="marca" value={modelos.modeloPessoa[0].MarcaModelo}
                                                        onChange={(e) => setMarca(e.target.value)}>
                                                        <option>Nenhum</option>
                                                        <option>Acer</option>
                                                        <option>Dell</option>
                                                        <option>Vaio</option>
                                                        <option>Asus</option>
                                                    </select>
                                                </div>

                                                <div className='buttons-salvar'>
                                                    <button className='salvar' onClick={handleSalvar}>Salvar</button>
                                                    <button className='limpar' onClick={handlelimpar}>Limpar</button>
                                                </div>
                                            </>
                                        ) : tipomodelo === 'Smartphone' ? (
                                            <>
                                                <div className='campo'>
                                                    <label>Descrição:</label>
                                                    <input type='text' name='descricao' value={props.descricao}
                                                        placeholder='Descreva o modelo'
                                                        onChange={(e) => setDescricao(e.target.value)}
                                                    />
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Tamanho da tela:</label>
                                                    <select name="tamanhotela" id="tela" value={props.tamanhoTela}
                                                        onChange={(e) => setTamanhoTela(e.target.value)}>
                                                        <option>0</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                    </select>
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Quantidade de Chips:</label>
                                                    <select name="qntdChips" id="chips" value={props.qtdChips}
                                                        onChange={(e) => setQtdChips(e.target.value)}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>

                                                <div className='campo'>
                                                    <label>Memória:</label>
                                                    <input type='text' name='memoria' value={props.memoria}
                                                        onChange={(e) => setMemoria(e.target.value)} placeholder='GB' />
                                                </div>

                                                <div className='campo'>
                                                    <label>Armazenamento:</label>
                                                    <input type='text' name='armazenamento' value={props.armazenamento}
                                                        onChange={(e) => setArmazenamento(e.target.value)} placeholder='GB' />
                                                </div>

                                                <div className='campo-select'>
                                                    <label>Marca:</label>
                                                    <select name="marca" id="marca" value={props.marca}
                                                        onChange={(e) => setMarca(e.target.value)}>
                                                        <option>Nenhum</option>
                                                        <option>Positivo</option>
                                                        <option>Lenovo</option>
                                                        <option>Motorola</option>
                                                        <option>Sansung</option>
                                                    </select>
                                                </div>


                                                <div className='buttons-salvar'>
                                                    <button className='salvar' onClick={handleSalvar}>Salvar</button>
                                                    <button className='limpar' onClick={handlelimpar}>Limpar</button>
                                                </div>

                                            </>
                                        ) : null}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='CompCadastro'>
                <HeaderComponent />
                <div className='container'>

                    <div className="table-dialog">
                        <div className="table-content">
                            <div className="table-header">
                                <h5 className="table-title" id="staticBackdropLabel">Lista de Modelos</h5>
                            </div>
                            <div className="table-body">

                                {/*GRID LAYOUT PESSOAS*/}
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Tela</th>
                                            <th scope="col">Chips</th>
                                            <th scope="col">Memória</th>
                                            <th scope="col">Armazenamento</th>
                                            <th scope="col">Portas USB</th>
                                            <th scope="col">Portas Rede</th>
                                            <th scope="col">Marca</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{modelos.modeloPessoa[0].descricaoModelo}</td>
                                            <td>{modelos.modeloPessoa[0].tamanhoTela}</td>
                                            <td>{modelos.modeloPessoa[0].QntdChips}</td>
                                            <td>{modelos.modeloPessoa[0].Memoria}</td>
                                            <td>{modelos.modeloPessoa[0].Armazenamento}</td>
                                            <td>{modelos.modeloPessoa[0].PortasUSB}</td>
                                            <td>{modelos.modeloPessoa[0].PortasRede}</td>
                                            <td>{modelos.modeloPessoa[0].MarcaModelo}</td>
                                            <td>
                                                <Link to="#">
                                                    <FontAwesomeIcon icon={faPenToSquare} className="btnEdit"
                                                        data-bs-toggle="modal" data-bs-target="#editarModelo" />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="#">
                                                    <FontAwesomeIcon icon={faTrash} className="btnExcluir"
                                                        data-bs-toggle="modal" data-bs-target="#excluirModelo" />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{modelos.modeloPessoa[0].descricaoModelo}</td>
                                            <td>{modelos.modeloPessoa[0].tamanhoTela}</td>
                                            <td>{modelos.modeloPessoa[0].QntdChips}</td>
                                            <td>{modelos.modeloPessoa[0].Memoria}</td>
                                            <td>{modelos.modeloPessoa[0].Armazenamento}</td>
                                            <td>{modelos.modeloPessoa[0].PortasUSB}</td>
                                            <td>{modelos.modeloPessoa[0].PortasRede}</td>
                                            <td>{modelos.modeloPessoa[0].MarcaModelo}</td>
                                            <td>
                                                <Link to="#">
                                                    <FontAwesomeIcon icon={faPenToSquare} className="btnEdit"
                                                        data-bs-toggle="modal" data-bs-target="#editarModelo" />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="#">
                                                    <FontAwesomeIcon icon={faTrash} className="btnExcluir"
                                                        data-bs-toggle="modal" data-bs-target="#excluirModelo" />
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="addModelo">
                            <Link to="#">
                                <button className='btnAdd' data-bs-toggle="modal" data-bs-target="#criarModelo">Adicionar Modelo</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastraModelo; 