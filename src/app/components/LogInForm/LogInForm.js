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
            errors: {}
        }
    }

    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;


        this.setState({
            [name]: value
        })
    }


    fetchingData() {
        const { email, password, serverError } = this.state;

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
                            <p className="reg-log-error">{serverError}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" placeholder="Password" type="password" className="validate" value={password} onChange={onInputChange} />
                        </div>
                    </div>
                    <button className="reg-log-form-btn btn waves-effect waves-light" type="submit" name="action">Log in
                       <i className="material-icons right">send</i>
                    </button>
                </form>
            </>
        )
    }
}

export default LogInForm;