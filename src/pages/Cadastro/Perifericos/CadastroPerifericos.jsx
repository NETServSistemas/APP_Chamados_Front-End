import HeaderComponent from '../../../Componentes/Header';
import './CadastroPerifericos.css';
import React, { useState, useEffect } from 'react';
import { ChamadosTeste } from '../../../data/chamados';

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
            {/*ADICIONANDO O MODAL DIRETAMENTE DO BOOTSTRAP */}
            <div className={`modal ${modalIsOpen == false ? 'fade' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Lista de Pessoas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/*GRID LAYOUT PESSOAS*/}
                            <table class="table">
                                <thead class="thead-dark">
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
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='compCadastroPeriferico'>
                <HeaderComponent />
                <div className='containerPeriferico'>
                    <h1>Cadastro de Periféricos</h1>


                    <div className='form'>

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
                    </div>
                </div>

                <div className="verMais">
                    <div className='data'></div>
                    <button onClick={() => handleListarPessoas(pessoa.idPessoas)} data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">Ver Pessoas</button>
                </div>

                <div className='dados'></div>
            </div>
        </>
    )
}

export default CadastroPerifericos;