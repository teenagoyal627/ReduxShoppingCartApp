import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../Store/cartSlice';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price,id } = props.item;

  const dispatch=useDispatch()
  const removeItem=()=>{
    dispatch(cartActions.removeItemFromCart(id))

  }

  const addItem=()=>{
    dispatch(cartActions.addItemCart({
      id,
      title,
      price
    }))

  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
