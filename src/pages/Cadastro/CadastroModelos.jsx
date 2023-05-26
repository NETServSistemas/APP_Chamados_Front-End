import './CadastroModelos.css';
import React, {useState} from 'react';

const CadastraModelo = (props) => {

    //criando um estado para cada campo do formulário
    const [descricao, setDescricao] = useState('');
    const [tipomodelo, setTipoModelo] = useState('');
    const [tamanhoTela, setTamanhoTela] = useState('');
    const [qtdChips, setQtdChips] = useState('');
    const [memoria, setMemoria] = useState('');
    const [armazenamento, setArmazenamento] = useState('');
    const [portasUSB, setPortasUSB] = useState('');
    const [portasRede, setPortasRede] = useState('');
    const [marca, setMarca] = useState('');

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
    for(const campo in dados){
        const item = document.createElement('li');
        item.textContent = `${campo}: ${dados[campo]}`; //mostra na tela
        lista.appendChild(item);
    }

    dadosContainer.innerHTML = ''; //limpando o conteúdo anterior
    dadosContainer.appendChild(lista); //adicionando a lista à div dadosContainer
}

    return(
        <div className='CompCadastro'>

            <div className='container'>
                <h1>Cadastro de Modelos</h1>
                    <div className='form'>
                        <div className='campo'>
                            <label>Descrição:</label>
                            <input type='text' name='descricao' value={props.descricao} 
                            placeholder='Descreva o modelo'
                            onChange={(e) => setDescricao(e.target.value)} 
                            />
                        </div>

                        <div className='campo'>
                            <label>Tipo de modelo:</label>
                            <select name="tipomodelo" id="tipo" value={props.tipomodelo}
                            onChange={(e) => setTipoModelo(e.target.value)}> </select>
                        </div>

                        <div className='campo'>
                            <label>Tamanho da tela:</label>
                            <select name="tamanhotela" id="tela" value={props.tamanhoTela}
                            onChange={(e) => setTamanhoTela(e.target.value)}> </select>
                        </div>

                        <div className='campo'>
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
                            onChange={(e) => setMemoria(e.target.value)} placeholder='GB'/> 
                        </div>

                        <div className='campo'>
                            <label>Armazenamento:</label>
                            <input type='text' name='armazenamento' value={props.armazenamento}
                            onChange={(e) => setArmazenamento(e.target.value)}  placeholder='GB'/> 
                        </div>

                        <div className='campo'>
                            <label>Portas USB:</label>
                            <select name="usb" id="usb" value={props.portasUSB}
                            onChange={(e) => setPortasUSB(e.target.value)} > </select>
                        </div>

                        <div className='campo'>
                            <label>Portas de Rede:</label>
                            <select name="portasrede" id="rede" value={props.portasRede}
                            onChange={(e) => setPortasRede(e.target.value)}> </select>
                        </div>

                        <div className='campo'>
                            <label>Marca:</label>
                            <select name="marca" id="marca" value={props.marca}
                            onChange={(e) => setMarca(e.target.value)}> </select>
                        </div>

                        <div className='btns'>
                            <button className='salvar' onClick={handleSalvar}>Salvar</button>
                            <button className='limpar'>Limpar</button>
                        </div>
                </div>
            </div>
            <div className='dados'></div>
        </div>
    )
}

export default CadastraModelo; 