import React from 'react';

const Main = (props) => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;