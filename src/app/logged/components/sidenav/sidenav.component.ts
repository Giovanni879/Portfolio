import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia("(max-width: 720px)");
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.pantallaSmall();
  }
  pantallaSmall(){
    // devuelve true si la pantalla es menor a 720 px o false si los pasa
    console.log(this.mediaMatcher.matches);
    
    return this.mediaMatcher.matches;
  }
}
