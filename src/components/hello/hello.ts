import { Component } from '@angular/core';

/**
 * Generated class for the HelloComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hello',
  templateUrl: 'hello.html'
})
export class HelloComponent {

  text: string;

  constructor() {
  }

  printHello() {
    console.log('Print hello')
  }

}
