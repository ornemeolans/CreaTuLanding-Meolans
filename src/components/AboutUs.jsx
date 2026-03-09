import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <h1>Sobre KÕSA</h1>
            
            <div className="AboutUsContent">
                <div className="AboutUsText">
                    <p>
                        KÕSA es un polirubro online con base en Córdoba Capital que ofrece una curaduría de artículos de diseño,
                        decoración y bazar funcional. Nos posicionamos como el punto de encuentro entre la innovación
                        y el diseño accesible.
                    </p>
                    <br />
                    <p>
                        Seleccionamos objetos que elevan la estética y la practicidad del hogar,
                        destacando texturas y diseños que transforman lo cotidiano en algo extraordinario.
                    </p>
                </div>

                <div className="AboutUsMission">
                    <h3>Misión</h3>
                    <p>
                        Curar y ofrecer artículos de diseño y bazar funcional que eleven la estética y la practicidad del hogar.
                        Facilitamos el acceso a la innovación en el día a día, con un modelo de venta online eficiente y cercano
                        a nuestros clientes en Córdoba.
                    </p>
                </div>

                <div className="AboutUsVision">
                    <h3>Visión</h3>
                    <p>
                        Ser el referente líder en la venta online de diseño y bazar curado en la región central de Argentina,
                        reconocido por nuestra capacidad de anticipar tendencias, la calidad de nuestros productos y la
                        excelencia en la experiencia de compra y retiro local.
                    </p>
                </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
                <Link to="/" className="Button">
                    Explorar Productos
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;

