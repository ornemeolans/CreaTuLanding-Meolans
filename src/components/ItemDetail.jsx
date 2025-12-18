import ItemCount from './ItemCount'

// Eliminé 'category' de aquí abajo 👇
const ItemDetail = ({ name, img, description, price, stock }) => {
    return (
        <article className="CardItem">
            <picture style={{ display: 'flex' }}>
                <img src={img} alt={name} className="ItemImgDetail" />
            </picture>
            
            <section className="DetailContent">
                <header>
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <p className="InfoDescription">
                    {description}
                </p>
                <p className="InfoPrice">
                    ${price}
                </p>
                
                <footer className='ItemFooter'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                </footer>
            </section>
        </article>
    )
}

export default ItemDetail