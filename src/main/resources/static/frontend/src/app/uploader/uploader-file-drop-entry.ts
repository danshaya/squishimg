import { NgxFileDropEntry } from 'ngx-file-drop';
import { ImageUploadResponse } from 'services/payloads/image-upload-response';
import { UploaderFileDropStatus } from './uploader-file-drop-status';

export class UploaderFileDropEntry extends NgxFileDropEntry {

    status: UploaderFileDropStatus;
    uploadResponse?: ImageUploadResponse;

    constructor(fileDropEntry: NgxFileDropEntry) {
        super(fileDropEntry.relativePath, fileDropEntry.fileEntry);
        this.status = new UploaderFileDropStatus();
    }
}
