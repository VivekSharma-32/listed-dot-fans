import "./Login.css";
import Google from "../../images/google.svg";
import Apple from "../../images/apple.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      console.log(credential);
      const user = res.user;
      localStorage.setItem("user", user);
      navigate("/dashboard");
    });
  };
  return (
    <div className="container" id="login">
      <div className="leftBox">
        <div className="bigText">Board.</div>
      </div>
      <div className="rightBox">
        <div className="loginBox">
          <h3 className="loginHeading">Sign In</h3>
          <p className="smallText">Sign in to your account</p>
          <div className="loginButtons">
            <button className="googleBtn" onClick={handleGoogleSignin}>
              <img className="icon" src={Google} alt="google-icon" />
              Sign in with Google
            </button>
            <div className="appleBtn">
              <img className="icon" src={Apple} alt="apple-icon" />
              Sign in with Apple
            </div>
          </div>

          <div className="loginForm">
            <div className="form-input">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                id="email"
                className="inputBox"
              />
            </div>
            <div className="form-input">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="inputBox"
              />
            </div>
            <div className="forgot-password">Forgot password?</div>

            <div className="loginButton">Login</div>
          </div>

          <div>
            <p className="registerText">
              Don't have an account?{" "}
              <span className="text-blue">Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
