import React from 'react';
import { fetchLogInToken } from '../../../services/loginServices';
import './log-in-form.css';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({ [name]: value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        //ovde pises i catch i redirectujes ako je sc 200

        console.log(fetchLogInToken(email, password))
    }



    render() {
        const { onInputChange, onSubmit } = this;
        const { email, password } = this.state;

        return (
            <>
                <form className="col s12" autoComplete="off" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" placeholder="Email" type="email" className="validate" value={email} onChange={onInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" placeholder="Password" type="password" className="validate" value={password} onChange={onInputChange} />
                        </div>
                    </div>
                    <button className="reg-form-btn btn waves-effect waves-light" type="submit" name="action">Log in
                       <i className="material-icons right">send</i>
                    </button>
                </form>
            </>
        )
    }
}

export default LogInForm;