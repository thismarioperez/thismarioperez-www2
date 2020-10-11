import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectList = (props) => {
    return (
        <div className="project-list">
            {props.projects.map((project) => (
                <Project
                    key={project.sys.id}
                    id={project.sys.id}
                    title={project.fields.title}
                    description={project.fields.description}
                    liveUrl={project.fields.liveUrl}
                    projectUrl={project.fields.projectUrl}
                />
            ))}
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            fields: PropTypes.object.isRequired,
            sys: PropTypes.object.isRequired,
        }),
    ).isRequired,
};

export default ProjectList;
