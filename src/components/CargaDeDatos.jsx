import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getProducts } from "../asyncMock";

const CargaDeDatos = () => {
    const subirDatos = async () => {
        const products = await getProducts();
        const productsCollection = collection(db, "products");

        products.forEach(async (prod) => {
            const dataToUpload = { ...prod };
            delete dataToUpload.id; // Borramos el ID local para que Firebase cree uno nuevo

            // Mapeo de categorías para que coincidan con tu menú
            if (dataToUpload.category === 'hogar-y-cocina') dataToUpload.category = 'bazar';
            if (dataToUpload.category === 'decoracion') dataToUpload.category = 'deco';
            if (dataToUpload.category === 'libreria') dataToUpload.category = 'sets';

            try {
                await addDoc(productsCollection, dataToUpload);
                console.log(`Producto subido: ${dataToUpload.name}`);
            } catch (error) {
                console.error("Error al subir:", error);
            }
        });
        alert("¡Base de datos regenerada con éxito!");
    };

    return (
        <button onClick={subirDatos} style={{ padding: '20px', fontSize: '20px', background: 'red', color: 'white' }}>
            CLICK AQUÍ PARA CARGAR BD
        </button>
    );
};

export default CargaDeDatos;