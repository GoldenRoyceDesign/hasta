import React from 'react'
import article from '../assets/article.png'
import business from '../assets/business.png'
import digital from '../assets/digital.png'
import insight from '../assets/insight.png'
import home from '../assets/home.png'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column gap-4 mb-2'>
                        <h1>Transform Your Business with 360
                            Digital Solutions</h1>
                        <p>Empowering brands through innovative digital marketing, web & app development, and data analytics</p>
                        <button className='mt-4'>Get started today</button>
                    </div>
                    <div className='col-md-6'>
                        <img src={home} alt='home-section-image' className='img-fluid' />
                    </div>
                </div>

            </div>

            {/* <div className='leader pt-5'>
                <div className='container'>
                    <h1>Meet Our Leadership Team</h1>
                    <div className='row mt-5'>
                        <div className='col-md-4 mb-4'>
                            <h4>\[CEO’s Name\]</h4>
                            <p className='mt-3'>Chief Executive Officer</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <h4>\[CTO’s Name\]</h4>
                            <p className='mt-3'>Chief Technology Officer</p>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <h4>\[CMO’s  Name\]</h4>
                            <p className='mt-3'>Chief Marketing Officer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='client pt-5'>
                <div className='container'>
                    <h1>Success Stories That Speak for
                        Themselves</h1>
                    <div className='row mt-5'>
                        <div className='col-md-4 mb-4'>
                            <div className='client-box p-3'>
                                <h4>Client 1</h4>
                                <p className='mt-3'>\[Brief Description of Business &
                                    Outcome\]</p>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='client-box p-3'>
                                <h4>Client 2</h4>
                                <p className='mt-3'>\[Brief Description of Business &
                                    Outcome\]</p>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='client-box p-3'>
                                <h4>Client 3</h4>
                                <p className='mt-3'>\[Brief Description of Business &
                                    Outcome\]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='industry mt-3'>
                <div className='row'>
                    <div className='col-md-8 p-5'>
                        <h1>Stay Ahead with
                            Industry Insights</h1>

                        <div className='row pt-5 pe-4 ps-4'>
                            <div className='col-md-6 mb-4'>
                                <img src={article} alt='article-image' className='img-fluid' />
                                <h4 className='mt-3'>Latest Articles</h4>
                                <p className='mt-3'>Discover insights from industry experts on digital trends, strategies, and best practices</p>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <img src={business} alt='article-image' className='img-fluid' />
                                <h4 className='mt-3'>Business Growth</h4>
                                <p className='mt-3'>Learn how to leverage technology and data to drive sustainable growth.</p>
                            </div>
                            <div className='col-md-6 mb-4'>
                                <img src={digital} alt='article-image' className='img-fluid' />
                                <h4 className='mt-3'>Digital Marketing</h4>
                                <p className='mt-3'>Get tips and strategies to enhance your online presence and reach your target audience</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <img src={insight} alt='insight-image' className='img-fluid' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home