import React from "react";
import "./Timeline.css"; // Add custom styles here
import "bootstrap/dist/css/bootstrap.min.css";

const Timeline = () => {
    const timelineData = [
        {
            id: 1,
            title: "Website Analytics",
            description: "Track website traffic, user behaviour, and key performance indicators.",
            align: "right",
        },
        {
            id: 2,
            title: "Data Visualization & Reporting",
            description: "Present data in a clear and concise way to gain actionable insights.",
            align: "left",
        },
        {
            id: 3,
            title: "Conversion Rate Optimization (CRO)",
            description: "Improve your website's conversion rates by optimizing user experience and call to action.",
            align: "right",
        },
        {
            id: 4,
            title: "A/B Testing",
            description: "Test different website elements to identify the most effective versions.",
            align: "left",
        },
        {
            id: 5,
            title: "Customer Journey Analysis",
            description: "Understand how customers interact with your brand and identify areas for improvement.",
            align: "right",
        },
    ];

    return (
        <div className="timeline-container py-5">
            <h1>Unlock Insights to Drive Better  Decisions</h1>
            <div className="timeline mt-5">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item d-flex ${item.align === "left" ? "flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content Section */}
                        <div className="content p-4" style={{
                                textAlign: item.align === "left" ? "left" : "right", // Set text alignment dynamically
                            }}>
                            
                            <h4 className="title fw-bold">{item.title}</h4>
                            <p className="description">{item.description}</p>
                        </div>

                        {/* Circle Section */}
                        <div className="circle-container text-center mx-3">
                            <div className="circle">{item.id}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
