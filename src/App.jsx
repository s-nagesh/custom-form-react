import { useRef } from 'react'
import './App.css'
import CustomForm from './components/CustomForm';

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = ()=>{
    alert(
      "Username: " +
      usernameRef.current.value +
      `\n` +
      "Password: " +
      passwordRef.current.value
    )
  }

  const handleRegister = () => {
    console.log("register");
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div className='App'>
      <CustomForm 
        username={{
          type:"text",
          label:"UserName",
          placeHolder:"Enter Username",
          ref:usernameRef,
          isInput:true
        }}
        password={{
          type: "password",
          label: "Password",
          placeholder: "Enter Password",
          ref: passwordRef,
          isInput: true,
        }}
        loginButton={{
          handler:handleLogin,
          buttonText:"Login",
          isInput:false
        }}
        registerButton={{
          handler: handleRegister,
          buttonText: "Register",
          isInput: false,
        }}
      />
    </div>
  )
}

export default App
