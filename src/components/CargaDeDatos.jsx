import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getProducts } from "../asyncMock";

const CargaDeDatos = () => {
    
    const subirDatos = async () => {
        const products = await getProducts();
        const productsCollection = collection(db, "products");

        products.forEach(async (prod) => {
            // CORRECCIÓN: Copiamos el producto y borramos el id para que no haya variables sin usar
            const dataToUpload = { ...prod };
            delete dataToUpload.id;

            // --- MAPEO DE CATEGORÍAS AUTOMÁTICO ---
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
        
        alert("¡Carga masiva terminada! Revisa tu consola de Firebase.");
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h2>Carga de Base de Datos</h2>
            <button 
                onClick={subirDatos} 
                className="Button" 
                style={{ fontSize: '20px', padding: '15px' }}
            >
                Subir productos a Firebase
            </button>
        </div>
    );
};

export default CargaDeDatos;