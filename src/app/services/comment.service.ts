import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'https://walkies-app-api.herokuapp.com/api/comments';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    };

    getAllComments(walkName): Observable<any> {
        return this.http.get(`${baseUrl}?walkName=${walkName}`);
    };

    leaveComment(data): Observable<any> {
        return this.http.post(`${baseUrl}/createComment`, data);
    };

    deleteComment(commentId): Observable<any> {
        return this.http.delete(`${baseUrl}/deleteComment?commentId=${commentId}`);
    };
}