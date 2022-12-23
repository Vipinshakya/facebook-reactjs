import "./login.css";

export default function login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">Facebook</h1>
          <span className="loginDesc">
            Connect with Friends and World around you on the facebook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="logInput" />
            <input placeholder="password" className="logInput" />
            <button className="btnlogin">Log In</button>
            <span className="forget">forgot Password?</span>
            <button className="loginRegister">Create a New Account </button>
          </div>
        </div>
      </div>
    </div>
  );
}
