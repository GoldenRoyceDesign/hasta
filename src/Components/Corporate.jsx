import React from 'react'
import corporate from '../assets/corporate.png'

const Corporate = () => {
    return (
        <>
            <div className='corporate'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={corporate} alt='service-image' className='img-fluid' />
                    </div>
                    <div className='col-md-8 p-5 d-flex flex-column justify-content-center'>
                        <h1>Create Memorable Experience  for Your Brand</h1>

                        <div className='d-flex gap-5 mt-5 event'>
                            <div className='mb-4'>
                                <h2 className='text-center'>1</h2>
                                <h4>Corporate Events &
                                    Conference</h4>
                                <p> Organize impactful corporate events
                                    and conferences to connect with your
                                    audience</p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='text-center'>2</h2>
                                <h4>Product Launches</h4>
                                <p>Create memorable product launches
                                    to generate excitement and drive
                                    sales.</p>
                            </div>
                        </div>


                        <div className='d-flex gap-5 mt-5 event'>
                            <div className='mb-4'>
                                <h2 className='text-center'>3</h2>
                                <h4>Webinar & Virtual
                                    Events</h4>
                                <p> Host engaging webinars and virtual
                                    events to educate and connect with
                                    your audience.</p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='text-center'>4</h2>
                                <h4>Brand Activations</h4>
                                <p>Create immersive brand experiences
                                    to connect with your target audience</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Corporate