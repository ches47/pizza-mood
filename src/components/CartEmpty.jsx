import React from 'react';
import { Link } from 'react-router-dom';

import CartEmptyIMG from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Cart is Empty</h2>
        <p>Add is pizza or pizzas to Cart, Please</p>
        <img src={CartEmptyIMG} alt="pizza" />
        <Link to="/" className="button button-black">
          <span>Back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
