export default  function Product(){
    const products = [
        { id: 1, name: 'Arroz', price: 5.69 },
        { id: 2, name: 'Feijão', price: 18.99 },
        { id: 3, name: 'Macarrão', price: 7.99 },
    ]
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );   
}