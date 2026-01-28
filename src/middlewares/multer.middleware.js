import multer from "multer" // multer is a Node.js middleware used for uploading files.

// Store uploaded files on disk (local storage)
// By using multer.diskStorage, you are telling the server to save the file to the hard drive. 
// The alternative is memoryStorage, which keeps the file in RAM (faster, but risky for large files as it can crash your server if you run out of memory).
const storage = multer.diskStorage({
  // Every uploaded file must go somewhere.
  // I’ll keep it in a temporary folder so I can later upload it to Cloudinary and delete it.
  destination: function (req, file, cb) { // file is with multer.
    cb(null, "./public/temp") // Passing null means there was no error.
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({
     storage: storage 
})