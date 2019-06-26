import React from 'react';
import './log-in-form.css';

const LogInForm = () => {
    return (
        <>
            <form className="col s12" autoComplete="off">
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
                <button className="reg-form-btn btn waves-effect waves-light" type="submit" name="action">Log in
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </>
    )
}

export default LogInForm;