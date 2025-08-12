document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    const products = [
        { name: 'Zapatilla Running Pro', price: '$120.00', image: 'https://via.placeholder.com/300x300.png?text=Producto+1' },
        { name: 'Camiseta Deportiva', price: '$35.00', image: 'https://via.placeholder.com/300x300.png?text=Producto+2' },
        { name: 'Pantalón Corto Flex', price: '$45.00', image: 'https://via.placeholder.com/300x300.png?text=Producto+3' },
        { name: 'Sudadera con Capucha', price: '$60.00', image: 'https://via.placeholder.com/300x300.png?text=Producto+4' }
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);

        const productName = document.createElement('h4');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.classList.add('price');
        productPrice.textContent = product.price;
        productCard.appendChild(productPrice);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Agregar al carrito';
        productCard.appendChild(addToCartButton);

        productGrid.appendChild(productCard);
    });
});