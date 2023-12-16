import React, { useState } from "react";

const SignUp = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [mailMsg, setMailMsg] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const [confirmPassMsg, setConfirmPassMsg] = useState("");

  function handleMailInput(event) {
    if (emailRegex.test(mail)) {
      event.target.style.border = "2px solid green";
      setMailMsg('');
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

//   function check(pass, cPass) {
//     for(let i = 0; i < pass.length; i++) {
//         if(pass.length < cPass.length || pass[i] !== cPass[i]  ) {
//             return false;
//         }
//     }
//     return true;

//   }

  function handleConfirmPassInput(event) {
    if (pass === confirmPass) {
      event.target.style.border = "2px solid green";
      setConfirmPassMsg('');
    } else {
      event.target.style.border = "2px solid red";
      setConfirmPassMsg("Passwords do not match");
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
      </div>
    </div>
  );
};

export default SignUp;
