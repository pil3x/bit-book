import React from 'react';
import { fetchLogInToken } from '../../../services/loginServices';
import './log-in-form.css';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            serverError: "",
            errors: {},
            isFormValid: false
        }
    }

    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;


        this.setState({
            [name]: value,
            isFormValid: this.isValidForm()
        })
    }


    fetchingData() {
        const { email, password } = this.state;

        if (email === '' || password === '') {
            return
        }

        // let errors = {}

        if (!this.isValidForm()) {
            return
        }

        fetchLogInToken(email, password)
            .then(() => {
                // this.props.history.push('/people');
                window.location.reload();
            })
            .catch(error => {
                return this.setState({ serverError: error })
            })
    }

    isValidForm() {
        const { email, password } = this.state;
        let errors = {}

        if (!email.includes('@')) {
            errors.email = "Invalid email"
        } else if (password.length < 3 && password.length !== 0) {
            errors.password = "Invalid password"
        } else {
            errors = {}
        }

        this.setState({
            errors
        })
        return (!email.includes('@') || password.length < 3) ? false : true;

    }


    onSubmit = (e) => {
        e.preventDefault();
        this.fetchingData();
    }


    render() {
        const { onInputChange, onSubmit } = this;
        const { email, password, serverError } = this.state;




        return (
            <>
                <form className="col s12" autoComplete="off" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" placeholder="Email" type="text" className="validate" value={email} onChange={onInputChange} />
                            <p className="reg-log-error">{this.state.errors.email}</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" placeholder="Password" type="password" className="validate" value={password} onChange={onInputChange} />
                            <p className="reg-log-error">{this.state.errors.password}</p>
                        </div>
                    </div>
                    <button className="reg-log-form-btn btn waves-effect waves-light" type="submit" name="action" disabled={!this.state.isFormValid}>Log in
                       <i className="material-icons right">send</i>
                    </button>
                    <p className="reg-log-error">{serverError}</p>
                </form>
            </>
        )
    }
}

export default LogInForm;