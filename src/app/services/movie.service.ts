import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

    apikey: string;

    constructor( private _jsonp: Jsonp) {
        this.apikey = 'eb6a520ec6cdf64e40c190663e9ba8f0';
        console.log('movie service ready');
    }

    getPopular() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }

    getInTheaters() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-04-01&primary_release_date.lte=2017-06-01&api_key='+this.apikey)
            .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }
}