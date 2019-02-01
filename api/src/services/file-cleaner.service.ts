import { ConfigService } from './convict.service';
import * as cron from 'node-cron';
import * as fs from 'file-system';
import * as path from 'path';
import { Service, MongoService, LoggerFactory } from 'typespring';
import { Collections } from '../models/enums/collections';
// import { IFeedback } from '../models/interfaces/feedback';
// import { ITechnology } from '../models/interfaces/technology';
// import { IEmployeeInfo } from '../models/interfaces/employee-info';
// import { IMediaItem } from '../models/interfaces/media-item';
// import { ISEOSettings } from '../models/interfaces/seo-settings';
// import { IProject } from '../models/interfaces/project';
import { Logger } from 'winston';
import { ICar } from '../models/interfaces/car';

@Service()
export class FileCleanerService {
    private _logger: Logger;
    private everyDay = '0 0 * * *';
    // private everyFiveMinutes = '*/5 * * * *';
    // private everyMinute = '30 * * * * *';
    private PUBLIC_FOLDER = path.join(__dirname, '..', 'assets', 'public');
    private PRIVATE_FOLDER = path.join(__dirname, '..', 'assets', 'private');

    constructor(
        private config: ConfigService,
        loggerFactory: LoggerFactory,
        private mongo: MongoService,
    ) {
        console.log('file cleaner constructor...');
        this._logger = loggerFactory.getLogger('FILE-CLEANER');
        this.runFileCleaner();
    }

    runFileCleaner(): void {
        cron.schedule(this.everyDay, async () => {
            this._logger.info(`Running file cleaner task at ${new Date()}`);
            // this.checkPrivateFolder();
            this.CheckPublicFolder();
        });
        // cron.schedule('0 1 * * *', () => {
        //     console.log('Runing a job at 01:00 at America/Sao_Paulo timezone');
        //   }, {
        //     scheduled: true,
        //     timezone: "America/Sao_Paulo"
        //   });
    }

    // async checkPrivateFolder(): Promise<any> {
    //     this._logger.info(`Checking private files...`);
    //     const dirPath = `${this.PRIVATE_FOLDER}`;
    //     let files: string[];
    //     try {
    //         files = fs.readdirSync(dirPath);
    //     } catch (err) {
    //         this._logger.error(`Loading private files error: ${err}.`);
    //         return;
    //     }
    //     if (!files.length) {
    //         this._logger.info(`No private files found.`);
    //         return;
    //     }
    //     const collectionsFiles = await this.getPrivateFiles();
    //     // check files
    //     files.forEach(file => {
    //         if (file === '.gitkeep') return;
    //         if (!collectionsFiles.includes(file)) {
    //             try {
    //                 fs.unlinkSync(`${dirPath}/${file}`);
    //             } catch (err) {
    //                 this._logger.error(`Deleting unused private file error: ${err}.`);
    //             }
    //         }
    //     });
    //     this._logger.info(`Deleting unused private file success.`);
    // }

    async CheckPublicFolder(): Promise<any> {
        this._logger.info(`Checking public files...`);
        const dirPath = `${this.PUBLIC_FOLDER}`;
        let files: string[];
        try {
            files = fs.readdirSync(dirPath);
        } catch (err) {
            this._logger.error(`Loading public files error: ${err}.`);
            return;
        }
        if (!files.length) {
            this._logger.info(`No public files found.`);
            return;
        }
        const collectionsFiles = await this.getPublicFiles();
        // check files
        files.forEach(file => {
            if (file === '.gitkeep') return;
            const f = (
                file.indexOf('lg-') === 0 ||
                file.indexOf('md-') === 0 ||
                file.indexOf('sm-') === 0) ? `http://localhost:3000/api/uploader/public/${file.substring(3)}` :
                `http://localhost:3000/api/uploader/public/${file}`;
            if (!collectionsFiles.includes(f)) {
                console.log('Unused file found: ', file);
                try {
                    fs.unlinkSync(`${dirPath}/${file}`);
                } catch (err) {
                    this._logger.error(`Deleting unused public file error: ${err}.`);
                }
            }
        });
        this._logger.info(`Deleting unused public file success.`);
    }

    // async getPrivateFiles(): Promise<string[]> {
    //     const result = [];
    //     const feedbacks: IFeedback[] =
    //         await this.mongo.collection(Collections.Feedbacks).find({}).toArray();
    //     const feedbackFiles = feedbacks.map(f => f.file);
    //     return result.concat(feedbackFiles);
    // }
    async getPrivateFiles(): Promise<any> {
        // const result = [];
        // const feedbacks: IFeedback[] =
        //     await this.mongo.collection(Collections.Feedbacks).find({}).toArray();
        // const feedbackFiles = feedbacks.map(f => f.file);
        // return result.concat(feedbackFiles);
    }

    // async getPublicFiles(): Promise<string[]> {
    async getPublicFiles(): Promise<string[]> {
        // let res;

        const result = [];
        const images: any =
            await this.mongo.collection(Collections.Cars).find({}).toArray();
        const imagesFiles = images.map(i => i.img);
        console.log(imagesFiles);
        return imagesFiles;
        // res = result.concat(imagesFiles);

        // const url = 'http://localhost:3000/api/uploader/public/';
        // function searchStringInArray(src, srcArr) {
        //     // for (let j = 0; j < srcArr.length; j++) {
        //     //     // let count = srcArr[j].split(src);
        //     //     // count += count;
        //     //     console.log(srcArr[1].split(src));

        //     // }
        //     // return -1;
        // }
        // const i = searchStringInArray(url, res);
        // console.log(i);
        // return i;

        // const technologies: ITechnology[] =
        //     await this.mongo.collection(Collections.Technologies).find({}).toArray();
        // const technologiesFiles = technologies.map(f => f.icon);

        // const team: IEmployeeInfo[] =
        //     await this.mongo.collection(Collections.Team).find({}).toArray();
        // const teamFiles = team.map(f => f.photo);

        // const media: IMediaItem[] =
        //     await this.mongo.collection(Collections.Media).find({}).toArray();
        // const mediaFiles = media.map(f => f.value);

        // const seo: ISEOSettings[] =
        //     await this.mongo.collection(Collections.SEO).find({}).toArray();
        // seo.map(f => {
        //     f.values.forEach(v => {
        //         if (!v.og || !v.og.image) return;
        //         result.push(v.og.image);
        //     });
        // });

        // const projects: IProject[] =
        //     await this.mongo.collection(Collections.Projects).find({}).toArray();
        // projects.map(f => {
        //     result = result.concat(f.logo, f.previewImage, ...f.images);

        //     if (f.values && f.values.length !== 0) {
        //         f.values.forEach(v => {
        //             if (v.testimonial && v.testimonial.photo) result.push(v.testimonial.photo);
        //             if (v.scope && v.scope.images) {
        //                 result = result.concat(...v.scope.images);
        //             }
        //         });
        //     }
        // });

        // return result.concat(technologiesFiles, teamFiles, mediaFiles);
    }
}