import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'



import loginImage from '../../Assets/LOGIN.png'
import logo from '../../Assets/LOGO.png'



const Login = () => {
    return(
        <div className='loginPage flex'>
            <div className='container flex'>


                <div className='imageDiv'>
                    <img src={loginImage} alt="Login Image"></img>

                    <div className='textDiv'>
                        <h2 className='title'>ASSIST ABROAD</h2>
                        <p>Welcome Back</p>
                    </div>
                    <div className='footerDiv flex'>
                        <span className='text'> Don't have an account?</span>
                    <Link to={'/register'}>
                    <button className='btn'>Sign Up</button></Link>
                    </div>
                </div>


                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={logo} alt="Logo Image"></img>
                        <h2>Welcome Back</h2>
                    </div>

                    <form action='' className='form grid'>
                        <span> Authetication error display</span>
                        <div className='inputDiv'>
                         <label htmlFor='username'>Username</label>
                         <div className='input flex'></div>   
                        </div>
                    </form>
                </div>


            </div>
       
        </div>
    )
}
export default Login