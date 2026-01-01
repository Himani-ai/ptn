
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Simple Tour model fallback — will prefer backend/tours.json if present
const sampleTours = [
  { title: 'Divine Tour - Kerala', category: 'Divine Tours', description: 'Houseboat experience.' },
  { title: 'Goa Beach Escape', category: 'Domestic Tours', description: 'Beaches and nightlife.' },
  { title: 'Bali Adventure', category: 'International Tours', description: 'Temples and surf.' }
];

let Tour;
try {
  const tourSchema = new mongoose.Schema({ title: String, category: String, description: String, image: String });
  Tour = mongoose.model('Tour', tourSchema);
} catch (e) {}

// Connect to MongoDB if URI provided
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.warn('Mongo connection error', err));
}

app.get('/api/tours', async (req, res) => {
  try {
    // If a local tours.json exists, prefer it (useful when Mongo not configured)
    const toursPath = path.join(__dirname, 'tours.json');
    if (fs.existsSync(toursPath)) {
      const raw = fs.readFileSync(toursPath, 'utf8') || '[]';
      return res.json(JSON.parse(raw));
    }
    if (Tour && mongoose.connection.readyState === 1) {
      const docs = await Tour.find().limit(100).lean();
      return res.json(docs);
    }
    return res.json(sampleTours);
  } catch (err) {
    console.error('Failed to load tours', err);
    return res.json(sampleTours);
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  console.log('Contact form submitted', { name, email, message });
  // Persist contact submissions to a local file so they are available without Mongo.
  try {
    const contactsPath = path.join(__dirname, 'contacts.json');
    let existing = [];
    if (fs.existsSync(contactsPath)) {
      const raw = fs.readFileSync(contactsPath, 'utf8') || '[]';
      existing = JSON.parse(raw);
    }
    const entry = { name: name || '', email: email || '', message: message || '', createdAt: new Date().toISOString() };
    existing.push(entry);
    fs.writeFileSync(contactsPath, JSON.stringify(existing, null, 2), 'utf8');
    res.json({ ok: true });
  } catch (err) {
    console.error('Failed to persist contact', err);
    res.status(500).json({ ok: false, error: 'failed to save' });
  }
});

// Simple endpoint to view saved contact messages (no auth for this demo)
app.get('/api/contacts', (req, res) => {
  try {
    const contactsPath = path.join(__dirname, 'contacts.json');
    if (!fs.existsSync(contactsPath)) return res.json([]);
    const raw = fs.readFileSync(contactsPath, 'utf8') || '[]';
    return res.json(JSON.parse(raw));
  } catch (err) {
    console.error('Failed to read contacts', err);
    res.status(500).json({ ok: false, error: 'failed to read' });
  }
});

// Serve frontend build if present, otherwise provide guidance at root
const staticPath = path.join(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(staticPath)) {
  app.use(express.static(staticPath));
  // For SPA routing, return index.html for non-API GETs
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(staticPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`<!doctype html><html><head><meta charset="utf-8"><title>PTN Backend</title></head><body><h3>API running</h3><p>The frontend is not built or not present on the server.</p><p>To preview locally during development run the frontend dev server (Vite) at <a href="http://localhost:5173">http://localhost:5173</a>, or build the frontend and put the files in <code>frontend/dist</code>.</p></body></html>`);
  });
}

app.listen(PORT, () => console.log(`Server listening ${PORT}`));
