// src/components/ItemDetailContainer.jsx
import { useState, useEffect } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        // Elimino el setLoading(true) de aquí para evitar el error.
        // Al cambiar el itemId, simplemente lanzo la nueva petición.
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    // LÓGICA CLAVE: Calculo el estado de carga "al vuelo".
    // Si no hay producto cargado, O SI el ID del producto que tenemos en memoria
    // es diferente al que pide la URL (itemId), significa que estamos cargando uno nuevo.
    const isLoading = !product || String(product.id) !== itemId

    // Mientras isLoading sea true, muestro el mensaje y evitamos renderizar el ItemDetail con datos viejos
    if(isLoading) return <h3>Cargando detalle...</h3>

    return(
        <div className='ItemDetailContainer' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer