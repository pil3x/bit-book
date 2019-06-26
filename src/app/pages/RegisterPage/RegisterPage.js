import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register-page.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="reg-page">
                <div className="container">

                    <div className="reg-page-form col s12">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        )
    }

}

export default RegisterPage;