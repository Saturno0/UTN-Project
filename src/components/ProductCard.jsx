import { Link } from 'react-router-dom';

const ProductCard = ({ productos, id }) => {
    const producto = productos.find((prod) => prod.id === id);
    return (
        <Link to={{
                pathname: `/producto/${producto.id}`,
                hash: "#main"
            }} 
            state={{productos: productos, producto: producto}}
        >
            <div className="card">
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={`imagen de ${producto.nombre}`} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio_actual}</p>
            </div>
        </Link>
    );
};


export default ProductCard;