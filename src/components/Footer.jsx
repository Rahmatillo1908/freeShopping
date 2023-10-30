import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="d-flex align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="./images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white' >Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control" placeholder='Your Email Address' />
                <span className='input-group-text p-2' >Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="d-flex">
            <div className="col-4">
              <h4>Contact Us</h4>
              <address className='text-white fs-6' >
              Address: Fergana, Uzbekistan <br />
              </address>
              <a href="tel:+90 343 45 90" className='mt-4 d-block mb-3 text-white'>
                +90 343 45 90
              </a>
              <a href="rahmatillo722022@gmail.com" className='mt-4 d-block mb-3 text-white'>
                rahmatillo722022@gmail.com
              </a>
              <div className="socialIcons d-flex align-items-center gap-30 mt-4">
                <a href="">
                  <BsTelegram/>
                </a>
                <a href="">
                  <BsGithub/>
                </a>
                <a href="">
                  <BsYoutube/>
                </a>
                <a href="">
                  <BsInstagram/>
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="" className='text-white py-2 mb-1' >Privecy Policy</Link>
                <Link to="" className='text-white py-2 mb-1' >Refund Policy</Link>
                <Link to="" className='text-white py-2 mb-1' >Shipping Policy</Link>
                <Link to="" className='text-white py-2 mb-1' >Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="" className='text-white py-2 mb-1' >About Us</Link>
                <Link to="" className='text-white py-2 mb-1' >Faq</Link>
                <Link to="" className='text-white py-2 mb-1' >Contact</Link>
                <Link to="" className='text-white py-2 mb-1' >Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4>Quick Units</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="" className='text-white py-2 mb-1' >Laptops</Link>
                <Link to="" className='text-white py-2 mb-1' >Headphones</Link>
                <Link to="" className='text-white py-2 mb-1' >Tablets</Link>
                <Link to="" className='text-white py-2 mb-1' >Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="d-flex">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer