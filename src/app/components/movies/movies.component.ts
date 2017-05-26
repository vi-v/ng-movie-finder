import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'movies',
  moduleId: module.id,
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  {

  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchStr: string;
    
  constructor( private _movieService: MovieService ) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }

  searchMovies() {
    
  }

}
