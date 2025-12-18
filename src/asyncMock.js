// src/asyncMock.js

const products = [
    {
        id: "1",
        name: "MATERA MINIMAL",
        price: 12500,
        category: "hogar-y-cocina",
        img: "/assets/matera minimal.png", 
        stock: 15,
        description: "Termo de acero inoxidable doble pared, 500ml."
    },
    {
        id: "2",
        name: "FLORERO GEOMÉTRICO",
        price: 8900,
        category: "decoracion",
        img: "/assets/florero geometrico.png",
        stock: 12,
        description: "Florero de cerámica en tono Beige Crema."
    },
    {
        id: "3",
        name: "ORGANIZADOR ESCRITORIO",
        price: 6500,
        category: "libreria",
        img: "/assets/organizador escritorio.png",
        stock: 20,
        description: "Organizador modular de madera."
    },
    {
        id: "4",
        name: "DIFUSOR AROMÁTICO",
        price: 3200,
        category: "decoracion",
        img: "/assets/difusor aromatico.png",
        stock: 10,
        description: "Difusor con varillas de bambú y esencia de vainilla."
    },
    {
        id: "5",
        name: "SET TAZAS",
        price: 4500,
        category: "hogar-y-cocina",
        img: "/assets/set tazas.png",
        stock: 8,
        description: "Set de 2 tazas de cerámica esmaltada."
    }
    // Puedes seguir agregando tus productos aquí siguiendo este formato...
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};