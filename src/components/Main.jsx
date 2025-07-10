
import ProductsLister from './ProductsLister';
import Slides from './Slides';
import PropTypes from 'prop-types';


const Main = ( {products} ) =>{

    return(
        <main>
            <Slides />
            <section className="products-container" id="productos">
                <h1>Nuestros Productos</h1>
                <div className="cards-container">
                    <ProductsLister productos={products} />
                </div>
            </section>
        </main>
    );
}

Main.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
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
    ).isRequired
};

export default Main;