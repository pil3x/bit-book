import React from 'react';
import { fetchUsers } from '../../../services/usersServices.js'

class Home extends React.Component {


    render() {
        console.log(fetchUsers())
        return (
            <>

                this is Home localhost:3000
            </>
        )
    }
}

export default Home;