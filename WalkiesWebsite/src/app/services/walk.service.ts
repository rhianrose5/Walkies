import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/walks';

@Injectable({
    providedIn: 'root'
})
export class WalksService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    }

    get(id): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
    }

    getAllWalkInformation(walkName): Observable<any> {
        console.log("reached the service")
        return this.http.get(`${baseUrl}?walkName=${walkName}`);
    }
}