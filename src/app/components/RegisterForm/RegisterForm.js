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
            error: ""
        }
    }

    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;


        this.setState({
            [name]: value,
        })
    }

    fetchingRegisterData() {
        const { name, email, password } = this.state;


        fetchRegisterToken(name, email, password)
            .then(() => {
                this.props.history.push('/login');
                // window.location.reload();
            })
            .catch(error => {
                return this.setState({ error })
            })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.fetchingRegisterData();
    }

    render() {

        const { name, email, password } = this.state;
        const { onInputChange, onSubmit } = this

        return (
            <>

                <form className="col s12" autoComplete="off" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Name" id="_name" type="text" className="validate" name="name" value={name} onChange={onInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" placeholder="Email" type="text" className="validate" name="email" value={email} onChange={onInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" placeholder="Password" type="password" className="validate" name="password" value={password} onChange={onInputChange} />
                        </div>
                    </div>
                    <button className="reg-form-btn btn waves-effect waves-light" type="submit" name="action">Register
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </ >
        )
    }
}

export default RegisterForm;