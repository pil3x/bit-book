import React from 'react';
import './register-form.css';

const RegisterForm = () => {
    return (
        <div className="reg-form row">
            <form className="col s12" autoComplete="off">
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="First Name" id="first_name" type="text" className="validate " />
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" placeholder="Last Name" type="text" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" placeholder="Email" type="email" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" placeholder="Password" type="password" className="validate" />
                    </div>
                </div>
                <button className="reg-form-btn btn waves-effect waves-light" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;