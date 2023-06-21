import React, { useEffect, useState } from "react";
import './Pessoas.css'
import HeaderComponent from '../../../Componentes/Header';
import { ChamadosTeste } from '../../../data/chamados';
import { Link } from 'react-router-dom';



const CadastraPessoas = (props) => {
    //criando um estado para cada campo do formulário
    const [chamado, setChamado] = useState([]);
    const [pessoa, setPessoa] = useState([]);

    const [nome, setNome] = useState([]);
    const [setor, setSetor] = useState([]);
    const [gestor, setGestor] = useState([]);
    const [ativos, setAtivos] = useState([]);


    useEffect(() => {
        const buscaChamado = async () => {
            const chamado = ChamadosTeste;
            setChamado(chamado);
        }

        const buscaPessoa = async () => {
            const pessoa = ChamadosTeste;
            setChamado(pessoa);
        }

        buscaChamado();
    })

    const chamadoAtivos = ChamadosTeste[0];
    const pessoas = chamadoAtivos;



    //limpar
    const handlelimpar = () => {
        setNome('');
        setSetor('');
        setGestor('');
        setAtivos('')
    }

    //salvar 
    const handleSalvar = () => {
        const dados = {
            nome,
            setor,
            gestor,
            ativos
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
            <div className="CompCadastro">
                <HeaderComponent />

                <div className="container">
                    <div className="table-dialog">
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
                                            <th scope="col">Nome</th>
                                            <th scope="col">Setor</th>
                                            <th scope="col">Lider</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{pessoas.pessoa.nomeChamado}</td>
                                            <td>{pessoas.conversaChamado[0].setor}</td>
                                            <td>{pessoas.conversaChamado[0].gestor}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{pessoas.pessoa.nomeChamado}</td>
                                            <td>{pessoas.conversaChamado[0].setor}</td>
                                            <td>{pessoas.conversaChamado[0].gestor}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="addPessoa">
                        <Link to="#">
                            <button className="btnAdd">Adicionar Pessoa</button>
                        </Link>


                    </div>
                    {/* <div className='form'>

                        <div className='campo'>
                            <label>Nome:</label>
                            <input type='text' name='nome' value={props.nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className='campo'>
                            <label>Setor:</label>
                            <select name="setor" id="tela" value={props.setor}
                                onChange={(e) => setSetor(e.target.value)}>
                                <option>Nenhum</option>
                                <option>Comercial</option>
                                <option>Compras</option>
                                <option>Estoque</option>
                                <option>RH</option>
                                <option>Redes</option>
                                <option>Suporte Interno</option>
                                <option>Sistemas</option>
                                <option>Financeiro</option>
                            </select>
                        </div>

                        <div className='campo'>
                            <label>Gestor:</label>
                            <input type='text' name='gestor' value={props.gestor}
                                onChange={(e) => setGestor(e.target.value)}
                            />
                        </div>

                        <div className='campo'>
                            <label>Ativos:</label>
                            <input type='text' name='ativos' value={props.ativos}
                                onChange={(e) => setAtivos(e.target.value)}
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



export default CadastraPessoas;