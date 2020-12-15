import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://walkies-app-api.herokuapp.com/api/walks';

@Injectable({
    providedIn: 'root'
})
export class WalksService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    };

    getAllWalkInformation(walkName): Observable<any> {
        return this.http.get(`${baseUrl}?walkName=${walkName}`);
    };
}