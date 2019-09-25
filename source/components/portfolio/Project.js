import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

const Project = ({ id, title, description, liveUrl, projectUrl }) => {
    return (
        <article id={`Project-${id}`} className='project -exp-2'>
            <h3>{title}</h3>
            <Markdown source={description} />
            {typeof liveUrl === 'string' && (
                <p>
                    <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                        See live project
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
                        See project code
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
