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
      description: "It is a platform specialized in organizing events that simplifies the planning and execution of local community experiences.",
      link: "https://event-hub-delta.vercel.app/"
    },
    {
      img: "../assets/images/logo-amp.png",
      description: "It is a space in which you can explore the comprehensive solution designed by a leading company with business verticals in renewable energy, swimming pools, civil works and asset management.",
      link: "https://website-amp.vercel.app/"
    },
    {
      img: "../assets/images/logo-triviapp.png",
      description: "A place of immersive and attractive learning experience. It not only provides entertainment, it redefines exploration and knowledge sharing.",
      link: "https://nicolasizb.github.io/TriviApp/"
    }
  ]

}
