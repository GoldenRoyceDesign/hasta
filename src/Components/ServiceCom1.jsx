import React from 'react'
import blog from '../assets/blog.png'
import video from '../assets/video.png'
import social from '../assets/social.png'
import email from '../assets/email.png'

const ServiceCom1 = () => {
  return (
    <>
      <div className='service-one container mt-5 p-3'>
        <h1>Engage, Educate, and Convert</h1>
        <div className='row mt-5'>
          <div className='col-md-3 d-flex flex-column justify-content-center'>
            <div>
              <img src={blog} alt='blog-image' className='img-fluid' /></div>
            <div className='mt-5'>
              <h3>Blog Writing &
                Articles</h3>
              <p>Create informative and
                engaging blog posts to attract
                and educate your audience.</p>
            </div>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center'>
            <div>
              <img src={video} alt='blog-image' className='img-fluid' /></div>
            <div className='mt-5'>
              <h3>Video Production
                & Marketing</h3>
              <p>Produce high-quality videos to
                showcase your brand,
                products, and services</p>
            </div>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center'>
            <div>
              <img src={social} alt='blog-image' className='img-fluid' /></div>
            <div className='mt-5'>
              <h3>Social Media
                Content
              </h3>
              <p>Develop engaging social media
                ‘content to build brand
                awareness and drive
                engagement.</p>
            </div>
          </div>
          <div className='col-md-3 d-flex flex-column justify-content-center'>
            <div>
              <img src={email} alt='blog-image' className='img-fluid' /></div>
            <div className='mt-5'>
              <h3>Email
                Newsletters
              </h3>
              <p>Create targeted email
                newsletters to nuture leads
                and promote your offerings.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCom1