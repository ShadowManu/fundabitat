'use strict';

import 'statics/publications.css!';

export function Publications(): any {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    bindToController: {},

    require: '',
    link: function(): any {},
    controller: PublicationsCtrl,

    controllerAs: 'pu',
    templateUrl: 'statics/publications.html'
  };
}

export class PublicationsCtrl {

  public publications:any = [
    {
      title: 'El Diseño en los Petroglifos Venezolanos',
      author: 'Ruby De Valencia y Jeannine Sujo',
      description: 'Su contenido permitió:\n\n' +
      '•  Presentar el primer inventario documentado fotográficamente sobre la totalidad de estaciones rupestres ' +
      'registradas a nivel nacional hasta el momento, que conforman parte del patrimonio cultural arqueológico de ' +
      'Venezuela.\n\n' +
      '•  Sustentar importantes conclusiones en el campo de la investigación antropológica referentes a Venezuela: ' +
      'en base al estudio e interrelación de las características estilísticas de estas estaciones, se formularon ' +
      'los horizontes estilísticos que definen las diferentes zonas geográficas del país. Estos horizontes ' +
      'permitieron a su vez orientar varias hipótesis referentes a algunas de las rutas migratorias más antiguas de ' +
      'nuestro país.\n\n' +
      'Edición trilingue español, francés e inglés de la Fundación Pampero , 410 pags, Caracas, 1987.\n\n' +
      'Esta publicación fue acreedora de los siguientes reconocimientos nacionales e internacionales: Representa a ' +
      'Venezuela en la Exposición EL LIBRO MAS BELLO DEL MUNDO 1988; Medalla de Bronce , Exposición Internacional ' +
      'del Arte del Libro, 1989, Leipzig, Alemania; y Reconocimiento en la IX Exposición Anual del Libro Ilustrado ' +
      'y la Fotografía Documental , 1988, Instituto Autónomo Biblioteca Nacional, Caracas.',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
    {
      title: '',
      author: '',
      description: '',
      image: ''
    },
  ]

}