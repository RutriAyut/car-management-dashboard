import { Request} from 'express';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
	cloud_name: 'ddwk2dfyz',
	api_key: '833823654815724',
	api_secret: 'dJ1mg27i0vUIq9BcuvCLDjLWnRY',
	secure: true,
});

export default class UploadOnline {
	async url(req: Request) {
		if (!req.file) {
			return;
		}
		const filebase64: string = req.file.buffer.toString('base64');
		const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

		const result = await cloudinary.v2.uploader.upload(file);
		const image = result.url;
		return image;
	}
}
