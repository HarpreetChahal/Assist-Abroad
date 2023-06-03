import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


//Assets
import image from '../../Assets/LOGIN.png'
import logo from '../../Assets/LOGO.png'

//Icons 
import {FcGoogle} from 'react-icons/Fc'
import {MdEmail} from 'react-icons/Md'
import {RiLockPasswordFill} from 'react-icons/Ri'


const Login = () => {
    return(
        <div className='loginPage flex'>
            <div className='container flex'>


                <div className='imageDiv'>
                    <img src={image} alt="Login Image"></img>

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


                        <button className='google flex'>
                        <FcGoogle className='icon'/>
                            <span>Sign in with Google</span>

                        </button>
                        
                        <div className='inputDiv'>
                         <label htmlFor='username'>Username</label>
                         <div className='input flex'>
                         <MdEmail className='icon'/>
                         <input type='text' id='email' placeholder='Enter your email id'></input>
                            </div>   
                        </div>
                        <div className='inputDiv'>
                         <label htmlFor='password'>Password</label>
                         <div className='input flex'>
                         <RiLockPasswordFill className='icon'/>
                         <input type='password' id='password' placeholder='Enter your password'></input>
                            </div>   
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>

                        </button>

                        <span className='forgotPassword'>Forgot your password? <a href="">Click here</a></span>
                    </form>
                </div>


            </div>
       
        </div>
    )
}
export default Login