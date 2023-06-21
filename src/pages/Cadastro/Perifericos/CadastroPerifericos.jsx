import HeaderComponent from '../../../Componentes/Header';
import './CadastroPerifericos.css';
import React, { useState, useEffect } from 'react';
import { ChamadosTeste } from '../../../data/chamados';
import { Link } from 'react-router-dom';

const CadastroPerifericos = (props) => {
    //criando um estado para cada campo do formulário
    const [descricao, setDescricao] = useState('');
    const [tipoPeriferico, setTipoPeriferico] = useState(null);
    const [marca, setMarcaPeriferico] = useState('');
    const [quantidade, setQtdPerifericos] = useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [periferico, setPeriferico] = useState([]);

    useEffect(() => {
        const buscaPeriferico = async () => {
            const periferico = ChamadosTeste;
            setChamado(periferico);
        }
        buscaPeriferico();
    })

    const perifericosAtivo = ChamadosTeste[0];
    const perifericos = perifericosAtivo;

    /*função de limpar campos */
    const handlelimpar = () => {

        setDescricao('');
        setTipoPeriferico('');
        setMarcaPeriferico('');
        setQtdPerifericos('');
    }

    //função do botão salvar
    const handleSalvar = () => {
        const dados = {
            descricao,
            tipoPeriferico,
            marca,
            quantidade
        }

        //Exibindo dados na tela
        const dadosContainer = document.querySelector('.dados')

        //CRIANDO ELEMENTOS DE LISTA PARA APRESENTAR NA TELA
        const lista = document.createElement('ul');

        //a cada dado inserido cria uma opção de lista
        for (const campo in dados) {
            const item = document.createElement('li');
            item.textContent = `${campo}: ${dados[campo]}`; //mostra na tela
            lista.appendChild(item);
        }

        dadosContainer.innerHTML = '';
        dadosContainer.appendChild(lista);
    }

    return (
        <>

            <div className='compCadastroPeriferico'>
                <HeaderComponent />
                <div className='containerPeriferico'>
                    <div className="table-dialog">
                        <div className="table-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Lista de Periféricos</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                {/*GRID LAYOUT PESSOAS*/}
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Marca</th>
                                            <th scope="col">Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{perifericos.perifericosPessoa[0].descricaoPeriferico}</td>
                                            <td>{perifericos.perifericosPessoa[0].marcaPeriferico}</td>
                                            <td>{perifericos.perifericosPessoa[0].quantidade}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{perifericos.perifericosPessoa[0].descricaoPeriferico}</td>
                                            <td>{perifericos.perifericosPessoa[0].marcaPeriferico}</td>
                                            <td>{perifericos.perifericosPessoa[0].quantidade}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="addPerifericos">
                        <Link to="#">
                            <button className="btnAdd">Adicionar Periféricos</button>
                        </Link>
                    </div>

                    {/* <div className='form'>

                        <div className='campo'>
                            <label>Descrição:</label>
                            <input type='text' name='descricao' value={props.descricao}
                                placeholder='Descreva o modelo'
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>

                        <div className='campo'>
                            <label>Tipo de Periférico:</label>
                            <select name="tipoperiferico" id="tela" value={props.tipoPeriferico}
                                onChange={(e) => setTipoPeriferico(e.target.value)}>
                                <option>Nenhum</option>
                                <option>Mouse</option>
                                <option>Teclado</option>
                                <option>Fone de ouvido</option>
                                <option>Fonte</option>
                                <option>Adaptador de fone de ouvido</option>
                                <option>Monitor</option>
                            </select>
                        </div>

                        <div className='campo'>
                            <label>Marca:</label>
                            <select name="marca" id="tela" value={props.marca}
                                onChange={(e) => setMarcaPeriferico(e.target.value)}>
                                <option>Nenhum</option>
                                <option>Philco</option>
                                <option>Aoc</option>
                                <option>LG</option>
                                <option>Positivo</option>
                                <option>Lenovo</option>
                            </select>
                        </div>

                        <div className='campo'>
                            <label>Quantidade Perifericos:</label>
                            <input type='text' name='qtdPerifericos' value={props.quantidade}
                                placeholder='Descreva o modelo'
                                onChange={(e) => setQtdPerifericos(e.target.value)}
                            />
                        </div>

                        <div className='btns'>
                            <button className='salvar' onClick={() => handleSalvar()}>Salvar</button>
                            <button className='limpar' onClick={() => handlelimpar()}>Limpar</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CadastroPerifericos;