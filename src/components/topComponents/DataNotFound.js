import React from 'react';

const DataNotFound = () => {
    return (
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
                <div className="header">
                    There is not any URL added yet
                </div>
                <p>Please add a new URL.</p>
            </div>
        </div>
    );
};

export default DataNotFound;