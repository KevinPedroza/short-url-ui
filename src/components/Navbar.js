import React from 'react';

const NavBar = () => {
    return (
        <div className="ui labeled icon menu">
            <a className="item">
                <i className="eye icon"></i>
                Top URL
            </a>
            <a className="item">
                <i className="plus icon"></i>
                New URL
            </a>
        </div>
    );
};

export default NavBar;


