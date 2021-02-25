import React from 'react';

const Top = () => {
    return (
        <table className="ui celled padded table">
            <thead>
                <tr>
                    <th className="single line">URL</th>
                    <th>Click Counts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h2 className="ui center aligned header">A</h2>
                    </td>
                    <td className="single line">
                        0
                    </td>
                 </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="5">
                        <div className="ui right floated pagination menu">
                            <a className="icon item">
                                <i className="left chevron icon"></i>
                            </a>
                            <a className="item">1</a>
                            <a className="item">2</a>
                            <a className="item">3</a>
                            <a className="item">4</a>
                            <a className="icon item">
                            <i className="right chevron icon"></i>
                            </a>
                        </div>
                    </th>
                </tr>
            </tfoot>
        </table>

    );
};

export default Top;