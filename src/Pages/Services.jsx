import React from 'react'
import service from '../assets/service.png'
import { Link } from 'react-router-dom'


const Services = () => {

    return (
        <>

            <div className='service'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={service} alt='service-image' className='img-fluid' />
                    </div>
                    <div className='col-md-8 p-5'>
                        <h1>Comprehensive Digital
                            Solutions <br></br> Under One
                            Roof</h1>




                        <div className='row mt-5 mb-2'>

                            <div className='col-md-6 mb-2'>
                                <Link to='/digitalmarketing' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>Digital Marketing </h5>
                                        <p>
                                            Drive targeted traffic and  maximize
                                            ROI with data-driven  strategies</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-md-6'>
                                <Link to='/ServiceCom1' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>Content Marketing </h5>
                                        <p>Engage, educate, and convert  with
                                            compelling, conversion
                                            optimized content</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col-md-6 mb-2'>
                                <Link to='/webapp' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>Web & App Design &
                                            Development</h5>
                                        <p>Create exceptional user  experiences with
                                            stunning, user friendly websites and apps.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-md-6'>
                                <Link to='/Timeline' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>Data Analytics &
                                            Reporting </h5>
                                        <p>Engage, educate, and convert  with
                                            compelling, conversion
                                            optimized content</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                        <div className='row mb-2'>
                            <div className='col-md-6 mb-2'>
                                <Link to='/ServiceCom3' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>business solution & Consulting</h5>
                                        <p>Achieve Maximum Growth with 
                                        Results Driven Campaigns</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-md-6'>
                                <Link to='/corporate' className='text-white' style={{ textDecoration: 'none' }}>
                                    <div className='serv-col p-4 rounded-3'>
                                        <h5>Event Managent</h5>
                                        <p>Create Memorable Experience  for Your Brand</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Services