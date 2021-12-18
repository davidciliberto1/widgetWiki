import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='ui container'><br />
            <div className="ui animated fade button" tabIndex="0">
                <div className="visible content">Personal Info</div>
                <div className="hidden content">
                    <Link href='/' className='item'>Accordion</Link>
                </div>
            </div>
            <div className="ui animated fade button" tabIndex="0">
                <div className="visible content">Wikipedia</div>
                <div className="hidden content">
                    <Link href='/list' className='item'>Search</Link>
                </div>
            </div>
            <div className="ui animated fade button" tabIndex="0">
                <div className="visible content">Certifications</div>
                <div className="hidden content">
                    <Link href='/dropdown' className='item'>Dropdown</Link>
                </div>
            </div>
            <div className="ui animated fade button" tabIndex="0">
                <div className="visible content">Translator</div>
                <div className="hidden content">
                    <Link href='/translate' className='item'>Translate</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
