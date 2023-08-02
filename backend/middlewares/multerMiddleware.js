const multer = require('multer');
const path = require('path');

const multerStorage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  // Update the destination path here
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}_${Date.now()}${ext}`;
    cb(null, filename);

  }
});

const upload = multer({ storage: multerStorage }).single('image');

module.exports = upload;