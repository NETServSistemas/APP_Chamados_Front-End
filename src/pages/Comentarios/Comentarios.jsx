import './Comentarios.css'
import React, { useEffect, useState } from 'react';
import {Comentario} from '../../data/comentarios';
import {Respostas} from '../../data/respostas';
import man from '../../../public/mann.jpg';
import man2 from '../../../public/man2.jpg'
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistance, subDays } from 'date-fns'
import {ChamadosTeste} from '../../data/chamados';

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

    //respostas
    const [respostas, setRespostas] = useState([]);
    const [respostasAbertas, setRespostasAbertas] = useState([]);

    useEffect(() => {
        const buscaRespostas = async() => {
            const respostas = Respostas;
            setRespostas(respostas);
            setRespostasAbertas(respostas.filter((r) => r.statusResposta == "ABERTO"))
        }

        buscaRespostas();
    }, [])

    //ativos
    const chamado = ChamadosTeste[0];

    const ativoPessoa = chamado.ativoPessoa;



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

                            <div className='ativos'>
                                <h3>Ativos: </h3>
                                <div className='perifericos'>
                                    {ativoPessoa[0].nomeAtivo} {ativoPessoa[0].marcaAtivo.nomeMarcaAtivo} {ativoPessoa[0].modeloAtivo}
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

                    <div className='resposta'>
                        <div className='header-info'>
                            <div className='icon'>
                                <img src={man2} alt='img' className='img'/>
                            </div>
                            <div className='informa'>
                                <h2>{respostas.nome}</h2>
                                <h3>{respostas.setor}</h3>
                                <br></br>
                                <p>{respostas.descricaoResposta}</p>
                                <br></br>
                                <p>{respostas.ass}</p>
                            </div>
                        </div>
                        <div className='add'>
                            <button>+</button>
                        </div>
                    </div>
            </div>
        </body>
    )
}

export default Comentarios