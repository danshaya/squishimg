export class UploaderFileDropStatus {
    static readonly STATUS_PENDING = 0;
    static readonly STATUS_SUCCESS = 1;
    static readonly STATUS_FAILED = 2;
    static readonly STATUS_IS_DIRECTORY = 3;
    static readonly STATUS_RESPONSE_RECEIVED = 4;

    private statusCode: number;
    private message: String;
    private level: String;
    
    progress: number = 0;

    constructor() {
        this.statusCode = UploaderFileDropStatus.STATUS_PENDING;
        this.message = '';
        this.level = '';
        this.setStatusCode(UploaderFileDropStatus.STATUS_PENDING);
    }

    public getLevel(): String {
        return this.level;
    }

    public getMessage(): String {
        return this.message;
    }

    public setStatusCode(statusCode: number) {
        this.statusCode = statusCode;
        switch(statusCode) {
            case UploaderFileDropStatus.STATUS_PENDING:
                this.message = 'uploading';
                this.level = 'info';
                break;
            case UploaderFileDropStatus.STATUS_SUCCESS:
                this.message = 'upload complete';
                this.level = 'secondary';
                break;
            case UploaderFileDropStatus.STATUS_IS_DIRECTORY:
                this.message = 'you cannot upload a directory';
                this.level = 'danger';
                break;
            case UploaderFileDropStatus.STATUS_FAILED:
                this.message = 'upload/compression failed';
                this.level = 'danger';
                break;
            case UploaderFileDropStatus.STATUS_RESPONSE_RECEIVED:
                this.message = 'compression complete';
                this.level = 'success';
                break;
            default:
                throw new Error('unknown status code');
        }
    }
}
