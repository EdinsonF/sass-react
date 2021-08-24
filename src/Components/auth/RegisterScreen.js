import {Link} from 'react-router-dom'

const RegisterScreen = () => {
  return ( 
    <>
    <div className="auth_contenedor">
      
      <div className="auth_box">
        <div className="auth_title">
          <h3>Register</h3>
        </div>
        <form className="auth_form">
        
          <input 
          type="text" 
          placeholder="Name" 
          className="auth_input"
        />
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
        <button type="submit" className="btn_login">Sign Up</button>
        </form>

        <Link className="auth_link" to="/auth/login">I have account</Link>
      </div>
        
        
        
      </div>
    </>
   );
}
 
export default RegisterScreen;