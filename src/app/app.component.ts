import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projects = [
    {
      img: "../assets/images/logo-name-image.png",
      description: "Es una plataforma especializada en la organización de eventos que simplifica la planificación y ejecución de experiencias locales en comunidad.",
      link: "https://event-hub-delta.vercel.app/"
    },
    {
      img: "../assets/images/logo-amp.png",
      description: "Es un espacio en el cual puedes explorar la solución integral diseñada por una empresa líder con verticales de negocio en energías renovables, piscinas, obra civil y gestión de activos.",
      link: "https://website-amp.vercel.app/"
    },
    {
      img: "../assets/images/logo-triviapp.png",
      description: "Un lugar de experiencia inmersiva y atractiva al aprendizaje. No solo proporciona entretenimiento, redefine la exploración y el intercambio de conocimientos.",
      link: "https://nicolasizb.github.io/TriviApp/"
    }
  ]

}
