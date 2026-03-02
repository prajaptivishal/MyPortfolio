const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'System Secure', timestamp: new Date() });
});

// Mock Project Data (if we want to fetch it from backend later)
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: "QacaShield",
      description: "Safety tracking system featuring helmet verification via selfie uploads.",
      tech: ["Node.js", "React", "Geofencing"]
    },
    {
      id: 2,
      title: "Workflow Automation",
      description: "Reduced manual operational effort by 60% using Flowable BPMN.",
      tech: ["Spring Boot", "Flowable BPMN"]
    }
  ];
  res.json(projects);
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'System Error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`[SYSTEM] Security Server initialized on port ${PORT}`);
});
