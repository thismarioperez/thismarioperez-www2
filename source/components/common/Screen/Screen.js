import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./Screen.scss";

const Screen = (props) => {
    const { children, showScreen, timeout } = props;
    return (
        <CSSTransition
            classNames="screen"
            in={showScreen}
            timeout={timeout}
            unmountOnExit
        >
            <div className="screen">
                <div className="screen__inner -bg--dark ">{children}</div>
            </div>
        </CSSTransition>
    );
};

Screen.propTypes = {
    children: PropTypes.any,
    showScreen: PropTypes.bool.isRequired,
    timeout: PropTypes.number.isRequired,
};

Screen.defaultProps = {
    timeout: 800,
};

export default Screen;
