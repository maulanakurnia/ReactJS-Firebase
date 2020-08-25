import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Login.scss'
class Login extends Component {
    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Sign in</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                    <div className="auth-button-wrapper">
                        <Link to="/register">Create Account</Link>
                        <button className="btn" onClick={this.handleRegisterSubmit}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;