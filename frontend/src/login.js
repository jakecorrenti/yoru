// This file is the setup (HTML) for the login page
import './css/Login.css';
// import './css/index.css';

const Login = () => {
    return (
        <div className="App">
            <div class="login-form">
                <h2>Yoru</h2>
                <div class="input-wrapper">
                    <input type="text" placeholder=" Username" />
                    <input type="password" placeholder=" Password" />
                </div>
                <button>Login</button>
                <p>Not registered? <a href="">Create an account</a></p>
            </div>
        </div>
    );
}

export default Login;