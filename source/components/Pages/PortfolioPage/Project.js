import React from 'react';
import { useInView } from 'react-intersection-observer';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

const Project = ({ id, title, description, liveUrl, projectUrl }) => {
    const [ref, inView] = useInView({
        threshold: 0.5
    });

    return (
        <article
            ref={ref}
            id={`Project-${id}`}
            className={`project animate${inView ? ' is-visible' : ''} -exp-2`}
        >
            <h3>{title}</h3>
            <Markdown source={description} />
            {typeof liveUrl === 'string' && (
                <p>
                    <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                        See project
                    </a>
                </p>
            )}
            {typeof projectUrl === 'string' && (
                <p>
                    <a
                        href={projectUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        See code
                    </a>
                </p>
            )}
        </article>
    );
};

Project.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
    projectUrl: PropTypes.string
};

export default Project;
