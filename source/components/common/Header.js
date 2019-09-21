import React from 'react';
import Logo from './Logo';
import LogoMark from './LogoMark';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__inner -exp -bg--dark'>
                <div className='header__branding -wrap'>
                    <div className='site-logo -fzero'>
                        <a href='/'>
                            <Logo />
                            <LogoMark />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
