import multer from 'multer';
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
// storage for the uploaded files
// cb: callback

// Get the directory path of the current module
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(rootDir, '..', 'uploads'); // uploads should be in the root folder not the controllers folder
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDir);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

// multer instance
const upload = multer({ storage: storage });

export const uploadFile = (req, res) => {
	// use upload middleware to handle the file
	upload.single('file')(req, res, (err) => {
		if (err) {
			console.log(err)
			return res.status(500).json({ message: 'Upload failed', err});
		}
		// const baseUrl = req.protocol + '://' + req.get('host') + '/';  //creates http:// url for the image
        const file = 'uploads/' + req.file.filename;
		res.status(200).json({message: 'File(s) uploaded successfully', files: file});

	});
}
