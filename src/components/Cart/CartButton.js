import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../Store/uiSlice';

const CartButton = (props) => {

  const cartQuantity= useSelector(state=>state.cart.totalQuantity)

  const dispatch=useDispatch()
   const cartHandler=()=>{
    dispatch(uiAction.toggle())
    
   }

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
