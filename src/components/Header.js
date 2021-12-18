import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='ui container'>
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Accordion</div>
                <div class="hidden content">
                    <Link href='/' className='item'>Personal Info</Link>
                </div>
            </div>
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Search</div>
                <div class="hidden content">
                    <Link href='/list' className='item'>Search</Link>
                </div>
            </div>
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Dropdown</div>
                <div class="hidden content">
                    <Link href='/dropdown' className='item'>Dropdown</Link>
                </div>
            </div>
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Translate</div>
                <div class="hidden content">
                    <Link href='/translate' className='item'>Translate</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;
