import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card-body" style={{ width: '300px', border: '1px solid #D1D1D1', borderRadius: '8px', padding: '10px' }}>
            <header>
                <h2 className="card-title">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option' style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '5px 10px', textDecoration: 'none', borderRadius: '4px' }}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item