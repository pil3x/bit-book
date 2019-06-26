import React from 'react';
import './log-in-page.css';
import LogInForm from '../../components/LogInForm/LogInForm';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="log-page">
                <div className="container">

                    <div className="log-page-form col s12">
                        <LogInForm />
                    </div>
                </div>
            </div>
        )
    }

}

export default LogInPage;