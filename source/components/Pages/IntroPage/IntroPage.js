import React, { useState } from "react";
import Screen from "../../common/Screen";
import IntroSvg from "./IntroSvg";
import "./Intro.scss";

const IntroPage = () => {
    const [showScreen, setShowScreen] = useState(true);
    const screenProps = {
        className: "intro",
        showScreen,
        timeout: showScreen ? 0 : 800,
    };
    return (
        <Screen {...screenProps}>
            <div className="intro">
                <div className="intro__inner">
                    <div className="-wrap">
                        <div className="intro__welcome">
                            <IntroSvg />
                        </div>
                    </div>
                </div>
            </div>
        </Screen>
    );
};

export default IntroPage;
