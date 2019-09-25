import React, { useState, useEffect } from 'react';
import getProjects from '../../api/cmsApi';
import ProjectList from './ProjectList';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (projects.length === 0) {
            getProjects().then(response => {
                console.log(response);
                setProjects(response.items);
            });
        }
    }, []);
    return (
        <main className='page'>
            <section className='page__section -tall -bg--dark'></section>
            <section className='page__section -wrap -exp-3'>
                <div className='page__section__inner'>
                    <h2>Portfolio</h2>
                    <hr />
                    <ProjectList projects={projects} />
                </div>
            </section>
        </main>
    );
};

export default PortfolioPage;
