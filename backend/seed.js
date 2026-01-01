require('dotenv').config();
const mongoose = require('mongoose');

const data = [
  { title: 'Kerala Backwaters', category: 'Divine Tours', description: 'Houseboat experience.' },
  { title: 'Goa Beach Escape', category: 'Domestic Tours', description: 'Beaches and nightlife.' },
  { title: 'Bali Adventure', category: 'International Tours', description: 'Temples and surf.' }
];

async function main() {
  if (!process.env.MONGO_URI) {
    // No Mongo configured — write to local tours.json so frontend can read tours during development
    const fs = require('fs');
    const path = require('path');
    const out = path.join(__dirname, 'tours.json');
    fs.writeFileSync(out, JSON.stringify(data, null, 2), 'utf8');
    console.log('Wrote local tours.json (no MONGO_URI set)');
    process.exit(0);
  }
  await mongoose.connect(process.env.MONGO_URI);
  const Tour = mongoose.model('Tour', new mongoose.Schema({ title: String, category: String, description: String }));
  await Tour.deleteMany({});
  await Tour.insertMany(data);
  console.log('Seeded MongoDB');
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
