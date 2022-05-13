import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');
    const [errorMessages, setErrorMessages] = useState({});


   const handle = () => {
      localStorage.setItem('email', email);
      localStorage.setItem('Password', pwd);
   };
   const renderErrorMessage = (email) =>
  email === errorMessages.email && (
    <div className="error">{errorMessages.message}</div>
  );
  
  
  return (
    <div className='login'>
    <h1 className='loginTittle'>Choose a login method</h1>
    <div className='wrapper'>
        <div className='left'>
            <div className='loginButton facebook'>
                <img src='../images/facebook-icon.png' alt='' className='icon'/>
                <Link className="link" to="facebook">Facebook</Link>
            </div>
            <div className='loginButton google'>
            <img src='../images/google-icon.webp' alt='' className='icon'/>
            <Link className="link" to="google">Google</Link>
            </div>
        </div>
        <div className='center'>
            <div className='line'/>
            <div className='or'>OR</div>
        </div>
        <div className='right'>
            <div>
            <input type="email" placeholder='Email' name='email' id='email'
             onChange={(e)=>setEmail(e.target.value)} required/>
             {renderErrorMessage("email")}
            </div>
            <div>
            <input type="Password" placeholder='Password'
            onChange={(e)=>setPwd(e.target.value)} required/>
             {renderErrorMessage("email")}
            </div>
            <button className='submit' onClick={handle}>Login</button>
        </div>
    </div>
    

</div>
  )
}
