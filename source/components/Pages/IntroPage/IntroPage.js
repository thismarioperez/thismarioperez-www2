import React, { useState } from "react";
import Screen from "../../common/Screen";

const IntroPage = () => {
    const [showScreen, setShowScreen] = useState(true);
    const screenProps = {
        showScreen,
        timeout: showScreen ? 0 : 800,
    };
    return (
        <Screen {...screenProps}>
            <div className="-wrap">
                <p>This is my content</p>
            </div>
        </Screen>
    );
};

export default IntroPage;
