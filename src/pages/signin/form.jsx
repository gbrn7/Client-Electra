import eyeSlash from '../../assets/img/eye_slash.png';
import eye from '../../assets/img/eye.png';
import {  useState } from 'react';

export default function Eform() {
  const [passVisible, setVisible] = useState(false);
  const handleClick = () => {
    const typePassword = document.getElementById('password');  
    const passIcon = document.getElementById('pass-icon');  
    if(passVisible){
      typePassword.type = 'text';
      passIcon.src = eye;
      setVisible(false); 
    }else{
      typePassword.type = 'password';
      passIcon.src = eyeSlash;
      setVisible(true);
    }
  }

  return (
    <div
      className="login-form d-flex flex-column gap-1 gap-lg-2 mt-2 mt-lg-4 mt-4"
    >
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Masukan email"
      />
      <div className="password-container">
        <label>Password</label>
        <div className="pass-wrapper position-relative d-flex">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Masukan password"
          />
        <img
            src={eyeSlash}
            className="pass-icon position-absolute"
            id="pass-icon"
            onClick={() => handleClick()}
          /> 
        </div>
      </div>
      <button className="login-btn mt-1 mt-lg-2" type="submit">
        Login
      </button>
    </div>
  )
}
