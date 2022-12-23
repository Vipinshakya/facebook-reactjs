import "./register.css";

export default function Register() {
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
            <input placeholder="Username" className="logInput" />
            <input placeholder="Email" className="logInput" />
            <input placeholder="password" className="logInput" />
            <input placeholder="password again" className="logInput" />
            <button className="btnlogin">Sign Up</button>
           
            <button className="loginRegister">Log into Account </button>
          </div>
        </div>
      </div>
    </div>
  );
}