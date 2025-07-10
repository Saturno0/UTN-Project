import { useDispatch } from 'react-redux';
import { addToCart } from '../hooks/cartSlice';
import { useState, useEffect } from 'react';
import ProductColors from './ProductColors';
import ProductInfo from './ProductInfo';


const ProductDetail = ({ product }) => {
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});
    const [price, setPrice] = useState(0);
    console.log(product)
    

    useEffect(() => {
        if (product?.colores && Array.isArray(product.colores)) {
            const initialQuantities = product.colores.reduce((acc, colorObj) => {
                acc[colorObj.nombre] = 0;
                return acc;
            }, {});
            setQuantities(initialQuantities);
        }
    }, [product]);

    const handleQuantityChange = (colorName, value) => {
        setQuantities({
            ...quantities,
            [colorName]: Math.max(0, parseInt(value) || 0)
        });
        console.log(`precio: ${price}`)
    }

    const handleAddToCart = () => {
        Object.entries(quantities).forEach(([colorName, qty]) => {
            for (let i = 0; i < qty; i++) {
                dispatch(addToCart({ name: product.nombre, id: product.id ,color: colorName, price: product.precio_actual }));
            }
        });

        // Reset después de agregar
        const resetQuantities = product.colores.reduce((acc, colorObj) => {
            acc[colorObj.nombre] = 0;
            return acc;
        }, {});
        setQuantities(resetQuantities);
    };

    const totalQty = Object.values(quantities).reduce((sum, q) => sum + q, 0);

    useEffect(() => {
        if (product?.precio_actual) {
            setPrice(totalQty * product.precio_actual);
        }
    }, [quantities, product?.precio_actual, totalQty]);

    // Mientras se carga el producto o los colores
    if (!product || !product.colores || Object.keys(quantities).length === 0) {
        return <div>Cargando producto...</div>;
    }

    return (
        <div className="product">
            <h1>Producto Destacado</h1>
            <div className="product-details">
                <div className="product-image">
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="product-info">

                    <ProductInfo product={product} />

                    <ProductColors
                        product={product}
                        quantities={quantities}
                        onQuantityChange={handleQuantityChange}
                    />

                    <button
                        onClick={handleAddToCart}
                        disabled={totalQty === 0}
                    >
                        Añadir al carrito ({totalQty})
                    </button>
                    <p>
                        <strong>Total: {price}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
