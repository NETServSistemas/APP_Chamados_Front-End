import React, {useState} from "react";
import './Pessoas.css'

const CadastraPessoas = (props) => {
    //criando um estado para cada campo do formulário
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [gestor, setGestor] = useState('');
    const [ativos, setAtivos] = useState('');

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
        for(const campo in dados){
            const item = document.createElement('li');
            item.textContent = `${campo}: ${dados[campo]}`; //mostra na tela
            lista.appendChild(item);
        }

        dadosContainer.innerHTML = ''; //limpando o conteúdo anterior
        dadosContainer.appendChild(lista); //adicionando a lista à div dadosContainer
    }

    return(
        <div className="CompCadastro">
            <div className="container">
                <h1>Cadastro de Pessoas</h1>
                <div className='form'>

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
            </div>
        </div>

        <div className='dados'></div>
        </div>
    )


}



export default CadastraPessoas;