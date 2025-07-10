import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';

const ProductsLister = ( {productos} ) => {
    return (
        productos.map((producto) => (
             <ProductCard key={producto.id} productos={productos} id={producto.id} />
        ))
    );
}

ProductsLister.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        calificación: PropTypes.number.isRequired,
        opiniones: PropTypes.number.isRequired,
        descripción: PropTypes.string.isRequired,
        descuento: PropTypes.number.isRequired,
        stock: PropTypes.bool.isRequired,
        precio_actual: PropTypes.number.isRequired,
        precio_original: PropTypes.number.isRequired,
        tamaños: PropTypes.arrayOf(PropTypes.string).isRequired,
        especificaciones: PropTypes.shape({
            material: PropTypes.string.isRequired,
            peso: PropTypes.string.isRequired,
            fabricado_en: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default ProductsLister;