import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

const baseUrl = 'https://walkies-app-api.herokuapp.com/api/comments';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient, private socket: Socket) { }

    getAll(): Observable<any> {
        return this.http.get(baseUrl);
    };

    getAllComments(walkName): Observable<any> {
        return Observable.create((observer) => {
            this.socket.on('newComment', (comment) => {
                observer.next(comment);
            });
        });
        // return this.http.get(`${baseUrl}?walkName=${walkName}`);
    };

    /*leaveComment(data): Observable<any> {
        this.socket.emit('newComment', data.comment);
        return this.http.post(`${baseUrl}/createComment`, data);
    };*/

    public leaveComment(comment) {
        this.socket.emit('newComment', comment);
    }
}