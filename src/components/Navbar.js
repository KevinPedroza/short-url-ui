import React from 'react';
import Link from './Link';

const NavBar = () => {
    return (
        <div className="ui labeled icon menu">
            <Link className="item" href="/">
                <i className="eye icon"></i>
                Top URL
            </Link>
            <Link className="item" href="/new-url">
                <i className="plus icon"></i>
                New URL
            </Link>
        </div>
    );
};

export default NavBar;


