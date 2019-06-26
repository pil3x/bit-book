import React from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register-login-page.css';
import LogInForm from '../../components/LogInForm/LogInForm';

class RegisterLogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {

        let content = "";

        return (
            <div className="reg-log-page">
                <div className="container">
                    <div className="reg-log-page-form col s12">
                        <div className="reg-log-form row">
                            <div className="reg-log-buttons col s12">
                                <Link to="/login" className="waves-effect waves-light btn">Log In</Link>
                                <Link to="/register" className="waves-effect waves-light btn">Register</Link>
                            </div>

                            <Route path="/register" component={RegisterForm} />
                            <Route path="/login" component={LogInForm} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegisterLogInPage;