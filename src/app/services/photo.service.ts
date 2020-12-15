import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://walkies-app-api.herokuapp.com/api/photos';

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    };

    getAllPhotos(walkName): Observable<any> {
        return this.http.get(`${baseUrl}?walkName=${walkName}`);
    };
}