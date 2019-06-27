import React from 'react';
import { fetchRegisterToken } from '../../../services/registerService'
import './register-form.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            serverError: "",
            errors: {}
        }
    }

    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;


        this.isValidForm();

        this.setState({
            [name]: value,
        })
    }

    fetchingRegisterData() {
        const { name, email, password } = this.state;

        if (name === '' || email === '' || password === '') {
            return
        }

        if (!this.isValidForm()) {
            return
        }

        fetchRegisterToken(name, email, password)
            .then(() => {
                this.props.history.push('/login');
            })
            .catch(error => {
                return this.setState({ serverError: error })
            })
    }

    isValidForm() {
        const { name, email, password } = this.state;

        let errors = {}
        if (!name) {
            errors.name = "Please enter your name";
        } else if (!email.includes('@')) {
            errors.email = "Invalid email";
        } else if (password.length < 3 && password.length !== 0) {
            errors.password = "Invalid password";
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
        this.fetchingRegisterData();
    }

    render() {

        const { name, email, password, errors } = this.state;
        const { onInputChange, onSubmit } = this

        return (
            <>

                <form className="col s12" autoComplete="off" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Name" id="_name" type="text" className="validate" name="name" value={name} onChange={onInputChange} />
                            <p className="reg-log-error">{errors.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" placeholder="Email" type="text" className="validate" name="email" value={email} onChange={onInputChange} />
                            <p className="reg-log-error">{errors.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" placeholder="Password" type="password" className="validate" name="password" value={password} onChange={onInputChange} />
                            <p className="reg-log-error">{errors.password}</p>
                        </div>
                    </div>
                    <button className="reg-log-form-btn btn waves-effect waves-light" type="submit" name="action">Register
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </ >
        )
    }
}

export default RegisterForm;