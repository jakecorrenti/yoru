// This file is the setup (HTML) for the login page
import './css/Login.css';
// import './css/index.css';

const Login = () => {
    return (
        <div className="App">
            <div class="login-form">
                <h2>yoru</h2>
                <div class="input-wrapper">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                </div>
                <button>login</button>
                <p>Not registered? <a href="">Create an account</a></p>
            </div>
        </div>
    );
}

export default Login;