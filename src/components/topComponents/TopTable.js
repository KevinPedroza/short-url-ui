import React from 'react';

const TopTable = ({children}) => {
    // Defining the table as a component
    return (
        <table className="ui celled padded table">
            <thead>
                <tr>
                    <th className="single line">URL Minified</th>
                    <th>Title</th>
                    <th>Click Counts</th>
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    );

};

export default TopTable;