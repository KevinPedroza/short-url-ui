import React from 'react';
import NavBar from './Navbar';
import Top from './Top';
import UrlForm from './UrlForm';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <div className="ui container">
                <Top /> 

                <UrlForm />
            </div>
        </React.Fragment>
    );
};

export default App;
