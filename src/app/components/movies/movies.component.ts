import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'movies',
  moduleId: module.id,
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  {
    
  constructor( private _movieService: MovieService ) {
    this._movieService.getPopular().subscribe(res => {
      console.log(res.results);
    });

    this._movieService.getInTheaters().subscribe(res => {
      console.log(res.results);
    });
  }

}
