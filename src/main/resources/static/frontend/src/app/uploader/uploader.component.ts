import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpProgressEvent, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ImageUploadService } from 'services/image-upload.service';
import { ImageUploadResponse } from 'services/payloads/image-upload-response';
import { UploaderFileDropEntry } from './uploader-file-drop-entry';
import { UploaderFileDropStatus } from './uploader-file-drop-status';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit {

    public files: UploaderFileDropEntry[];

    constructor(
        private uploadService: ImageUploadService,
        private clipboardService: ClipboardService) { 
        this.files = [];
    }

    ngOnInit(): void { }

    public compressedImageUrlToClipboard(uploadedImage: ImageUploadResponse): void {
        const uri = this.uploadService.getCompressedImageUri(uploadedImage);
        const url = window.location.protocol + '//' + window.location.host + uri;
        console.log(url);
        this.clipboardService.copy(url);
    }

    public downloadCompressedImage(uploadedImage: ImageUploadResponse) {
        this.uploadService.downloadCompressedImage(uploadedImage).subscribe((result: HttpResponse<Blob>) => {
            const body = result.body as Blob;
            saveAs(body, uploadedImage.finalName);
        });
    }

    public dropped(files: NgxFileDropEntry[]) {
        const self = this;

        for (const rawDroppedFile of files) {
            const droppedFile = new UploaderFileDropEntry(rawDroppedFile);
            self.files.push(droppedFile);

            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    const formData = new FormData()
                    formData.append('image', file, droppedFile.relativePath);
                    
                    const req = this.uploadService.uploadImage(formData);
                    req.subscribe((event: HttpEvent<any>) => {
                        switch (event.type) {
                            case HttpEventType.UploadProgress:
                                let uploadPercent = Math.round(event.loaded / (event.total ?? 0) * 100);
                                droppedFile.status.progress = uploadPercent;
                                break;
                            case HttpEventType.Response:
                                droppedFile.uploadResponse = event.body as ImageUploadResponse;
                                droppedFile.status.setStatusCode(UploaderFileDropStatus.STATUS_SUCCESS);
                                break;
                        }
                    }, (error) => droppedFile.status.setStatusCode(UploaderFileDropStatus.STATUS_FAILED));
                });
            } 
            else {
                droppedFile.status.setStatusCode(UploaderFileDropStatus.STATUS_IS_DIRECTORY);
            }
        }
    }
}
