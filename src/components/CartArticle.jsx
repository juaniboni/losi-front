import React from 'react';
import './CartArticle.css';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartReducer';

const CartArticle = (props) => {
  const dispatch = useDispatch();

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(props.id));
  };

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(props.id));
  };

  const handleRemoveFromCart = () => {
    const { id, selectedSize } = props;
    console.log('Removing from cart:', id, selectedSize);
    dispatch(removeFromCart({ id, selectedSize }));
  };
  
  return (
    <div className='cart-article'>
      <div className='cart-article-img'>
        <img src={props.source} alt='' />
      </div>
      <div className='cart-article-body'>
        <div className='cart-article-body-info'>
          <p className='cart-article-body-info-title'>{props.name}</p>
          <div className='cart-article-info-section'>
            <p className='cart-article-body-info-size'>Size: {props.selectedSize}</p>
            <p className='cart-article-body-info-price'>Price: ${props.price * props.quantity}</p>
          </div>
        </div>
        <div className='cart-article-body-options'>
          <div className='cart-article-body-options-counter'>
            <div className='cart-article-body-options-counter-action' onClick={handleDecrementQuantity}>
              <p>-</p>
            </div>
            <p>{props.quantity}</p>
            <div className='cart-article-body-options-counter-action' onClick={handleIncrementQuantity}>
              <p>+</p>
            </div>
          </div>
          <div className='remove-link' onClick={handleRemoveFromCart}>
            Remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartArticle;
