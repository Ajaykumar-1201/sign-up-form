import React, { useState } from "react";

const SignUp = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [mailMsg, setMailMsg] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const [confirmPassMsg, setConfirmPassMsg] = useState("");
  const [valid, setValid] = useState(false)

  function handleMailInput(event) {
    if (emailRegex.test(mail)) {
      event.target.style.border = "2px solid green";
      setMailMsg('');
      setValid(true);
      
    } else {
      event.target.style.border = "2px solid red";
      setMailMsg("Invalid Email Address");
    }
  }

  function handlePassInput(event) {
    if (pass.length >= 7) {
      event.target.style.border = "2px solid green";
      setPassMsg('');
    } else {
      event.target.style.border = "2px solid red";
      setPassMsg("Password must be at least 8 characters");
    }
  }


  function handleConfirmPassInput(event) {
    if (pass === confirmPass) {
      event.target.style.border = "2px solid green";
      setConfirmPassMsg('');
    } else {
      event.target.style.border = "2px solid red";
      setConfirmPassMsg("Passwords do not match");
    }
  }

  function handleSubmitButton(){
    if(mailMsg.length === 0 && passMsg.length === 0 && confirmPassMsg.length === 0 && valid) {
        alert('Form submitted succesfully')
    }else {
        alert("Can't submit the form")
    }
  }

  return (
    <div className="main">
      <div className="signUp">
        <div className="input">
          <label>Email:</label>
          <input
            onChange={(event) => {
              setMail(event.target.value);
              handleMailInput(event);
            }}
          ></input>
          <p>{mailMsg}</p>
        </div>
        <div className="input">
          <label>Password:</label>
          <input type="password" onChange={(event) => {
              setPass(event.target.value);
              handlePassInput(event);
            }}
          ></input>
          <p>{passMsg}</p>
        </div>
        <div className="input">
          <label>Comfirm Password:</label>
          <input type="password"  onChange={(event) => {
              setConfirmPass(event.target.value);
              handleConfirmPassInput(event);
            }}
          ></input>
          <p>{confirmPassMsg}</p>
        </div>
        <button onClick={handleSubmitButton} type="submit">Submit</button>
      </div>
    </div>
  );
};

export default SignUp;
