import { Link } from 'react-router-dom';

const ShippingInfo = () => {
    return (
        <div className="ShippingInfo">
            <h1>Envíos y Retiros</h1>
            
            <div className="ShippingCard">
                <h3>
                    <span className="ShippingIcon">📍</span>
                    Retiro en Córdoba Capital
                </h3>
                <p style={{ marginBottom: '15px' }}>
                    <strong>Dirección:</strong> Barrio General Paz (consultar dirección exacta al confirmar pedido)
                </p>
                <p style={{ marginBottom: '15px' }}>
                    <strong>Horarios:</strong> Lunes a viernes de 9:00 a 18:00 hs
                </p>
                <p>
                    El retiro local es <strong>sin costo</strong> y te permite ver los productos 
                    antes de llevarlos.
                </p>
            </div>

            <div className="ShippingCard">
                <h3>
                    <span className="ShippingIcon">🚚</span>
                    Envíos a Córdoba
                </h3>
                <ul>
                    <li>Envío dentro de Córdoba Capital: $1.500</li>
                    <li>Envío a barrios periféricos: Consultar</li>
                    <li>Plazo de entrega: 24-48 horas hábiles</li>
                </ul>
            </div>

            <div className="ShippingCard">
                <h3>
                    <span className="ShippingIcon">📦</span>
                    Envíos al Interior
                </h3>
                <ul>
                    <li>Envío a todo el país mediante OCA o Correo Argentino</li>
                    <li>Costo calculado según peso y destino</li>
                    <li>Plazo de entrega: 3-7 días hábiles</li>
                    <li>Empaque profesional con materiales reciclables</li>
                </ul>
            </div>

            <div className="ShippingCard">
                <h3>
                    <span className="ShippingIcon">💳</span>
                    Métodos de Pago
                </h3>
                <ul>
                    <li>Transferencia bancaria</li>
                    <li>Mercado Pago (cuotas sin interés)</li>
                    <li>Efectivo (solo pickups locals)</li>
                </ul>
            </div>

            <div className="ShippingCard">
                <h3>
                    <span className="ShippingIcon">🔄</span>
                    Política de Devoluciones
                </h3>
                <p>
                    Aceptamos devoluciones dentro de los 10 días hábiles desde la recepción 
                    del producto. El producto debe estar en su estado original y sin uso. 
                    Los costos de envío corren por cuenta del cliente, excepto en casos 
                    de defecto de fabricación.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link to="/" className="Button">
                    Volver a la Tienda
                </Link>
            </div>
        </div>
    );
};

export default ShippingInfo;

