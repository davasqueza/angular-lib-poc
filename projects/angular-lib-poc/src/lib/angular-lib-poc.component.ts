import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-angular-lib-poc',
  template: `
    <p>
      angular-lib-poc works!
    </p>
  `,
  styleUrls: ['./angular-lib-poc.css'],
  encapsulation: ViewEncapsulation.None
})
export class AngularLibPocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
