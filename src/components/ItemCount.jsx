import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                <button className="Button" onClick={decrement} style={{width: '30px'}}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment} style={{width: '30px'}}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock} style={{ width: '100%', backgroundColor: '#A0522D', color: 'white', border: 'none', padding: '10px' }}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount