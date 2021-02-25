import React from 'react';
import './../styles/UrlForm.css';

const UrlForm = () => {
    return (
<       div className="ui cards">
            <div className="card">
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>Input a new URL</label>
                            <input type="text" name="first-name" placeholder="New URL" />
                        </div>
                        <div className="button-container">
                            <button className="ui primary button" type="submit">Save</button>
                        </div>
                        <div className="ui error message">
                            <ul className="list">
                                <li>Please select at least two skills</li>
                                <li>Please enter your name</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default UrlForm;