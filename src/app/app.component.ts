import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  providers: [ MovieService ]
})
export class AppComponent  { name = 'Angular'; }
