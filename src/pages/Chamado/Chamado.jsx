import './Chamado.css';
import React from 'react';



//my component
const Chamado = (props) => {
    return (
        <div className='Comp'>
            <div className='setor'>{props.setor}</div>
            <div className='titulo'>{props.titulo}</div>
            <div className='descricao'>{props.descricao}</div>

            <h1>Abrindo chamado</h1>

            <div className='formChamado'>
                <div className='info'>
                    <span> De: Setor Comercial</span>
                    <div className='selectionSetor'>
                         <span> Para:</span>
                            <select value={props.setor}>
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
                    <input type='text' name='titulo' placeholder='Digite aqui o título do chamado' value={props.titulo}></input>
                </div>

                    <div className='descricao'>
                        <label>Descrição</label>
                        <textarea className='descr' name='descricao' value={props.descricao} rows="10" cols="40"/>
                    </div>
            </div>

            <button className='enviar'>Enviar</button>
        </div>
    )
}

export default Chamado;
