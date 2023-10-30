import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <div className='col-3' >
        <div className="blog-card">
            <div className="car-image">
                <img className='img-fluid' src="./images/blog-1.jpg" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec , 2022</p>
                <h5 className='title'>A beatiful sunday morning renaissance</h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla assumenda eaque ducimus aliquid dolores!
                </p>
                <Link to="/" className='button'  > 
                   Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard