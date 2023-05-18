import React from 'react';
import '../styles/Product.css'

function Product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>Title</p>
            <p className="product__price">$50</p>
            <div className="product__rating">⭐⭐⭐⭐</div>

            <img src="https://m.media-amazon.com/images/I/71ummMzf9yL._SL1500_.jpg" alt="product__image" />

            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product