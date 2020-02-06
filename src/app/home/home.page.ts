import { Component } from '@angular/core';

// Define Qualtrics
declare var QSI: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  load() {
    QSI.API.unload();
    QSI.API.load().then(() =>
      QSI.API.run());
  }
}
