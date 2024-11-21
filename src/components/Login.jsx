import { useRef, useState } from "react";
export default function Login() {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const email = useRef();
  const password = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const validEmail = enteredEmail.includes("@");
    if (!validEmail) {
      setInvalidEmail(true);
      return;
    }
    setInvalidEmail(false);
    console.log(enteredEmail);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
        </div>
        <div className="control-error">
          {invalidEmail && <p>Please enter a valid email address.</p>}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" ref={password} type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
