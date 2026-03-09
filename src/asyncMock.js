const products = [
    // --- BAZAR ---
    {
        id: "1",
        title: "MATERA MINIMAL",
        price: 12500,
        category: "bazar",
        img: "/img/matera-minimal.png",
        imgHover: "/img/matera-minimal.png", // Segunda imagen para hover
        stock: 15,
        description: "Termo de acero inoxidable doble pared, 500ml, ideal para llevar."
    },
    {
        id: "5",
        title: "SET TAZAS",
        price: 4500,
        category: "bazar",
        img: "/img/set-tazas.png",
        imgHover: "/img/set-tazas.png",
        stock: 8,
        description: "Set de 2 tazas de cerámica esmaltada de alta durabilidad."
    },
    {
        id: "6",
        title: "SET DE CUBIERTOS DORADOS",
        price: 8900,
        category: "bazar",
        img: "/img/cubiertos.png",
        imgHover: "/img/cubiertos.png",
        stock: 10,
        description: "Set de cubiertos de acero inoxidable con acabado dorado mate."
    },
    {
        id: "7",
        title: "JARRO TÉRMICO",
        price: 6200,
        category: "bazar",
        img: "/img/jarro-termico.png",
        imgHover: "/img/jarro-termico.png",
        stock: 20,
        description: "Jarro térmico con manija, conserva calor por 4 horas."
    },
    {
        id: "9",
        title: "PAVA ELÉCTRICA VINTAGE",
        price: 45000,
        category: "bazar",
        img: "/img/pava-electrica.png",
        imgHover: "/img/pava-electrica.png",
        stock: 5,
        description: "Pava eléctrica diseño retro, corte automático y medidor de agua."
    },
    {
        id: "11",
        title: "VASO CERVECERO",
        price: 3500,
        category: "bazar",
        img: "/img/vaso-cervecero.png",
        imgHover: "/img/vaso-cervecero.png",
        stock: 24,
        description: "Vaso estilo pinta de vidrio reforzado."
    },
    {
        id: "12",
        title: "VASO TÉRMICO TO-GO",
        price: 5800,
        category: "bazar",
        img: "/img/vaso-termico-chico-con-tapa.png",
        imgHover: "/img/vaso-termico-chico-con-tapa.png",
        stock: 18,
        description: "Vaso térmico pequeño con tapa antiderrame, ideal café de especialidad."
    },

    // --- DECO ---
    {
        id: "2",
        title: "FLORERO GEOMÉTRICO",
        price: 8900,
        category: "deco",
        img: "/img/florero-geometrico.png",
        imgHover: "/img/florero-geometrico.png",
        stock: 12,
        description: "Florero de cerámica con diseño geométrico en tono Beige Crema."
    },
    {
        id: "4",
        title: "DIFUSOR AROMÁTICO",
        price: 3200,
        category: "deco",
        img: "/img/difusor-aromatico.png",
        imgHover: "/img/difusor-aromatico.png",
        stock: 10,
        description: "Difusor con varillas de bambú y esencia de vainilla y coco."
    },
    {
        id: "13",
        title: "VELA DE SOJA",
        price: 4200,
        category: "deco",
        img: "/img/vela-de-soja.png",
        imgHover: "/img/vela-de-soja.png",
        stock: 15,
        description: "Vela de cera de soja en envase de vidrio, aroma lavanda."
    },

    // --- SETS ---
    {
        id: "3",
        title: "ORGANIZADOR ESCRITORIO",
        price: 6500,
        category: "sets",
        img: "/img/organizador-escritorio.png",
        imgHover: "/img/organizador-escritorio.png",
        stock: 20,
        description: "Organizador modular de madera para mantener tu espacio ordenado."
    },
    {
        id: "8",
        title: "KIT MATE Y TERMO",
        price: 22000,
        category: "sets",
        img: "/img/juego-de-mate-y-termo.png",
        imgHover: "/img/juego-de-mate-y-termo.png",
        stock: 6,
        description: "Kit completo: Termo 1L + Mate camionero + Bombilla."
    },
    {
        id: "10",
        title: "VAJILLA NÓRDICA COMPLETA",
        price: 32000,
        category: "sets",
        img: "/img/vajilla-nordica.png",
        imgHover: "/img/vajilla-nordica.png",
        stock: 4,
        description: "Juego de vajilla para 4 personas, cerámica artesanal."
    }
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

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const categories = [...new Set(products.map(p => p.category))];
            const categoryLabels = {
                bazar: "Bazar",
                deco: "Deco",
                sets: "Sets"
            };
            resolve(categories.map(cat => ({
                id: cat,
                label: categoryLabels[cat] || cat
            })));
        }, 500);
    });
};
