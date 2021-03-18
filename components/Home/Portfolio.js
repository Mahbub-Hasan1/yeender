import React from 'react';


const projectData = [
    {
        id: 1,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 4,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 5,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 6,
        img: 'https://i.imgur.com/Xcnejze.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const Portfolio = () => {
    return (
        <section className="portfolio-area">
            <div className="container-xl">
                <h5 className="text-center">PORTFOLIO</h5>
                <h2 className="text-center portfolio-title mb-4">What We Have Build So Far</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {projectData.map(data =>
                        <div key={data.id} className="col">
                            <div className="card projects-card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="https://i.imgur.com/uPLoa44.png" />
                                </div>
                                <div className="card-content">
                                    <h5 className="project-title">Stack School - E-Learning Web Application</h5>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Portfolio;