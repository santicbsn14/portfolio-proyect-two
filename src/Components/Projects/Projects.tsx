import React from 'react';
import './Projects.css'; // Asegúrate de tener un archivo CSS para estilos
import kinefit from '../Imagenes/Kinefit-Project.png'
import ClubBelgrano from '../Imagenes/ClubBelgrano-Project.png'
const projects = [
  {
    title: 'Web Centro "Kinefit" y sistema gestor de turnos',
    description: 'Web institucional para un centro de kinesiología, incluyendo información sobre servicios, contacto y ubicación. Además, el proyecto integra un sistema de gestión de turnos en línea que permite a los pacientes reservar, cancelar y gestionar sus citas',
    image: kinefit,
    liveLink: 'https://web-kinefit-front.vercel.app/',
    codeLink: 'https://github.com/santicbsn14/web-kinefit-front'
  },
  {
    title: 'Sitio Web Club Belgrano San Nicolas',
    description: 'Desarrollo de la página web institucional para el Club Belgrano San Nicolás, diseñada para proporcionar información relevante sobre el club, sus actividades y novedades. La plataforma permite a los administradores del club subir noticias, eventos y anuncios importantes para mantener a los socios y la comunidad informados.',
    image: ClubBelgrano,
    liveLink: 'https://clubbelgrano.com.ar/',
    codeLink: 'https://github.com/santicbsn14/WebOficialClubBelgrano1'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={`${project.title} screenshot`} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Proyecto</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">Código</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
