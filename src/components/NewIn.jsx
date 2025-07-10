import { useEffect, useState } from "react";
import ProductsLister from "./ProductsLister";


const NewIn = ({products}) => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    
    useEffect(() => {
        setProductsFiltered(products.filter((product) => product.ingreso === "nuevo"))
    }, [products]);

    return(
        <main style={{ margin: '6rem auto', maxWidth: '1200px', padding: '0 1rem' }}>
            <div className="cards-container">
                <ProductsLister productos={productsFiltered}/>
            </div>
        </main>
    );
}

export default NewIn;