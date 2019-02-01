import { Controller, PostRequest, GetRequest } from 'typespring';
import { Request, Response } from 'express';
import { UploaderService } from '../services/uploader.service';
import { API_ERROR } from '../models/constants/errors';
import * as path from 'path';
// import { AuthService } from '../services/auth.service';

@Controller('/uploader')
export class UploaderController {

    constructor(
        private uploaderService: UploaderService,
    ) {
    }

    @PostRequest('/img')
    async uploadImage(req: Request): Promise<string> {
        console.log('post img!');
        return this.uploaderService.uploadImage(req.files.file);
    }

    @PostRequest('/public')
    async uploadPublic(req: Request): Promise<string> {
        console.log('post to public');

        return this.uploaderService.uploadPublic(req.files.file);
    }

    @PostRequest('/private')
    async uploadPrivate(req: Request): Promise<string> {
        return this.uploaderService.uploadPrivate(req.files.file);
    }

    @GetRequest('/public', [], true)
    async getPublic(req: Request, res: Response): Promise<void> {
        // console.log('get from public');
        const filePath = path.join(__dirname, '..', 'assets', 'public', req.query.file);
        if (!filePath) return Promise.reject(API_ERROR.BAD_REQUEST);
        res.sendFile(filePath);
    }
    // my first copy version of get with :id
    // @GetRequest('/public/:id', [], true)
    // async getPublicWithId(req: Request, res: Response): Promise<void> {
    //     console.log('req.url', req.url, req.baseUrl);
    //     console.log(req.query);
    //     // const filePath = path.join(__dirname, '..', 'assets', 'public', req.query.file);
    //     const filePath = path.join(__dirname, '..', 'assets', req.url);
    //     if (!filePath) return Promise.reject(API_ERROR.BAD_REQUEST);
    //     res.sendFile(filePath);
    // }

    // @GetRequest('/private', [AuthService.validateToken], true)
    // async getPrivate(req: Request, res: Response): Promise<void> {
    //     const filePath = path.join(__dirname, '..', 'assets', 'private', req.query.file);
    //     if (!filePath) return Promise.reject(API_ERROR.BAD_REQUEST);
    //     res.sendFile(filePath);
    // }

    // @GetRequest('/restore')
    // async restore(req: Request): Promise<void> {
    //     return this.uploaderService.restore();
    // }
}