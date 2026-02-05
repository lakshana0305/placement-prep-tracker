// Import required modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create Express app
const app = express();
const PORT = 5001;

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies

// Path to data file
const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to read data from JSON file
function readData() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return null;
    }
}

// Helper function to write data to JSON file
function writeData(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing data:', error);
        return false;
    }
}

// Helper function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// Helper function to calculate streak
function updateStreak(data) {
    const today = getTodayDate();
    const lastDate = data.streak.lastDate;
    
    // If user visits today for the first time
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastDate === yesterdayStr) {
            // Consecutive day - increase streak
            data.streak.count += 1;
        } else if (lastDate !== today) {
            // Gap in days - reset streak
            data.streak.count = 1;
        }
        
        data.streak.lastDate = today;
        data.user.lastActiveDate = today;
    }
    
    return data;
}

// API Routes

// GET /data - Fetch all data (topics, goals, user, streak)
app.get('/data', (req, res) => {
    console.log('GET /data - Fetching all data');
    
    let data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    // Update streak when user visits
    data = updateStreak(data);
    writeData(data);
    
    res.json(data);
});

// POST /update-topic - Toggle topic completion status
app.post('/update-topic', (req, res) => {
    const { topicId } = req.body;
    console.log(`POST /update-topic - Toggling topic ${topicId}`);
    
    if (!topicId) {
        return res.status(400).json({ error: 'Topic ID is required' });
    }
    
    const data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    // Find and toggle the topic
    const topic = data.topics.find(t => t.id === parseInt(topicId));
    if (!topic) {
        return res.status(404).json({ error: 'Topic not found' });
    }
    
    topic.completed = !topic.completed;
    
    // Save updated data
    if (writeData(data)) {
        res.json({ success: true, topic });
    } else {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// GET /goals - Fetch all daily goals
app.get('/goals', (req, res) => {
    console.log('GET /goals - Fetching goals');
    
    const data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    res.json(data.goals);
});

// POST /add-goal - Add a new daily goal
app.post('/add-goal', (req, res) => {
    const { text } = req.body;
    console.log(`POST /add-goal - Adding goal: ${text}`);
    
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Goal text is required' });
    }
    
    const data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    // Create new goal
    const newGoal = {
        id: Date.now(), // Simple ID generation using timestamp
        text: text.trim(),
        date: getTodayDate(),
        completed: false
    };
    
    data.goals.push(newGoal);
    
    // Save updated data
    if (writeData(data)) {
        res.json({ success: true, goal: newGoal });
    } else {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// POST /toggle-goal - Toggle goal completion
app.post('/toggle-goal', (req, res) => {
    const { goalId } = req.body;
    console.log(`POST /toggle-goal - Toggling goal ${goalId}`);
    
    if (!goalId) {
        return res.status(400).json({ error: 'Goal ID is required' });
    }
    
    const data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    // Find and toggle the goal
    const goal = data.goals.find(g => g.id === parseInt(goalId));
    if (!goal) {
        return res.status(404).json({ error: 'Goal not found' });
    }
    
    goal.completed = !goal.completed;
    
    // Save updated data
    if (writeData(data)) {
        res.json({ success: true, goal });
    } else {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// POST /update-user - Update user name
app.post('/update-user', (req, res) => {
    const { name } = req.body;
    console.log(`POST /update-user - Updating user name: ${name}`);
    
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    const data = readData();
    if (!data) {
        return res.status(500).json({ error: 'Failed to read data' });
    }
    
    data.user.name = name.trim();
    
    // Save updated data
    if (writeData(data)) {
        res.json({ success: true, user: data.user });
    } else {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Placement Prep Tracker Backend running on http://localhost:${PORT}`);
    console.log('📊 Available endpoints:');
    console.log('  GET  /data - Fetch all data');
    console.log('  POST /update-topic - Toggle topic completion');
    console.log('  GET  /goals - Fetch goals');
    console.log('  POST /add-goal - Add new goal');
    console.log('  POST /toggle-goal - Toggle goal completion');
    console.log('  POST /update-user - Update user name');
});