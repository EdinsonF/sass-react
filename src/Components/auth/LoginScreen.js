import React from 'react'
import {Link} from 'react-router-dom'

const LoginScreen = () => {
  return ( 
    <>
    <div className="auth_contenedor">
      
      <div className="auth_box">
        <div className="auth_title">
          <h3>Login</h3>
        </div>
        <form className="auth_form">
        
          <input 
          type="text" 
          placeholder="Email" 
          className="auth_input"
        />
        <input 
          type="password" 
          placeholder="Password"  
          className="auth_input"
        />
        <button type="submit" className="btn_login">Sign In</button>
        </form>
        <div className="auth_google-box">
          <p>Login with social networks</p>
        <div className="btn_google-btn">
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
                <p className="btn_text-sign">
                <b>Sign in with google</b>
              </p>
        </div>
        </div>

        <Link className="auth_link" to="/auth/register">Creatre new account</Link>
      </div>
         
      </div>
    
    </>
   );
}
 
export default LoginScreen;