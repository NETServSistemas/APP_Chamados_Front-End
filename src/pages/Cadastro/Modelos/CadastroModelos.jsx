import HeaderComponent from '../../../Componentes/Header';
import './CadastroModelos.css';
import React, {useState} from 'react';

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
            <HeaderComponent />
            <div className='container'>
                <h1>Cadastro de Modelos</h1>
                    <div className='form'>
                        
                        <div className='campo'>
                            <label>Tipo de modelo:</label>
                            <select name="tipomodelo" id="tipo" value={props.tipomodelo}
                            onChange={(e) => setTipoModelo(e.target.value)}>
                                <option value={null}>Selecione</option>
                                <option value={"Notebook"}>Notebook</option> {/*colocando a opção que será usada para renderizar o formulário correto no value */}
                                <option value={"Smartphone"}>Smartphone</option>
                            </select>
                        </div>
                        
                        {/*verificação do tipo de modelo para trazer o formulário correspondente*/}
                        { tipomodelo !== null && (
                            <>
                                {tipomodelo === 'Notebook' ? (
                                        <>   {/*renderiza o form do notebook */}
                                        <div className='campo'>
                                            <label>Descrição:</label>
                                            <input type='text' name='descricao' value={props.descricao} 
                                            placeholder='Descreva o modelo'
                                            onChange={(e) => setDescricao(e.target.value)} 
                                            />
                                        </div>
                
                                        <div className='campo'>
                                            <label>Tamanho da tela:</label>
                                            <select name="tamanhotela" id="tela" value={props.tamanhoTela}
                                            onChange={(e) => setTamanhoTela(e.target.value)}> 
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                            </select>
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
                                            onChange={(e) => setPortasUSB(e.target.value)} > 
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                
                                        <div className='campo'>
                                            <label>Portas de Rede:</label>
                                            <select name="portasrede" id="rede" value={props.portasRede}
                                            onChange={(e) => setPortasRede(e.target.value)}> 
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                
                                        <div className='campo'>
                                            <label>Marca:</label>
                                            <select name="marca" id="marca" value={props.marca}
                                            onChange={(e) => setMarca(e.target.value)}> 
                                                <option>Nenhum</option>
                                                <option>Acer</option>
                                                <option>Dell</option>
                                                <option>Vaio</option>
                                                <option>Asus</option>
                                            </select>
                                        </div>
                                        
                                        <div className='btns'>
                                            <button className='salvar' onClick={handleSalvar}>Salvar</button>
                                            <button className='limpar' onClick={handlelimpar}>Limpar</button>
                                        </div>
                                        </>
                                    ): tipomodelo === 'Smartphone' ?( /*renderiza o form do notebook */
                                        <>   
                                        <div className='campo'>
                                            <label>Descrição:</label>
                                            <input type='text' name='descricao' value={props.descricao} 
                                            placeholder='Descreva o modelo'
                                            onChange={(e) => setDescricao(e.target.value)} 
                                            />
                                        </div>
                
                                        <div className='campo'>
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
                                        
                                        <div className='btns'>
                                            <button className='salvar' onClick={handleSalvar}>Salvar</button>
                                            <button className='limpar' onClick={handlelimpar}>Limpar</button>
                                        </div>
                                        </>
                                    ): null}
                                </>
                        )}          
                            
                </div>
            </div>
            <div className='dados'></div>
        </div>
    )
}

export default CadastraModelo; 