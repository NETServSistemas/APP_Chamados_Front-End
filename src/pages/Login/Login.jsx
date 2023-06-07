import './Login.css'
import React, { useState} from 'react'
import logo from '../../../public/Logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeLowVision, faEye} from '@fortawesome/free-solid-svg-icons'


const Login = (props) => {
   
    //lógica botão olhinho da senha
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='CompLogin'>
            <div className='emailUser'>{props.email}</div>
            <div className='senhaUser'>{props.senha}</div>

            <div className='formLogin'>
                <div className='logoLogin'>
                    <img src={logo} alt='img' className='img'/> 
                </div>

                <div className='campoLogin'>
                    <label> Email:</label>
                    <input type='text' name='email' className='email'/>
                </div>

                <div className='campoLogin'>
                    <label> Senha:</label>
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} className='password'/>
                    
                    <button onClick={toggleShowPassword}>
                        {showPassword ? <FontAwesomeIcon icon={faEyeLowVision} /> : <FontAwesomeIcon icon={faEye} /> }
                    </button>
                </div>

                <div className='btnLogin'>
                    <button className='login'>Entrar</button>
                </div>
                <div className='senhaEsqueci'>
                    <a href='#'>Esqueci minha senha</a>
                </div>
            </div>
        </div>
        
    )
}

export default Login