import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion"; // Importa motion desde framer-motion

import "./AboutUs.css";

const AboutUs = () => {
  const [showTechnologiesInfo, setShowTechnologiesInfo] = useState(false);

  const toggleTechnologiesInfo = () => {
    setShowTechnologiesInfo(!showTechnologiesInfo);
  };

  return (
    <>
      <Navbar />
      <div className="card-about">
        <h2 className="card-title">Sobre el Proyecto</h2>
        <p className="card-description">
          Losi es una plataforma de e-commerce diseñada para los entusiastas del
          skate y la moda urbana. Este proyecto representa muchos de nuestros
          conocimientos adquiridos durante el curso en un entorno práctico y
          desafiante. El objetivo principal de Losi es proporcionar a los
          usuarios una experiencia de compra fluida y atractiva, centrada en
          productos relacionados con el skateboarding y la cultura urbana.
        </p>
      </div>
      <div className="container-aboutUs">
        <div className="card">
          <h2 className="card-title">Creación del Proyecto</h2>
          <p className="card-description">
            Utilizamos metodologías ágiles para la gestión de proyectos,
            adaptándonos rápidamente a los cambios y manteniendo un flujo de
            trabajo eficiente. Nos comunicamos y coordinamos nuestras tareas
            mediante plataformas como Trello y Discord. Cada miembro del equipo
            asumió roles específicos, desde el diseño de la interfaz de usuario
            hasta la gestión del backend y la base de datos. Esta distribución
            nos permitió aprovechar al máximo nuestras fortalezas y trabajar en
            armonía para superar los desafíos del proceso.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Tecnologías Utilizadas</h2>
          <p className="card-description">
            Experimentamos con una variedad de tecnologías y herramientas, desde
            el uso de MySQL para la gestión de datos hasta la implementación de
            React y Redux para la creación de una interfaz de usuario dinámica y
            receptiva. Además, exploramos bibliotecas como Bootstrap, Axios,
            React Router Dom y muchas otras, que enriquecieron la funcionalidad
            y el diseño de nuestra aplicación.
          </p>
          <button
            onClick={toggleTechnologiesInfo}
            className="technologies-button"
          >
            Más sobre nuestras tecnologías
          </button>
          {showTechnologiesInfo && (
            <div className="technologies-info">
              <p>
                <strong>MySQL:</strong> Hemos implementado una base de datos
                MySQL para gestionar eficientemente la información de productos,
                usuarios y transacciones.{" "}
              </p>
              <p>
                {" "}
                <strong>React:</strong> Utilizamos React para construir una
                interfaz de usuario dinámica y receptiva.{" "}
              </p>
              <p>
                <strong>Redux: </strong>Para gestionar el estado de la
                aplicación de manera eficiente
              </p>
              <p>
                <strong>Bootstrap:</strong> para el diseño y la maquetación de
                la interfaz de usuario, lo que nos ha permitido crear un diseño
                moderno y adaptable que se ajusta a diferentes dispositivos y
                tamaños de pantalla.
              </p>
              <p>
                <strong>Axios: </strong>Para realizar solicitudes HTTP desde el
                cliente al servidor, una biblioteca basada en promesas que nos
                proporciona una interfaz fácil de usar para interactuar con API
                externas y gestionar las respuestas del servidor de manera
                eficiente.
              </p>
              <p>
                <strong>Formidable:</strong> Utilizamos Formidable para manejar
                formularios en nuestra aplicación. Esta biblioteca nos ha
                ayudado a gestionar la validación de datos del usuario y a
                manejar los envíos de formularios de manera efectiva.
              </p>
              <p>
                <strong>React Router Dom:</strong> Para la navegación dentro de
                nuestra aplicación, hemos integrado React Router Dom, que nos
                permite definir rutas y enlaces entre diferentes componentes de
                React, proporcionando una experiencia de usuario fluida y sin
                interrupciones.
              </p>
              <p>
                <strong>React Fast Marquee:</strong> Hemos utilizado React Fast
                Marquee para crear efectos de desplazamiento rápido y atractivo
                en ciertas secciones de nuestra aplicación, añadiendo un toque
                de dinamismo visual.
              </p>
              <p>
                <strong>React Pro Sidebar:</strong> Para la creación de la barra
                lateral de navegación en nuestra aplicación, hemos empleado
                React Pro Sidebar, que nos ofrece una solución eficiente y
                personalizable para organizar y presentar los diferentes enlaces
                y opciones de navegación.
              </p>
              <p>
                <strong>React Responsive Carousel y React Slick:</strong> Para
                implementar carousels y galerías de imágenes interactivas, hemos
                integrado React Responsive Carousel y React Slick, dos
                bibliotecas que nos permiten crear presentaciones visuales
                atractivas y responsivas.
              </p>
              <p>
                <strong>Redux Persist:</strong> Hemos utilizado Redux Persist
                para mantener el estado de la aplicación persistente entre
                sesiones, lo que mejora la experiencia del usuario al recordar
                preferencias y datos seleccionados previamente.
              </p>
              <p>
                <strong>Table Plus:</strong> Utilizamos Table Plus como una
                herramienta de gestión de bases de datos MySQL, que nos permite
                visualizar y manipular los datos de manera eficiente durante el
                desarrollo y la depuración.
              </p>{" "}
            </div>
          )}
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-cards">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="team-card"
            >
              <img
                className="team-pic"
                src={`${import.meta.env.VITE_BUKET_URL}fede.jpeg`}
                alt="Team Member 1"
              />
              <h3>Federico Chafes</h3>
              <p>Junior Full Stack Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="team-card"
            >
              <img
                className="team-pic"
                src={`${import.meta.env.VITE_BUKET_URL}vale.jpg`}
                alt="Team Member 1"
              />
              <h3>Valentina Alegre</h3>
              <p>Junior Full Stack Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="team-card"
            >
              <img
                className="team-pic"
                src={`${import.meta.env.VITE_BUKET_URL}juan.jpeg`}
                alt="Team Member 1"
              />
              <h3>Juan Boni</h3>
              <p>Junior Full Stack Developer</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="team-card"
            >
              <img
                className="team-pic"
                src={`${import.meta.env.VITE_BUKET_URL}thomi.jpeg`}
                alt="Team Member 1"
              />
              <h3>Thomas Hughes</h3>
              <p>Junior Full Stack Developer</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
