import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformServer } from '@angular/common';
import { UploaderService } from '../../../shared/services/uploader.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { UploaderFileType, DocumentFileType } from '../../../shared/models/enums/uploader-item';

@Component({
    selector: 'upload-button',
    templateUrl: './upload-button.component.html',
    styleUrls: ['./upload-button.component.scss'],
})
export class UploadButtonComponent implements OnInit {
    file: File;
    fileName: string = '';
    filePath: string = '';
    timer: any = null;
    isPreview: boolean = false;
    isUploading: boolean = false;
    allowedExtensions: string[] = [];

    @Input() isMakePreview: boolean = false;
    @Input() supportedFormats: DocumentFileType[] = [];
    @Input() uploaderType: UploaderFileType = UploaderFileType.IMG;
    // @Input() icon: string;
    // @Input() color: string;
    // @Input() folder: string;
    @Output() isFileChangeded: EventEmitter<any> = new EventEmitter();

    @ViewChild('fileSelector') fileSelector;

    constructor(
        // @Inject(PLATFORM_ID) platformId: string,
        private uploderService: UploaderService,
        private notificationService: NotificationService,
    ) {
        // if (isPlatformServer(platformId) || typeof (<any>window).MouseEvent === 'function') return;

        // function CustomEvent(event, params): any {
        //     params = params || { bubbles: false, cancelable: false, detail: undefined };
        //     const evt: any = document.createEvent('CustomEvent');
        //     evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        //     return evt;
        // }
        // CustomEvent.prototype = (<any>window).Event.prototype;
        // (<any>window).CustomEvent = CustomEvent;
    }

    ngOnInit(): void {
        this.generateAllowedExtensions();
    }

    select(): void {
        let event: any;
        // if (typeof (<any>window).MouseEvent === 'function') {
        event = new MouseEvent('click', {});
        // } else {
        // event = new CustomEvent('click');
        // }
        this.fileSelector.nativeElement.dispatchEvent(event);
    }

    // clear(emit: boolean = true): void {
    //     this.file = undefined;
    //     this.fileName = '';
    //     this.filePath = '';
    //     this.isPreview = false;
    //     this.fileSelector.nativeElement.value = '';
    //     if (emit) {
    //         // this.isFileChangeded.emit('');
    //     }
    // }

    uploadImage(): Promise<string | void> {
        try {
            console.log('uploadPublic...');
            if (this.file === undefined) return Promise.resolve(undefined);
            return this.uploderService.uploadImage(this.file).toPromise();
        } catch (error) {
            this.notificationService.snackbar('Uploading error from uploadPublic');
            return Promise.resolve(undefined);
        }
    }

    uploadPrivate(): Promise<string | void> {
        try {
            console.log('uploadPrivate...');
            if (!this.file) return Promise.resolve();
            return this.uploderService.uploadPrivate(this.file).toPromise();
        } catch (error) {
            this.notificationService.snackbar('Uploading error');
            return Promise.resolve(undefined);
        }
    }

    async loadFile(event): Promise<any> {
        console.log('loadFile: ', event.target.files);
        const file = event.target.files[0];

        if (!file) {
            this.file = undefined;
            return;
        }
        if (file.type && this.supportedFormats.length && !this.supportedFormats.includes(file.type)) {
            this.notificationService.snackbar('Unsupported file format');
            this.file = undefined;
            return;
        }
        if (!file.type) {
            if (!this.validateFormat(file.name)) {
                this.notificationService.snackbar('Unsupported file format');
                this.file = undefined;
                return;
            }
        }
        this.file = file;
        // if (this.folder) {
        if (this.file) {
            try {
                // const path = await this.uploadPrivate();
                const path = await this.uploadImage();
                this.isUploading = false;
                this.isFileChangeded.emit(path);
            } catch (e) {
                this.notificationService.snackbar('File upload error');
            }
            return;
        }

    }

    private validateFormat(name: string): boolean {
        if (!this.supportedFormats.length) return true;
        const extension = name.split('.').pop().toLowerCase();
        return this.allowedExtensions.some(s => s === extension);
    }

    private generateAllowedExtensions(): void {
        for (const format of this.supportedFormats) {
            switch (format) {
                case DocumentFileType.JPEG: this.allowedExtensions.push('jpeg'); break;
                case DocumentFileType.JPG: this.allowedExtensions.push('jpg'); break;
                case DocumentFileType.PNG: this.allowedExtensions.push('png'); break;
                // default: '';
            }
        }
    }
}