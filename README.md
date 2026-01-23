# KÕSA | E-commerce de Decoración

**KÕSA** es una Single Page Application (SPA) de comercio electrónico enfocada en artículos de decoración y hogar. Este proyecto fue desarrollado como entrega final para el curso de React JS, implementando la navegación fluida, manejo de estados globales y persistencia de datos en la nube.

## 🚀 Demo
Puedes ver el proyecto desplegado aquí: [https://kosa-ecommerce.netlify.app/](https://kosa-ecommerce.netlify.app/)

## 📋 Características Principales

* **Navegación por Categorías:** Filtrado dinámico de productos (vajilla, mates, decoración, etc.) sin recargar la página.
* **Detalle de Producto:** Vista individual con descripción, precio y control de stock.
* **Carrito de Compras:**
    * Agregar productos con control de stock.
    * Visualización de resumen de compra (precio total, cantidad total).
    * Eliminar ítems o vaciar el carrito.
    * Persistencia del estado durante la navegación (Context API).
* **Checkout:** Formulario de finalización de compra que genera una orden con ID único.
* **Base de Datos en Tiempo Real:** Integración con **Firebase Firestore** para:
    * Obtener el catálogo de productos.
    * Guardar las órdenes de compra generadas.
* **Diseño Responsivo:** Adaptado a diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

* **Front-end:** [React JS](https://react.dev/) (Vite)
* **Enrutamiento:** [React Router DOM](https://reactrouter.com/) (v7)
* **Estilos:** CSS3
* **Base de Datos:** [Firebase Firestore](https://firebase.google.com/)
* **Control de Versiones:** Git & GitHub

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu computadora:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/ProyectoFinal+Meolans.git](https://github.com/TU_USUARIO/ProyectoFinal+Meolans.git)
    ```
    *(Asegúrate de reemplazar la URL con la de tu repositorio)*

2.  **Instalar dependencias:**
    Navega a la carpeta del proyecto y ejecuta:
    ```bash
    cd CreaTuLanding-Meolans
    npm install
    ```

3.  **Configurar Firebase:**
    Crea un archivo `.env` en la raíz del proyecto (si no está incluido) con tus credenciales de Firebase. *Nota: Para efectos académicos, las credenciales pueden estar en `src/firebase/config.js`.*

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  **Abrir en el navegador:**
    El proyecto estará disponible en `http://localhost:5173/` (o el puerto que indique la consola).

## 📂 Estructura del Proyecto

```text
src/
├── components/          # Componentes de presentación y contenedores
│   ├── Cart.jsx         # Vista del carrito
│   ├── Checkout.jsx     # Formulario de orden
│   ├── ItemDetail...    # Detalle de producto
│   ├── ItemList...      # Cat