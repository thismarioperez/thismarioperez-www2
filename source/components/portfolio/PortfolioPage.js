import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown/with-html';
import { getAdmin, getProjects } from '../../api/cmsApi';
import ProjectList from './ProjectList';

const PortfolioPage = () => {
    const [admin, setAdmin] = useState({});
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (Object.keys(admin).length === 0) {
            getAdmin().then(entry => {
                console.log(entry);
                setAdmin({ ...admin, ...entry });
            });
        }
        if (projects.length === 0) {
            getProjects().then(({ items }) => {
                setProjects([...projects, ...items]);
            });
        }
    }, []);

    return (
        <main className='page'>
            <section className='page__section -wrap -tall -bg--dark'>
                <div className='page__section__inner -exp-3 -wrap-copy'>
                    {Object.keys(admin).length && (
                        <Markdown
                            source={admin.fields.shortBio}
                            escapeHtml={false}
                        />
                    )}
                </div>
            </section>
            <section className='page__section -wrap -exp-3'>
                <div className='page__section__inner -wrap-copy'>
                    <h2>Portfolio</h2>
                    <hr />
                    <ProjectList projects={projects} />
                </div>
            </section>
        </main>
    );
};

export default PortfolioPage;
