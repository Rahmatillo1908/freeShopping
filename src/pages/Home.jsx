import React from 'react'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecilaProduct from '../components/SpecilaProduct'
function Home() {
  const marquees = [
    {
      img:"./images/brand-01.png",
      alt:"brand",
    },
    {
      img:"./images/brand-02.png",
      alt:"brand",
    },
    {
      img:"./images/brand-03.png",
      alt:"brand",
    },
    {
      img:"./images/brand-04.png",
      alt:"brand",
    },
    {
      img:"./images/brand-05.png",
      alt:"brand",
    },
    {
      img:"./images/brand-06.png",
      alt:"brand",
    },
    {
      img:"./images/brand-07.png",
      alt:"brand",
    },
    {
      img:"./images/brand-08.png",
      alt:"brand",
    },
  ]
  return (
    <div>
      <section className='home-wrapper-1 p-5' >
        <div className="container-xxl">
          <div className="d-flex">
            <div className="col-6">
              <div className="main-banner position-relative p-2">
                <img src="./images/main-banner-1.jpg"
                  className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button' >BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img src="./images/catbanner-01.jpg"
                    className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Seal</h4>
                    <h5>Leptops Max</h5>
                    <p>From $1699.00 or <br /> $64.42/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="./images/catbanner-02.jpg"
                    className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599 or <br /> $49.91/mo. for mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="./images/catbanner-03.jpg"
                    className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> styles and colors</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="./images/catbanner-04.jpg"
                    className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Free engraving</h4>
                    <h5>Airpods Max</h5>
                    <p>High-fidelity playback & <br /> ultra-low distoction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 p-5">
        <div className="container--xl">
          <div className="d-flex">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-around">
                <div className='d-flex align-items-center gap-10' >
                  <img src="./images/service.png" alt="servies" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10' >
                  <img src="./images/service-02.png" alt="servies" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10' >
                  <img src="./images/service-03.png" alt="servies" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with an esxpert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10' >
                  <img src="./images/service-04.png" alt="servies" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10' >
                  <img src="./images/service-05.png" alt="servies" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 p-5'>
        <div className="container-xxl">
          <div className="d-flex">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="tv" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watched</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/watch.jpg" alt="watch" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/headphone.jpg" alt="headphone" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="tv" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watched</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/watch.jpg" alt="watch" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/headphone.jpg" alt="headphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-wraper p-5 home-wrapper-2">
        <div className="section-xxl">
            <div className="col-12">
              <h3 className='section-heading' >Featured Collection</h3>
            </div>
          <div className="d-flex">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>
      <section className="special-wrapper p-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="col-12">
              <h1>Special Products</h1>
            </div>
          <div className="row gap-10">
            <SpecilaProduct/>
            <SpecilaProduct/>
            <SpecilaProduct/>
          </div>
        </div>
      </section>
      <section className="marque-wrapper p-5">
        <div className="container-xxl">
          <div className="d-flex">
            <div className="col-12">
              <div className="marquese-inner-wrapper bg-white p-3">
                <Marquee className='d-flex' >
                  {marquees.map(marquee =>(
                    <div className='mx-4 w-25'>
                      <img src={marquee.img} alt={marquee.alt} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wraper p-5 home-wrapper-2">
        <div className="section-xxl">
            <div className="col-12">
              <h3 className='section-heading' >Our Latest Blogs</h3>
            </div>
          <div className="d-flex">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home