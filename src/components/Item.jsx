import { Link } from "react-router-dom";

const Item = ({ id, title, img, price, stock, category }) => {
    return (
        <article className="CardItem">
            <header>
                <h2 className="ItemTitle">{title}</h2>
            </header>
            <picture>
                <img 
                    src={img} 
                    alt={title} 
                    style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
                />
            </picture>
            <section style={{ padding: '0 15px' }}>
                <p className="ItemCategory">{category}</p>
                <p className="ItemPrice">${price}</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Button">Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item;
