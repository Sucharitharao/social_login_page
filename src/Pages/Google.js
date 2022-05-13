import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../Components/Navbar.css"

export default function Google() {
    const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('email', email);
      localStorage.setItem('Password', pwd);
   };
  return (
    <div className='login'>
        <div className='socialApp'>
        <div>
            <img/>
            <h2>Sign in with Google</h2>
        </div>
       <div/>
       <div>
           <h3>Sign in</h3>
           <div>
               <h4>to continue with <a href='https://en.wikipedia.org/wiki/Twitter'>twitter.com</a></h4>
           </div>
       </div>
       <div>
            <input type="email" placeholder='Email'
             onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <input type="Password" placeholder='Password'
            onChange={(e)=>setPwd(e.target.value)}/>
            </div>
            <button className='submit' onClick={handle}>Login</button>
            
        </div>
    </div>
  )
}
