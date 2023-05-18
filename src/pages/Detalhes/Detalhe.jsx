import Chamado from '../Chamado/Chamado';
import './Detalhe.css';
import React, { useEffect, useState } from 'react';
import { DetalhesTeste } from '../../data/detalhes';


//component
const Detalhe = () => {

    const [detalhes, setDetalhes] = useState([]);
    
    useEffect(() => {
        const buscaDetalhes = async() => {
            const detalhes = DetalhesTeste;
            setDetalhes(detalhes);
        }

        buscaDetalhes();
    })

    if(!detalhes || detalhes.length == 0){
        return (
            <div className="c-loader"></div>
        )
    }

    //pegando a data
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return(
        <div key={detalhes.idDetalhe} className='detalhe'>
            <div className='detalhes-body'>
                <h3 className='nmr'>{detalhes.numero}</h3>
                <h2>{detalhes.nome}</h2>
                <h3>Setor: {detalhes.setor}</h3>
                <br></br>
                <br></br>
                <p>{detalhes.descricaoDetalhe}</p>
            </div>

            <div className='buttons'>
                <button className='Atender'>Atender</button>
                <button className='Recusar'>Recusar</button>
            </div>

            <div className='date'>
                <p> {today.toLocaleDateString()}</p>
            </div>
        </div>
    )
}


export default Detalhe