import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LogoMark from "./LogoMark";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner -exp -bg--dark">
                <div className="header__branding -wrap">
                    <div className="site-logo -fzero">
                        <Link to="/">
                            <Logo />
                            <LogoMark />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
