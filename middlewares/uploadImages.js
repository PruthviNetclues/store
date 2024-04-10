const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function(req, file, cb) {
        const rename = Date.now() + '-' + file.originalname
        cb(null, rename)
    }
})

const upload = multer ({storage}).single('profile_pic');

module.exports = upload