import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="FooterContent">
                <div className="FooterSection">
                    <h4>KÕSA</h4>
                    <p>
                        Curaduría de objetos únicos para espacios que cuentan historias.
                        Diseño minimalista con alma artesanal.
                    </p>
                    <div className="FooterSocial">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            📷
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            📘
                        </a>
                        <a href="https://wa.me/54351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            💬
                        </a>
                    </div>
                </div>

                <div className="FooterSection">
                    <h4>Comprar</h4>
                    <ul>
                        <li><Link to="/">Todos los Productos</Link></li>
                        <li><Link to="/category/bazar">Bazar</Link></li>
                        <li><Link to="/category/deco">Deco</Link></li>
                        <li><Link to="/category/sets">Sets</Link></li>
                    </ul>
                </div>

                <div className="FooterSection">
                    <h4>Información</h4>
                    <ul>
                        <li><Link to="/nosotros">Sobre KÕSA</Link></li>
                        <li><Link to="/envios">Envíos y Retiros</Link></li>
                        <li><Link to="/galeria">Galería</Link></li>
                        <li><Link to="/envios">Política de Devoluciones</Link></li>
                    </ul>
                </div>

                <div className="FooterSection">
                    <h4>Contacto</h4>
                    <ul>
                        <li>📍 Córdoba Capital, Argentina</li>
                        <li>💬 WhatsApp: +54 351 XXX-XXXX</li>
                        <li>✉️ hola@kosa.com.ar</li>
                    </ul>
                </div>
            </div>

            <div className="FooterBottom">
                <p>© {new Date().getFullYear()} KÕSA. Todos los derechos reservados.</p>
                <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>
                    Diseñado con ❤️ en Córdoba
                </p>
            </div>
        </footer>
    );
};

export default Footer;

