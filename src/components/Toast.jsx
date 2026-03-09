import { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 400); // Wait for animation
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div 
            className={`Toast Toast-${type}`}
            style={{
                animation: isVisible ? 'slideIn 0.4s ease' : 'slideOut 0.4s ease'
            }}
        >
            <span className="Toast-icon">
                {type === 'success' ? '✓' : 'ℹ'}
            </span>
            {message}
        </div>
    );
};

export default Toast;

