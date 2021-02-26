import { React, useState } from 'react';
import './../styles/UrlForm.css';

// We add the form to add a new URL
const UrlForm = () => {
    const [validUrl, setValidUrl] = useState(false);

    const onInputUrl = (e) => {
        const url = e.target.value;

        const regexp = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

        regexp.test(url) ? setValidUrl(true) : setValidUrl(false); 
    };


    
    return (
<       div className="ui cards">
            <div className="card">
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Input a new valid URL</label>
                            <input onChange={ onInputUrl } type="text" name="first-name" placeholder="New URL" />
                        </div>
                        <div className="button-container">
                            <button className="ui primary button" disabled={!validUrl} type="submit">Save</button>
                        </div>
                        <div className="ui error message">
                            <ul className="list">
                                <li>Please select at least two skills</li>
                                <li>Please enter your name</li>
                            </ul>
                        </div>
                        <div className="ui success message">
                            <div className="header">
                                Your user registration was successful.
                            </div>
                            <p>You may now log-in with the username you have chosen</p>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default UrlForm;