// Datos del equipo para Nuestro Equipo (editar este array para agregar/quitar miembros)
window.getTeamData = function() {
    return [
      {
        id: 1,
        name: window.getTranslation ? window.getTranslation('team.member.1.name') : 'Efrain Rodriguez',
        position: window.getTranslation ? window.getTranslation('team.member.1.position') : 'CEO',
        image: 'img/team/pr1.png',
        description: window.getTranslation ? window.getTranslation('team.member.1.description') : 'Experta en follajes tropicales con más de 15 años de experiencia.',
        social: {
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      },
      {
        id: 2,
        name: window.getTranslation ? window.getTranslation('team.member.2.name') : 'Cristián Rodríguez',
        position: window.getTranslation ? window.getTranslation('team.member.2.position') : 'Jefe de Producción',
        image: 'img/team/pr2.png',
        description: window.getTranslation ? window.getTranslation('team.member.2.description') : 'Líder en técnicas de cultivo sostenible y optimización de procesos.',
        social: {
          twitter: 'https://wa.me/+571234567890',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      },
      {
        id: 3,
        name: window.getTranslation ? window.getTranslation('team.member.3.name') : 'Jazmín Guevara',
        position: window.getTranslation ? window.getTranslation('team.member.3.position') : 'Coordinadora de Ventas',
        image: 'img/team/Jazmin.jpg',
        description: window.getTranslation ? window.getTranslation('team.member.3.description') : 'Especialista en logística internacional y control de calidad.',
        social: {
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      },
      {
        id: 4,
        name: window.getTranslation ? window.getTranslation('team.member.4.name') : 'Carlos Rodríguez',
        position: window.getTranslation ? window.getTranslation('team.member.4.position') : 'Supervisor de Calidad y Producción',
        image: 'img/team/Carlos.jpg',
        description: window.getTranslation ? window.getTranslation('team.member.4.description') : 'Experto en desarrollo de nuevas variedades y mejoramiento genético.',
        social: {
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      },
      {
        id: 5,
        name: window.getTranslation ? window.getTranslation('team.member.5.name') : 'Dina Marcela Ortiz',
        position: window.getTranslation ? window.getTranslation('team.member.5.position') : 'Fundadora',
        image: 'img/team/perf.jpg',
        description: window.getTranslation ? window.getTranslation('team.member.5.description') : 'Experto en desarrollo de nuevas variedades y mejoramiento genético.',
        social: {
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      },
      {
        id: 6,
        name: window.getTranslation ? window.getTranslation('team.member.6.name') : 'Humberto Rodríguez',
        position: window.getTranslation ? window.getTranslation('team.member.6.position') : 'Fundador',
        image: 'img/team/Humberto.jpg',
        description: window.getTranslation ? window.getTranslation('team.member.6.description') : 'Experto en desarrollo de nuevas variedades y mejoramiento genético.',
        social: {
          twitter: '#',
          facebook: '#',
          linkedin: '#',
          instagram: '#'
        }
      }
    ];
};

// For backward compatibility
window.TEAM_DATA = window.getTeamData();
