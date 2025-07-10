import EmptyCart from './EmptyCart.jsx';
import CartItems from './CartItems.jsx';
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../hooks/cartSlice.js';

const Cart = ({ items, total, dispatch }) => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        } else {
            setUser({ isRegistered: false });
        }
    }, [])

    const handleNavigate = () => {
        if (!user.isRegistered) {
            navigate('/login');
        } else {
            navigate('/checkout');
        }
    }
    
    return (
        <main className="cart-page container">
            <h1 className="cart-title" style={{textDecoration: "underline"}}>Tu carrito:</h1>

            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <CartItems items={items} total={total} dispatch={dispatch} />

                    <div className="cart-summary" id="cart-summary">
                        <h2>Total: ${total}</h2>
                        <button className="btn-clear" onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
                        <div className="cart-actions">
                        <button className="btn-buy" onClick={() => handleNavigate()}>
                            Comprar 
                        </button>

                        <Link to="/" className="btn-continue">Seguir comprando</Link> 
                    </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default Cart;