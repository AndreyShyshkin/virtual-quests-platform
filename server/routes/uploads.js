const express = require('express')
const router = express.Router()
const cloudinary = require('../cloudinaryConfig')

// For handling file uploads, you can use a middleware like multer.
// In this example, we assume the file is received as a data URL or from multer.
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('file'), async (req, res) => {
	try {
		// Option 1: Use local file path (if using multer)
		const filePath = req.file.path

		// Option 2: If using data URL or a stream, adjust accordingly.
		const uploadResult = await cloudinary.uploader.upload(filePath, {
			folder: 'virtual-quests', // Optional: set a folder
			use_filename: true,
			unique_filename: false,
		})

		// Return the secure_url to the client
		res.status(200).json({ url: uploadResult.secure_url })
		Copy
	} catch (error) {
		console.error('Upload error:', error)
		res.status(500).json({ error: 'Upload failed' })
	}
})

module.exports = router
