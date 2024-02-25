import multer from 'multer';

// storage for the uploaded files
// cb: callback
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

// multer instance
const upload = multer({ storage: storage });

export const uploadFile = (req, res) => {
	// use upload middleware to handle the file
	upload.array('file')(req, res, (err) => {
		if (err) {
			return res.status(500).json({ message: 'Upload failed', err});
		}

		res.status(200).json({message: 'File(s) uploaded successfully', files: req.files});


	});
}
