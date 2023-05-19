import './Comentarios.css'
import React, { useEffect, useState } from 'react';
import {Comentario} from '../../data/comentarios';
import man from '../../../public/mann.jpg';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistance, subDays } from 'date-fns'

//my component
const Comentarios = () => {

    const [comentarios, setComentarios] = useState([]);
  
    useEffect(() => {
        const buscaComentarios = async() => {
            const comentarios = Comentario;
            setComentarios(comentarios);
        }

        buscaComentarios();
    })

    return(
        <body>
        <div key={comentarios.idComentario} className='infoComentarios'>
                <div className='detailsComentarios'>
                    <div className='bodyDetails'>
                        <img src={man} alt='img' className='img'/>
                        <div className='containerComentarios'>
                            <h2>{comentarios.nome}</h2>

                            <div className='star'>
                                <h3>Setor: {comentarios.setor}</h3>
                                <FontAwesomeIcon icon={faStar} className='starFavoritar'/>
                            </div>
                        </div>
                        
                       

                    </div>
                    
                    

                    <div className='coment'>
                        <p>{comentarios.descricaoComentario}</p>
                        <br></br>
                        <p>{comentarios.ass}</p>
                    </div>

                    <div className='date'>
                        <div className='criado'>
                            <h3>Criado: {formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })}</h3>
                        </div>
                        <div className='status'>
                            <h3>Situação: {comentarios. statusComentario}</h3> 
                        </div>
                    </div>
                </div>

            </div>
            
                

        </body>
    )
}

export default Comentarios