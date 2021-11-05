import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { adjustQty,removeFromCart } from "../redux/action/productActions";

const CartItem = ({ item}) => {
  const dispatch = useDispatch();
    //const item = useSelector((state)=> state.allProducts.cart);
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    
    dispatch(adjustQty(item.id, e.target.value));
  };

  return (

    <div className={styles.cartItem}>
      <img style={{"width":"200","height":"200px"}}
        className="mt-1 ml-1"
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}> $ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};


export default CartItem;