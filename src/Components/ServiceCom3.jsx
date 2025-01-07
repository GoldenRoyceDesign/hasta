import React from 'react'


const ServiceList = [
    {
        id: 1,
        title: "Search Engine Marketing (SEM)",
        description: "Drive traffic and conversions through paid search advertising campaigns.",
    },
    {
        id: 2,
        title: "Display Ads & Retargeting",
        description:
            "Reach your target audience with visually engaging display ads and retargeting campaigns.",
    },
    {
        id: 3,
        title: "Affiliate Marketing",
        description:
            "Partner with other businesses to promote your products and services to their audience.",
    },
    {
        id: 4,
        title: "Conversion Rate Optimization (CRO)",
        description:
            "Optimize your website and marketing materials to increase conversions.",
    },
];

const ServiceCom3 = () => {

    return (
        <>
            <div className='servicecom3 p-4'>
                <div className="service-list-container">
                    <h1 className='pb-4'>Achieve Maximum Growth with Results Driven Campaigns
                    </h1>
                    {ServiceList.map((service) => (
                        <div key={service.id} className="service-item">
                            {/* Arrow Box */}
                            <div className="arrow-box">{service.id}</div>
                            {/* Content */}
                            <div className="content">
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServiceCom3