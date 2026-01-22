import { Link } from "react-router-dom";

const Item = ({ id, title, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header>
                <h2 style={{ padding: '10px 15px', fontSize: '1.2rem', margin: 0 }}>{title}</h2>
            </header>
            <picture>
                {/* Asegúrate de que en Firebase el campo 'img' tenga la ruta: /img/nombre.png */}
                <img src={img} alt={title} className="CardImg" />
            </picture>
            <section style={{ padding: '0 15px' }}>
                <p>Precio: ${price}</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Button">Ver detalle</Link>
            </footer>
        </article>
    );
};
export default Item;