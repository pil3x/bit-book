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

    componentDidMount() {

    }

    componentDidMount() {
        this.loadLoginToken()
    }

    onInputChange = (e) => {
        const name = e.target.value;
        const value = e.target.value;

        this.setState({ [name]: value })
    }

    loadLoginToken() {

    }

    render() {

        return (
            <>
                <form className="col s12" autoComplete="off">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" placeholder="Email" type="email" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" placeholder="Password" type="password" className="validate" />
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