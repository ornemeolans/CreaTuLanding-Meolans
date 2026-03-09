import { Link } from 'react-router-dom';

const PhotographyGallery = () => {
    const galleryItems = [
        {
            id: 1,
            src: "/img/termo-encontexto.png",
            title: "Mañana Perfecta",
            description: "El termo en su elemento - energía para tu día"
        },
        {
            id: 2,
            src: "/img/florero-geometrico-encontexto.png",
            title: "Arte Natural",
            description: "Donde la geometría encuentra la naturaleza"
        },
        {
            id: 3,
            src: "/img/juego-de-mate-y-termo-encontexto.png",
            title: "Tradición Modernizada",
            description: "El mate como ritual daily"
        },
        {
            id: 4,
            src: "/img/set-tazas-encontexto.png",
            title: "Momentos de Paz",
            description: "Un café, un libro, tu momento"
        },
        {
            id: 5,
            src: "/img/vela-de-soja-encontexto.png",
            title: "Ambiente Cálido",
            description: "La luz que transforma espacios"
        },
        {
            id: 6,
            src: "/img/organizador-escritorio-encontexto.png",
            title: "Creatividad Organizada",
            description: "Tu espacio de trabajo, tu estilo"
        }
    ];

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                Galería de Estilo
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
                Descubrí cómo nuestros productos cuentan historias en cada espacio
            </p>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '20px' 
            }}>
                {galleryItems.map((item) => (
                    <div key={item.id} style={{ 
                        position: 'relative', 
                        overflow: 'hidden', 
                        borderRadius: '8px',
                        aspectRatio: '4/3',
                        cursor: 'pointer'
                    }}>
                        <img 
                            src={item.src} 
                            alt={item.title}
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                        <div style={{ 
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            right: 0, 
                            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.85))', 
                            padding: '20px', 
                            color: 'white',
                            textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                            boxShadow: '0 -5px 15px rgba(0,0,0,0.3)'
                        }}>
                            <h3 style={{ margin: '0 0 5px 0', fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Link to="/" style={{ 
                    backgroundColor: '#A0522D', 
                    color: '#F5F5DC', 
                    padding: '12px 24px', 
                    border: 'none', 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    cursor: 'pointer', 
                    borderRadius: '4px',
                    display: 'inline-block',
                    textDecoration: 'none'
                }}>
                    Ver Tienda
                </Link>
            </div>
        </div>
    );
};

export default PhotographyGallery;

