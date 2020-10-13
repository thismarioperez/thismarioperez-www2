import React, { useState, useEffect } from "react";
import cx from "classnames";
import "./IntroSvg.scss";

const IntroSvgGroupTransition = ({
    children,
    classNames = [],
    animating = false,
    ...props
}) => {
    const [done, setDone] = useState(false);
    const handleTransitionEnd = () => {
        setDone(true);
    };
    const classes = cx(
        "intro-svg__g",
        animating && "intro-svg__g--animating",
        done && "intro-svg__g--done",
        [...classNames],
    );
    return (
        <g {...props} className={classes}>
            {children.map((child, i) => {
                const childProps = {
                    key: i,
                };
                if (i + 1 === children.length) {
                    childProps.onTransitionEnd = handleTransitionEnd;
                }
                return React.cloneElement(child, childProps);
            })}
        </g>
    );
};

const Welcome = (props) => {
    return (
        <IntroSvgGroupTransition {...props} classNames={["intro-svg__welcome"]}>
            <path
                d="M65.1,1.5h1.2l1.8,11.7c0.2,1.4,0.4,2.6,0.5,4.1h0.1c0.4-1.5,0.8-2.7,1.1-4.1L72,6h1.2l2.1,7.3
c0.4,1.4,0.7,2.6,1.1,4.1h0.1c0.2-1.4,0.3-2.7,0.5-4.1l1.7-11.7H80l-2.8,17.2h-1.5l-2.4-8.1c-0.3-1-0.5-2-0.7-3h-0.1
c-0.3,1-0.5,2-0.8,3l-2.3,8.1H68L65.1,1.5z"
            />
            <path
                d="M82.4,12.5c0-4.1,3-6.6,6.2-6.6c3.4,0,5.6,2.2,5.6,5.8c0,0.3,0,0.7-0.1,1H83.6c0.1,3.5,2.6,5.4,5.5,5.4
c1.7,0,3-0.5,4.2-1.4l0.5,0.9C92.6,18.3,91.2,19,89,19C85.3,19,82.4,16.6,82.4,12.5z M83.6,11.6h9.6c-0.2-3.2-2-4.8-4.5-4.8
C86.3,6.9,83.9,8.6,83.6,11.6z"
            />
            <path
                d="M103,14.9V1h-4.7V0h5.9v15.1c0,2,1,2.9,2.7,2.9c0.8,0,1.7-0.2,2.6-0.6l0.4,0.9c-1.1,0.5-1.9,0.8-3.1,0.8
C104.4,19,103,17.8,103,14.9z"
            />
            <path
                d="M113.8,12.5c0-4.2,3.1-6.6,6.8-6.6c2.1,0,3.5,0.9,4.5,1.9l-0.7,0.8c-1.1-1-2.3-1.7-3.8-1.7
c-3.3,0-5.6,2.3-5.6,5.6c0,3.3,2.2,5.5,5.6,5.5c1.7,0,3.1-0.8,4.2-1.8l0.6,0.8c-1.3,1.2-2.9,2-4.9,2
C116.7,19,113.8,16.6,113.8,12.5z"
            />
            <path
                d="M128.9,12.5c0-4.2,2.8-6.6,6.1-6.6s6.1,2.4,6.1,6.6c0,4.1-2.8,6.5-6.1,6.5S128.9,16.6,128.9,12.5z M139.8,12.5
c0-3.3-2-5.6-4.8-5.6s-4.8,2.3-4.8,5.6c0,3.3,2,5.5,4.8,5.5S139.8,15.8,139.8,12.5z"
            />
            <path
                d="M144.7,6.2h1l0.1,1.7h0.1c0.7-1.2,1.5-2,2.9-2c1.4,0,2.1,0.7,2.5,2.2c0.9-1.4,1.7-2.2,3.1-2.2
c1.7,0,2.7,1.2,2.7,3.7v9h-1.1V9.8c0-1.9-0.6-2.8-1.8-2.8c-1.1,0-1.8,0.8-2.7,2.3v9.4h-1.1V9.8c0-1.9-0.6-2.8-1.8-2.8
c-1.1,0-1.9,0.8-2.7,2.3v9.4h-1.1V6.2z"
            />
            <path
                d="M160.4,12.5c0-4.1,3-6.6,6.2-6.6c3.4,0,5.6,2.2,5.6,5.8c0,0.3,0,0.7-0.1,1h-10.6c0.1,3.5,2.6,5.4,5.5,5.4
c1.7,0,3-0.5,4.2-1.4l0.5,0.9c-1.1,0.8-2.5,1.5-4.7,1.5C163.3,19,160.4,16.6,160.4,12.5z M161.6,11.6h9.6c-0.2-3.2-2-4.8-4.5-4.8
C164.3,6.9,161.9,8.6,161.6,11.6z"
            />
        </IntroSvgGroupTransition>
    );
};

const Iam = (props) => {
    return (
        <IntroSvgGroupTransition {...props} classNames={["intro-svg__iam"]}>
            <path d="M91,17.7h4.4V2.6H91v-1h10v1h-4.4v15.1h4.4v1H91V17.7z" />
            <path
                d="M121.8,15.6c0-2.8,2.8-4.1,9.6-4.7c0-2.1-0.9-4-3.7-4c-1.9,0-3.7,1-4.7,1.7l-0.5-0.9c1-0.7,3.2-1.8,5.4-1.8
                        c3.4,0,4.7,2.1,4.7,4.8v8h-1l-0.1-1.9h-0.1c-1.4,1.1-3.4,2.2-5.2,2.2C123.9,19,121.8,17.9,121.8,15.6z M131.3,15.8v-4
                        c-6.3,0.6-8.4,1.8-8.4,3.8c0,1.8,1.7,2.5,3.4,2.5C127.9,18,129.6,17.2,131.3,15.8z"
            />
            <path
                d="M136.9,6.2h1l0.1,1.7h0.1c0.7-1.2,1.5-2,2.9-2c1.4,0,2.1,0.7,2.5,2.2c0.9-1.4,1.7-2.2,3.1-2.2
                        c1.7,0,2.7,1.2,2.7,3.7v9H148V9.8c0-1.9-0.6-2.8-1.8-2.8c-1.1,0-1.8,0.8-2.7,2.3v9.4h-1.1V9.8c0-1.9-0.6-2.8-1.8-2.8
                        c-1.1,0-1.9,0.8-2.7,2.3v9.4h-1.1V6.2z"
            />
        </IntroSvgGroupTransition>
    );
};

const ThisMarioPerez = (props) => {
    return (
        <IntroSvgGroupTransition
            {...props}
            classNames={["intro-svg__thismarioperez"]}
        >
            <path
                d="M2.2,16.6c0-0.5,0.1-1,0.2-1.7l1.2-5.7H0l0.3-1.8l3.7-0.1l1.1-4h2l-0.8,4h6L12,9.2H6L4.8,15
                    c-0.1,0.5-0.1,0.8-0.1,1.1c0,1.5,0.9,2.2,2.2,2.2c1.2,0,2.3-0.4,3.2-0.9l0.8,1.7c-1.1,0.7-2.8,1.2-4.6,1.2
                    C3.4,20.3,2.2,18.8,2.2,16.6z"
            />
            <path
                d="M18.3,1.6h2.4L19.3,8l-0.4,1.7H19C20.5,8.2,22.3,7,24.4,7c2.2,0,3.3,1.2,3.3,3.2c0,0.7-0.1,1.4-0.2,2L25.9,20
                    h-2.4l1.5-7.5c0.1-0.6,0.2-1.1,0.2-1.7c0-1.1-0.6-1.8-1.8-1.8c-1.6,0-3.2,1-4.8,2.9L17,20h-2.4L18.3,1.6z"
            />
            <path
                d="M34.8,17c0-0.4,0.1-0.9,0.2-1.4l1.5-6.4h-4.5l0.4-1.9h6.9l-1.9,8.5c-0.1,0.3-0.1,0.5-0.1,0.8
                    c0,1.3,0.8,1.8,1.8,1.8c0.8,0,1.4-0.2,2.3-0.6l0.5,1.8c-1.1,0.5-2.1,0.8-3.6,0.8C36.2,20.3,34.8,19.1,34.8,17z M36.6,3.2
                    c0-1.1,0.9-2,2-2c1,0,1.7,0.6,1.7,1.6c0,1.1-0.9,2-2,2C37.4,4.8,36.6,4.2,36.6,3.2z"
            />
            <path
                d="M46.3,18l1.4-1.5c1.2,1.4,3,2,4.7,2c1.6,0,2.8-0.5,2.8-1.8c0-1.1-1.1-1.5-3.1-2.2c-2.6-0.9-3.8-2-3.8-3.8
                    c0-2.5,2.2-3.7,4.9-3.7c2.4,0,4.2,1,5.3,2.1l-1.3,1.5c-1-0.9-2.5-1.7-4.2-1.7c-1.5,0-2.4,0.6-2.4,1.6c0,1,1,1.5,3,2.2
                    c2.3,0.8,4,1.7,4,3.7c0,2.8-2.4,3.9-5.5,3.9C49.7,20.3,47.6,19.4,46.3,18z"
            />
            <path
                d="M75.9,18.3H78V20h-6.4v-1.7H74V5.5H74l-4.4,9.6l-4.4-9.6h-0.1v12.8h2.5V20h-6.4v-1.7h2.1V3.7h-2.1V2h4.3l4.1,9
                    l4.1-9H78v1.7h-2.1V18.3z"
            />
            <path
                d="M90.4,19.1c-1.8,0.8-3.5,1.3-5.5,1.3c-2.2,0-4.2-1-4.2-3.4c0-2.5,1.9-3.3,4-3.8c1.9-0.4,3.7-0.5,5.7-0.6v-0.8
                    c0-1.7,0.3-2.8-2-2.8c-1.5,0-3,0.3-4.3,1.2v1.8h-1.9V9c1.7-1,3.9-1.7,5.8-1.7c3.1,0,4.1,0.8,4.1,3.7v7.4h2.5V20h-4.3V19.1z
                        M90.4,14.1c-1.7,0.1-3.6,0.2-5.2,0.6c-1.2,0.3-2.5,0.7-2.5,2.2c0,1.4,1.1,1.8,2.3,1.8c1.9,0,3.7-0.7,5.4-1.5V14.1z"
            />
            <path
                d="M104.1,18.3h5.4V20h-9.9v-1.7h2.6v-9l-2.2,0.3l-0.3-1.5c1-0.1,2-0.2,2.6-0.8c0.2-0.3,0.4-0.5,0.8-0.5
                    c0.9,0,0.9,0.8,0.9,1.5v1.6c1.7-1.2,3.2-2.6,5.4-2.6c1.6,0,2.5,1,3,2.4l-1.9,0.8c-0.2-0.6-0.5-1.5-1.4-1.5c-1.5,0-4,2.1-5.2,3.2
                    V18.3z"
            />
            <path
                d="M117.6,18.3h6v-9c-1,0.2-2,0.4-3.1,0.3L118,9.5l-0.3-1.6l2.7,0.2c0.9,0.1,2.7-0.1,3.4-0.8
                    c0.2-0.3,0.4-0.5,0.8-0.5c0.9,0,0.9,0.9,0.9,1.6v10h5.3V20h-13.1V18.3z M124.2,4.5c-1,0-1.9-0.8-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9
                    c1,0,1.9,0.8,1.9,1.9C126.2,3.7,125.3,4.5,124.2,4.5z"
            />
            <path
                d="M135,13.8c0-3.7,2.8-6.6,6.5-6.6c3.7,0,6.5,2.8,6.5,6.6c0,3.7-2.8,6.6-6.5,6.6C137.9,20.4,135,17.5,135,13.8z
                        M146.2,13.8c0-2.7-1.8-4.9-4.6-4.9s-4.6,2.2-4.6,4.9c0,2.6,1.8,4.9,4.6,4.9S146.2,16.4,146.2,13.8z"
            />
            <path
                d="M157.1,18.3h4.5V20h-8.8v-1.7h2.5V3.7l-2.5-0.3V2c1,0.1,2.1,0.4,3.1,0.4c1.7,0,3.4-0.4,5.1-0.4
                    c2.9,0,5.3,1.3,5.3,4.7c0,3.4-2.2,5.7-6.6,5.6l-2.5-0.1V18.3z M157.1,10.6l2.5,0.1c3.2,0.1,4.7-1.4,4.7-3.9c0-2.2-1.6-3.4-3.7-3.4
                    c-1.2,0-2.4,0.2-3.5,0.4V10.6z"
            />
            <path
                d="M173.1,14.5c0.2,2.6,2.2,4.2,5.4,4.2c1.9,0,3.7-0.6,5.5-1.4l0.5,1.5c-1.9,0.9-4.2,1.6-6.3,1.6
                    c-5.4,0-7.1-3.6-7.1-6.3c0-3.8,2.8-6.8,6.7-6.8c3.7,0,6.1,2.3,6.1,6c0,0.4,0,0.8-0.1,1.3H173.1z M182.1,12.8c0-2.3-2-3.9-4.2-3.9
                    c-2.3,0-4.3,1.7-4.8,3.9H182.1z"
            />
            <path
                d="M194.1,18.3h5.4V20h-9.9v-1.7h2.6v-9l-2.2,0.3l-0.3-1.5c1-0.1,2-0.2,2.6-0.8c0.2-0.3,0.4-0.5,0.8-0.5
                    c0.9,0,0.9,0.8,0.9,1.5v1.6c1.7-1.2,3.2-2.6,5.4-2.6c1.6,0,2.5,1,3,2.4l-1.9,0.8c-0.2-0.6-0.5-1.5-1.4-1.5c-1.5,0-4,2.1-5.2,3.2
                    V18.3z"
            />
            <path
                d="M209.1,14.5c0.2,2.6,2.2,4.2,5.4,4.2c1.9,0,3.7-0.6,5.5-1.4l0.5,1.5c-1.9,0.9-4.2,1.6-6.3,1.6
                    c-5.4,0-7.1-3.6-7.1-6.3c0-3.8,2.8-6.8,6.7-6.8c3.7,0,6.1,2.3,6.1,6c0,0.4,0,0.8-0.1,1.3H209.1z M218.1,12.8c0-2.3-2-3.9-4.2-3.9
                    c-2.3,0-4.3,1.7-4.8,3.9H218.1z"
            />
            <path
                d="M237.2,7.6V9l-9.3,9.3h6.1c1.4,0,1.5,0.1,1.7-1.1l0.3-1.7h1.7l-0.6,4.5h-11.8v-1.6l9.1-9.1h-4.9
                    c-2,0-1.7,0.1-2,2.2l-0.1,0.6h-1.8l0.6-4.5H237.2z"
            />
        </IntroSvgGroupTransition>
    );
};

const IntroSvgGroup = ({ id, ...props }) => {
    switch (id) {
        case "welcome":
            return <Welcome {...props} />;
        case "iam":
            return <Iam {...props} />;
        case "thismarioperez":
            return <ThisMarioPerez {...props} />;
        default:
            return undefined;
    }
};

const IntroSvg = () => {
    const groups = [{ id: "welcome" }, { id: "iam" }, { id: "thismarioperez" }];
    const [activeGroup, setActiveGroup] = useState(null);
    const handleTransitionEnd = () => {
        const currentIndex = groups
            .map((group) => group.id)
            .indexOf(activeGroup);
        setActiveGroup(groups[currentIndex + 1].id);
    };

    useEffect(() => {
        setActiveGroup(groups[0].id);
    })

    return (
        <svg
            version="1.1"
            className="intro-svg"
            x="0px"
            y="0px"
            viewBox="0 0 237.8 25.8"
            style={{
                enableBackground: "new 0 0 237.8 25.8",
            }}
            xmlSpace="preserve"
        >
            {groups.map(({ id }, i) => {
                const animating = activeGroup === id;
                const groupProps = {
                    id,
                    animating,
                };
                if (i + 1 !== groups.length) {
                    groupProps.onTransitionEnd = handleTransitionEnd;
                }
                return <IntroSvgGroup {...groupProps} key={i}/>;
            })}
        </svg>
    );
};

export default IntroSvg;
