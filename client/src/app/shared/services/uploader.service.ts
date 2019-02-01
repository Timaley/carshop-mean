import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root',
})
export class UploaderService {

    constructor(
        // private config: ConfigService,
        private http: HttpClient,
    ) { }

    get apiUrl(): string {
        // return `${this.config.apiUrl}/api`;
        return `http://localhost:3000/api`;
    }

    uploadImage(file: File): Observable<string> {
        const formData = new FormData();
        formData.append('file', file);
        console.log('formData:', formData, 'file: ', file);
        return this.http.post(`${this.apiUrl}/uploader/img`, formData, { responseType: 'text' });
    }

    uploadPrivate(file: File): Observable<string> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.apiUrl}/uploader/private`, formData, { responseType: 'text' });
    }
}