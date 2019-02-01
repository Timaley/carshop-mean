import { MongoService, Service } from 'typespring';
import * as path from 'path';
import * as fs from 'file-system';
import * as uuid from 'uuid';
import { API_ERROR } from '../models/constants/errors';
import * as sharp from 'sharp';
import { Collections } from '../models/enums/collections';

@Service()
export class UploaderService {

    constructor(private mongo: MongoService) {
    }

    async restore(): Promise<void> {
        const PUBLIC_FOLDER = path.join(__dirname, '..', 'assets', 'public');
        const dirPath = `${PUBLIC_FOLDER}`;
        let files: string[];
        try {
            files = fs.readdirSync(dirPath);
        } catch (err) {
            return Promise.reject(err);
        }
        if (!files.length) {
            console.log(`No public files found.`);
            return;
        }
        for (const file of files) {
            const media = await this.mongo.collection(Collections.Media).findOne({ value: file });
            if (media) {
                try {
                    const buffer = fs.readFileSync(`${PUBLIC_FOLDER}/${file}`);
                    const img = sharp(buffer);
                    const metadata = await img.metadata();
                    let fName;
                    switch (metadata.format) {
                        case 'jpeg':
                            fName = `${uuid.v1()}.jpeg`;
                            await Promise.all(
                                [
                                    img.jpeg().toFile(`${PUBLIC_FOLDER}/${fName}`),
                                    img.jpeg().resize(1920, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/lg-${fName}`),
                                    img.jpeg().resize(1280, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/md-${fName}`),
                                    img.jpeg().resize(768, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/sm-${fName}`),
                                ],
                            );
                            break;
                        case 'png':
                            fName = `${uuid.v1()}.png`;
                            await Promise.all(
                                [
                                    img.png().toFile(`${PUBLIC_FOLDER}/${fName}`),
                                    img.png().resize(1920, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/lg-${fName}`),
                                    img.png().resize(1280, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/md-${fName}`),
                                    img.png().resize(768, null,
                                        {
                                            withoutEnlargement: true,
                                            kernel: sharp.kernel.lanczos2,
                                        }).toFile(`${PUBLIC_FOLDER}/sm-${fName}`),
                                ],
                            );
                            break;
                        default:
                            continue;
                    }
                    await this.mongo.collection(Collections.Media).updateOne(
                        { _id: media._id },
                        { $set: { value: fName } },
                    );
                    fs.unlinkSync(`${PUBLIC_FOLDER}/${file}`);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }

    async uploadImage(file: any): Promise<string> {
        if (!file) return Promise.reject(API_ERROR.BAD_REQUEST);
        const filePath = path.join(__dirname, '..', 'assets', 'public');

        if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);

        try {
            const img = sharp(file.data);
            const fPath = `${filePath}`;
            let fName;
            const metadata = await img.metadata();

            switch (metadata.format) {
                case 'jpeg':
                    fName = `${uuid.v1()}.jpeg`;
                    await Promise.all(
                        [
                            img.jpeg().toFile(`${fPath}/${fName}`),
                            img.jpeg().resize(1920, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos3,
                                }).toFile(`${fPath}/lg-${fName}`),
                            img.jpeg().resize(1280, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos3,
                                }).toFile(`${fPath}/md-${fName}`),
                            img.jpeg().resize(768, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos3,
                                }).toFile(`${fPath}/sm-${fName}`),
                        ],
                    );
                    break;
                case 'png':
                    fName = `${uuid.v1()}.png`;
                    await Promise.all(
                        [
                            img.png().toFile(`${fPath}/${fName}`),
                            img.png().resize(1920, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos2,
                                }).toFile(`${fPath}/lg-${fName}`),
                            img.png().resize(1280, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos2,
                                }).toFile(`${fPath}/md-${fName}`),
                            img.png().resize(768, null,
                                {
                                    withoutEnlargement: true,
                                    kernel: sharp.kernel.lanczos2,
                                }).toFile(`${fPath}/sm-${fName}`),
                        ],
                    );
                    break;
                default:
                    return Promise.reject(API_ERROR.BAD_REQUEST);
            }
            return Promise.resolve(fName);
        } catch (e) {
            console.error(e);
            return Promise.reject(e);
        }
    }

    async uploadPublic(file: any): Promise<string> {
        if (!file) return Promise.reject(API_ERROR.BAD_REQUEST);
        const filePath = path.join(__dirname, '..', 'assets', 'public');

        if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);

        const id = uuid.v1();
        try {
            await file.mv(`${filePath}/${id}-${file.name}`);
        } catch (e) {
            return Promise.reject(e);
        }
        return Promise.resolve(`${id}-${file.name}`);
    }

    async uploadPrivate(file: any): Promise<string> {
        if (!file) return Promise.reject(API_ERROR.BAD_REQUEST);
        const filePath = path.join(__dirname, '..', 'assets', 'private');

        if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);

        const id = uuid.v1();
        await file.mv(`${filePath}/${id}-${file.name}`);
        return Promise.resolve(`${id}-${file.name}`);
    }
}