import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
const ProductCard = () => {
  return (
    <div className='col-3' >
      <div className="product-card position-relative">
        <div className="wishlistIcon position-absolute ">
          <Link to='/' >
            <img src="./images/wish.svg" alt="wish" />
          </Link>
        </div>
        <div className="product-image">
          <img src="./images/watch.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids Headphones bulk 10 pack multi colored for  sudents
          </h5>
          <ReactStars count={5} size={24} value={3} activeColor="#ffd700"/>

          <p className='price' >$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column'>
            <Link>
              <img src="./images/add-cart.svg" alt="addCart" />
            </Link>
            <Link>
              <img src="./images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="./images/prodcompare.svg" alt="prodcompare" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard