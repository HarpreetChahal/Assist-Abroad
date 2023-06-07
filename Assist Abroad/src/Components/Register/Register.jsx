import React from 'react'
import './Register.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import Navbar from "../../layout/Navbar";



//Assets
import image from '../../Assets/LOGIN.png'
import imageLogo from '../../Assets/LoginPageLogoMobile.png'
import logo from '../../Assets/LOGO.png'
import video from '../../Assets/video.mp4'


//Icons 
import {FcGoogle} from 'react-icons/Fc'
import {MdEmail} from 'react-icons/Md'
import {RiLockPasswordFill} from 'react-icons/Ri'

const Register = () => {
    return(
        <>
        <Navbar />
        <div className='loginPage flex'>
            <div className='container_login flex'>


                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop alt="Login Image"></video>
                    

                    <div className='textDiv'>
                        {/* <h2 className='title'>ASSIST ABROAD</h2> */}
                        {/* <p>Welcome Back</p> */}
                    </div>
                    <div className='footerDiv flex'>
                        <span className='text'> Already have an account?</span>
                    <Link to={'/home'}>
                    <button className='btn'>Log In</button></Link>
                    </div>
                </div>


                <div className='formDiv flex'>
                    <div className='headerDiv'>
                    <img  src={logo} alt="Logo Image"></img>
                       
                        {/* <span className='logoName'>Assist Abroad</span> */}
                        <h3>Welcome Back</h3>
                        <img className='imageLogo' src={imageLogo} alt="Logo Image"></img>
                    </div>
                    

                    <form action='' className='form grid'>
                        <span className='showMessage'> Authetication error display</span>


                        {/* <button className='google flex'>
                        <FcGoogle className='icon'/>
                            <span className='signInGoogle'>Sign in with Google</span>

                        </button> */}
                        
                        <div className='inputDiv'>
                         <label htmlFor='username'>Name</label>
                         <div className='input flex'>
                         <MdEmail className='icon'/>
                         <input type='text' id='email' placeholder='Enter your name'></input>
                            </div>   
                        </div>
                        <div className='inputDiv'>
                         <label htmlFor='password'>Email</label>
                         <div className='input flex'>
                         <RiLockPasswordFill className='icon'/>
                         <input type='password' id='password' placeholder='Enter your password'></input>
                            </div>   
                        </div>
                        <div className='inputDiv'>
                         <label htmlFor='password'>Date Of Birth</label>
                         <div className='input flex'>
                         <RiLockPasswordFill className='icon'/>
                         <input type='password' id='password' placeholder='Enter your password'></input>
                            </div>   
                        </div>
                        <div className='inputDiv'>
                         <label htmlFor='password'>Password</label>
                         <div className='input flex'>
                         <RiLockPasswordFill className='icon'/>
                         <input type='password' id='password' placeholder='Enter your password'></input>
                            </div>   
                        </div>
                        <div className='inputDiv'>
                         <label htmlFor='password'>Confirm Password</label>
                         <div className='input flex'>
                         <RiLockPasswordFill className='icon'/>
                         <input type='password' id='password' placeholder='Enter your password'></input>
                            </div>   
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Sign Up</span>

                        </button>

                        <span className='forgotPassword'>Forgot your password? <a href="">Click here</a></span>
                    </form>   
                </div>


            </div>
       
        </div>
        </>
    )
}
export default Register