

const ProductsOfKeen = ({products, type}) => {
    const filteredProducts = products.filter((product) => product.type === type);
    return(
        <>
            <section className="ProductsOfKeen">
                <h1>Productos que te pueden interesar</h1>
                <div className="products-list">
                    <ProductsLister products={filteredProducts} />
                </div>
            </section>
        </>
    );
}

export default ProductsOfKeen;