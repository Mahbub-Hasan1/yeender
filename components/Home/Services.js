import React from 'react';

const serviceData = [
    {
        id: 1,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 4,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 5,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 6,
        img: 'https://stacksolution.dev/api/uploads/working_mobile_application_01_min_3161dce74d.jpg',
        name: 'service title',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];

const Services = () => {
    return (
        <section className="service-area">
            <div className="container-xl">
                <h5 className="text-center">SERVICES</h5>
                <h3 className="text-center service-main-title">
                    Facing Problems? Let’s Make It Simple
                </h3>

                <div className="service-contents row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {serviceData.map((data) => (
                        <div key={data.id} className="col">
                            <div className="card service-items">
                                <img className="img-fluid p-2" src={data.img} alt={data.name} />
                                <div className="service-title">
                                    <h5>{data.name}</h5>
                                </div>
                                <div className="service-overlay p-3 d-flex align-items-center">
                                    <div>
                                        <h4 className="text-center">{data.name}</h4>
                                        <p className="ser-overlay-p">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
