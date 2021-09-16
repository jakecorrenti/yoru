// This file is the setup (HTML) for the login page
import './css/Login.css';
// import './css/index.css';

const Login = () => {
    return (
        <div className="App">
            <div class="login-form">
                <h2>Sign In</h2>
                <div class="input-wrapper">
                    <input type="text" placeholder=" Username" />
                    <input type="password" placeholder=" Password" />
                </div>
                <button>Login</button>
                <p>Not registered? <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Create an account</a></p>
            </div>
        </div>
    );
}

export default Login;