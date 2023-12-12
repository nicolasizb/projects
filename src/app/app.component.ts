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
    }
  ]

}
