import { Link } from 'react-router-dom'

// Eliminé 'stock' de aquí abajo 👇
const Item = ({ id, name, img, price }) => {
    return (
        <article className="card-body">
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <div className="card-content">
                <header>
                    <h2 className="card-title">
                        {name}
                    </h2>
                </header>
                <section>
                    <p className="card-price">
                        ${price}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    <Link to={`/item/${id}`} className='btn-detail'>
                        Ver detalle
                    </Link>
                </footer>
            </div>
        </article>
    )
}
export default Item