import { HttpEvent, HttpClient, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUploadResponse } from './payloads/image-upload-response';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {

    constructor(private httpClient: HttpClient) { }

    public uploadImage(formData: FormData): Observable<HttpEvent<any>> {
        const request = new HttpRequest('POST', '/image/upload', formData, {
            reportProgress: true
        });

        return this.httpClient.request(request);
    }

    public getCompressedImageUri(uploadedImage: ImageUploadResponse): string {
        return '/image/' + uploadedImage.finalName;
    }

    public downloadCompressedImage(uploadedImage: ImageUploadResponse) {
        let url = this.getCompressedImageUri(uploadedImage);
        return this.httpClient.get(url, {responseType: 'blob', observe: 'response'});
    }
}
