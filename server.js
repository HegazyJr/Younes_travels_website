const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const PHOTES_DIR = path.join(__dirname, 'photes');

app.use(cors());
app.use('/photes', express.static(PHOTES_DIR));

// Ensure photes directory exists
if (!fs.existsSync(PHOTES_DIR)) fs.mkdirSync(PHOTES_DIR);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, PHOTES_DIR),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// Get all files
app.get('/api/files', (req, res) => {
  fs.readdir(PHOTES_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read files' });
    res.json(files);
  });
});

// Upload files
app.post('/api/upload', upload.array('files'), (req, res) => {
  res.json({ success: true, files: req.files.map(f => f.filename) });
});

// Delete file
app.delete('/api/files/:filename', (req, res) => {
  const file = path.join(PHOTES_DIR, req.params.filename);
  fs.unlink(file, err => {
    if (err) return res.status(404).json({ error: 'File not found' });
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 