import { React, useState } from 'react';
import UrlFormService from './../services/UrlFormService';
import BaseConfig from './../BaseConfig';
import './../styles/UrlForm.css';

const UrlForm = () => {
    // We setting up the hooks for the interactions
    const [validUrl, setValidUrl] = useState(false);
    const [successUrl, setSuccessUrl] = useState(null);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [minifiedUrl, setminifiedUrl] = useState(null);

    // We valid the URL on the client side too (It is being validated on the server side)
    const onInputUrl = (e) => {
        const url = e.target.value;
        setUrl(url);

        const regexp = (/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);

        regexp.test(url) ? setValidUrl(true) : setValidUrl(false); 
    };

    // We render the error list
    const renderErrorList = errors.map((err, index) => {
        return (<li key={ index }> { err } </li>);
    });

    // We post the data to create the minified url
    const onSubmitUrl = async (e) => {
        e.preventDefault();

        const result = await UrlFormService(url);

        if (result.data === undefined) {
            setSuccessUrl(false);
            setErrors(result.full_url);
        } else {
            setSuccessUrl(true);
            setminifiedUrl(result.data.minified_url);
        }
    };

    // We return the JSX
    return (
<       div className="ui cards">
            <div className="card">
                <div className="content">
                    <form onSubmit={ onSubmitUrl } className="ui form">
                        <div className="field">
                            <label>Input a new valid URL</label>
                            <input onChange={ onInputUrl } type="text" name="url" placeholder="New URL" />
                        </div>
                        <div className="button-container">
                            <button className="ui primary button" disabled={!validUrl} type="submit">Save</button>
                        </div>
                        <div className={`ui error message ${ successUrl == false  ? 'show-content' : ''}`}>
                            <ul className="list">
                                { renderErrorList }
                            </ul>
                        </div>
                        <div className={`ui success message ${ successUrl == true ? 'show-content' : ''}`}>
                            <div className="header">
                                Your URL registration was successful.
                            </div>
                            <p>If you want to test your shortened Url, you can go by clicking on the next link: <a href={`${ BaseConfig.API_URL }${ minifiedUrl }`} target="_blank">{ minifiedUrl }</a> </p>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default UrlForm;