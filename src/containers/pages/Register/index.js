import React, { Component } from 'react';
import firebase from 'src/config/firebase'
import './Register.scss'
import { Link } from 'react-router-dom';

class Register extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const {email, password} = this.state;
        console.log('data before send:', email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            console.log('success: ', res);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });        
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Create your Account</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
                    <input className="input" id="passwordConfirm" placeholder="Confirm Password" type="password" onChange={this.handleChangeText}/>
                    <div className="auth-button-wrapper">
                        <Link to="/login">Sign in instead</Link>
                        <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;