import { React, useState } from 'react';
import UrlFormService from './../services/UrlFormService';
import BaseConfig from './../BaseConfig';
import './../styles/UrlForm.css';

// We add the form to add a new URL
const UrlForm = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [successUrl, setSuccessUrl] = useState(null);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [minifiedUrl, setminifiedUrl] = useState(null);

    const onInputUrl = (e) => {
        const url = e.target.value;
        setUrl(url);

        const regexp = (/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);

        regexp.test(url) ? setValidUrl(true) : setValidUrl(false); 
    };

    const renderErrorList = errors.map((err, index) => {
        return (<li key={ index }> {err} </li>);
    });

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
                            <p>URL Minified is: <a href={`${ BaseConfig.API_URL }${ minifiedUrl }`} target="_blank">{ minifiedUrl }</a> </p>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default UrlForm;