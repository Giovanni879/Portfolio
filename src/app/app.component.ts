import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* animations: [
    trigger('fade',[
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0.9}),
        animate(2000, style({backgroundColor: 'white', opacity: 1}))
      ])
    ])
  ] */
})
export class AppComponent {
  title = 'portfolio';
}
