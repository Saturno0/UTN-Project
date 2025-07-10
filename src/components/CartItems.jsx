import { removeFromCart } from "../hooks/cartSlice";
import { Link } from "react-router-dom";


const Cartitems = ({ items, dispatch }) => {
    
    return(
        <div className="cart-card-container">
            {items.map((item) => (
                <div
                  className="cart-card"
                  key={`${item.id}-${item.name}-${item.color}`}
                >
                  <div className="card-header">
                    <p className="product-title">{item.name}</p>
                  </div>

                  <div className="card-body">
                    <p><strong>Color:</strong> {item.color}</p>
                    <p><strong>Cantidad:</strong> {item.quantity}</p>
                    <p><strong>Precio unidad:</strong> ${item.precio_actual || 100}</p>
                    <p>
                      <strong>Precio final:</strong> $
                      {(item.precio_actual || 100) * item.quantity}
                    </p>
                  </div>
                  <button
                      className="btn-remove"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Quitar uno
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cartitems;