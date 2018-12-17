import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() myFavoriteThings;
  @Output() someEvent = new EventEmitter();

  thisIsInTheChild = "lkjsalkjsadflfkj";

  constructor() { }

  ngOnInit() {
  }

  clickedTheButton(){
    this.someEvent.emit("I am screaming");
  }

}
