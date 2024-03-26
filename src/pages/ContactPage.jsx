import React from 'react';
import Footer from '../components/Footer';
import "./ContactPage.css";


const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario
    alert('Formulario enviado');
  };

  return (
  <div className="contact-container">
    <p className='contact-description'> <strong>¡Hola! En Losi® estamos comprometidos a brindarte el mejor servicio posible en todo momento. Para garantizar que puedas obtener asistencia y resolver tus inquietudes de manera rápida y efectiva, te ofrecemos una amplia gama de canales de atención al cliente disponibles en un horario de 9:00 am a 7:00 pm, los 7 días de la semana. </strong>
<p> 1. Atención Telefónica: Nuestro equipo de expertos está listo para recibir tus llamadas en cualquier momento. Simplemente marca nuestro número de atención al cliente +52 1 442 463 6381 y serás atendido por uno de nuestros agentes amigables y capacitados.
</p>
<p>2. Correo Electrónico: Si tienes una consulta detallada o prefieres comunicarte por escrito, no dudes en enviarnos un correo electrónico a losishop@gmail.com, nuestro equipo revisa el correo regularmente y te responderá lo antes posible.
</p>
<p>3. Redes Sociales: Puedes contactarnos a través de nuestras cuentas oficiales en Instagram y Facebook,  donde estaremos encantados de ayudarte con cualquier consulta que tengas.
</p>
<p>4. Formulario en Línea: En nuestro sitio web, encontrarás un formulario de contacto que puedes llenar con tus datos y preguntas. Nos comprometemos a responderte en el menor tiempo posible.</p>
</p>   
   <h1 className='contact-title'>Contact Us</h1>
   <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button className='cart-button' type="submit">Submit</button>
      </form>
      </div>
      <Footer />
    </div>
    
  );
};

export default ContactPage;
