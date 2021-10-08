import React from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div class="login_div container mt-3">
            <div class="sub_login__div">
                <h1 class="login_head">Log in to Your Account</h1>
                <br />
                <p className="login-title">Don't have an account yet? <a href="#">Sign up here</a></p>
                <div class="login_email">
                    <label className="login_label">Email</label>
                    <input type="email" placeholder="example@gmail.com" />
                </div>
                <br />
                <br />
                <div class="login_pass">
                    <label className="text-white">Password</label>
                    <br />
                    <input type="password" placeholder="*******" />
                </div>
                <br />
                <br />
                <a className="" href="#">Forgot password?</a>
                <br />
                <button onClick={handleClick} class="btn btn-outline-primary login_btn">Sign In &rarr;</button>
            </div>
        </div>
    )
}

export default Login
