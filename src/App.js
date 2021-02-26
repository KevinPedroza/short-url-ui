import React from 'react';
import NavBar from './components/Navbar';
import Top from './components/Top';
import UrlForm from './components/UrlForm';
import Route from './route/Route';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <div className="ui container">
                <Route path="/">
                    <Top /> 
                </Route>

                <Route path="/new-url">
                    <UrlForm />
                </Route>
            </div>
        </React.Fragment>
    );
};

export default App;
