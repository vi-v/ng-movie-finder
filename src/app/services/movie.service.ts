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
}