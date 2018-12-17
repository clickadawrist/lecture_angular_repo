import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFavoriteThings = [{
    name: "ice cream",
    price: "expensive"
  },
  {
    name: "pizza",
    price: "cheap"
  }]

  selectedThing = {};

  clickedFavoriteThing(thing){
    this.selectedThing = thing;
  }

  scream(whatToScream){
    alert(whatToScream)
  }

}
