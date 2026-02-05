// ===== CONFIGURATION & CONSTANTS =====
const API_BASE_URL = 'http://localhost:5001';

// DSA Topics with Problems Configuration
const DSA_PROBLEMS_DATA = {
    1: {
        name: 'Arrays',
        description: 'Array manipulation, searching, and sorting algorithms',
        problems: [
            { id: 1, title: 'Two Sum', description: 'Find two numbers that add up to target', difficulty: 'easy', solved: false },
            { id: 2, title: 'Best Time to Buy and Sell Stock', description: 'Maximum profit from stock prices', difficulty: 'easy', solved: false },
            { id: 3, title: 'Contains Duplicate', description: 'Check if array contains duplicates', difficulty: 'easy', solved: false },
            { id: 4, title: 'Product of Array Except Self', description: 'Product of all elements except current', difficulty: 'medium', solved: false },
            { id: 5, title: 'Maximum Subarray', description: 'Find contiguous subarray with largest sum', difficulty: 'medium', solved: false },
            { id: 6, title: 'Maximum Product Subarray', description: 'Find contiguous subarray with largest product', difficulty: 'medium', solved: false },
            { id: 7, title: 'Find Minimum in Rotated Sorted Array', description: 'Find minimum in rotated array', difficulty: 'medium', solved: false },
            { id: 8, title: 'Search in Rotated Sorted Array', description: 'Search target in rotated array', difficulty: 'medium', solved: false },
            { id: 9, title: '3Sum', description: 'Find three numbers that sum to zero', difficulty: 'medium', solved: false },
            { id: 10, title: 'Container With Most Water', description: 'Find container that holds most water', difficulty: 'medium', solved: false },
            { id: 11, title: 'Trapping Rain Water', description: 'Calculate trapped rainwater', difficulty: 'hard', solved: false },
            { id: 12, title: 'Median of Two Sorted Arrays', description: 'Find median of two sorted arrays', difficulty: 'hard', solved: false },
            { id: 13, title: 'Largest Rectangle in Histogram', description: 'Find largest rectangle area', difficulty: 'hard', solved: false },
            { id: 14, title: 'Sliding Window Maximum', description: 'Maximum in each sliding window', difficulty: 'hard', solved: false },
            { id: 15, title: 'First Missing Positive', description: 'Find smallest missing positive integer', difficulty: 'hard', solved: false }
        ]
    },
    2: {
        name: 'Strings',
        description: 'String operations, pattern matching, and manipulation',
        problems: [
            { id: 16, title: 'Valid Anagram', description: 'Check if two strings are anagrams', difficulty: 'easy', solved: false },
            { id: 17, title: 'Valid Palindrome', description: 'Check if string is a palindrome', difficulty: 'easy', solved: false },
            { id: 18, title: 'Longest Substring Without Repeating Characters', description: 'Find longest substring without repeating chars', difficulty: 'medium', solved: false },
            { id: 19, title: 'Longest Repeating Character Replacement', description: 'Longest substring with same chars after k replacements', difficulty: 'medium', solved: false },
            { id: 20, title: 'Group Anagrams', description: 'Group strings that are anagrams', difficulty: 'medium', solved: false },
            { id: 21, title: 'Longest Palindromic Substring', description: 'Find longest palindromic substring', difficulty: 'medium', solved: false },
            { id: 22, title: 'Palindromic Substrings', description: 'Count palindromic substrings', difficulty: 'medium', solved: false },
            { id: 23, title: 'Valid Parentheses', description: 'Check if parentheses are valid', difficulty: 'easy', solved: false },
            { id: 24, title: 'Minimum Window Substring', description: 'Find minimum window containing all characters', difficulty: 'hard', solved: false },
            { id: 25, title: 'Edit Distance', description: 'Minimum operations to convert one string to another', difficulty: 'hard', solved: false },
            { id: 26, title: 'Regular Expression Matching', description: 'Implement regex matching', difficulty: 'hard', solved: false },
            { id: 27, title: 'Wildcard Matching', description: 'Implement wildcard pattern matching', difficulty: 'hard', solved: false }
        ]
    },
    3: {
        name: 'Linked Lists',
        description: 'Singly, doubly, and circular linked list operations',
        problems: [
            { id: 28, title: 'Reverse Linked List', description: 'Reverse a singly linked list', difficulty: 'easy', solved: false },
            { id: 29, title: 'Linked List Cycle', description: 'Detect cycle in linked list', difficulty: 'easy', solved: false },
            { id: 30, title: 'Merge Two Sorted Lists', description: 'Merge two sorted linked lists', difficulty: 'easy', solved: false },
            { id: 31, title: 'Remove Nth Node From End', description: 'Remove nth node from end of list', difficulty: 'medium', solved: false },
            { id: 32, title: 'Reorder List', description: 'Reorder list in specific pattern', difficulty: 'medium', solved: false },
            { id: 33, title: 'Add Two Numbers', description: 'Add two numbers represented as linked lists', difficulty: 'medium', solved: false },
            { id: 34, title: 'Copy List with Random Pointer', description: 'Deep copy list with random pointers', difficulty: 'medium', solved: false },
            { id: 35, title: 'Merge k Sorted Lists', description: 'Merge k sorted linked lists', difficulty: 'hard', solved: false },
            { id: 36, title: 'Reverse Nodes in k-Group', description: 'Reverse every k nodes in linked list', difficulty: 'hard', solved: false },
            { id: 37, title: 'LRU Cache', description: 'Implement LRU cache using linked list', difficulty: 'hard', solved: false }
        ]
    },
    4: {
        name: 'Stacks',
        description: 'LIFO operations, expression evaluation, and stack applications',
        problems: [
            { id: 38, title: 'Valid Parentheses', description: 'Check if parentheses are balanced', difficulty: 'easy', solved: false },
            { id: 39, title: 'Min Stack', description: 'Stack with constant time min operation', difficulty: 'medium', solved: false },
            { id: 40, title: 'Evaluate Reverse Polish Notation', description: 'Evaluate postfix expression', difficulty: 'medium', solved: false },
            { id: 41, title: 'Generate Parentheses', description: 'Generate all valid parentheses combinations', difficulty: 'medium', solved: false },
            { id: 42, title: 'Daily Temperatures', description: 'Find next warmer temperature', difficulty: 'medium', solved: false },
            { id: 43, title: 'Car Fleet', description: 'Calculate number of car fleets', difficulty: 'medium', solved: false },
            { id: 44, title: 'Largest Rectangle in Histogram', description: 'Find largest rectangle area', difficulty: 'hard', solved: false },
            { id: 45, title: 'Basic Calculator', description: 'Implement basic calculator', difficulty: 'hard', solved: false },
            { id: 46, title: 'Basic Calculator II', description: 'Calculator with multiplication and division', difficulty: 'hard', solved: false },
            { id: 47, title: 'Remove Invalid Parentheses', description: 'Remove minimum parentheses to make valid', difficulty: 'hard', solved: false }
        ]
    },
    5: {
        name: 'Queues',
        description: 'FIFO operations, circular queues, and priority queues',
        problems: [
            { id: 48, title: 'Implement Queue using Stacks', description: 'Queue implementation using two stacks', difficulty: 'easy', solved: false },
            { id: 49, title: 'Design Circular Queue', description: 'Implement circular queue', difficulty: 'medium', solved: false },
            { id: 50, title: 'Sliding Window Maximum', description: 'Maximum in each sliding window', difficulty: 'hard', solved: false },
            { id: 51, title: 'Task Scheduler', description: 'Schedule tasks with cooling time', difficulty: 'medium', solved: false },
            { id: 52, title: 'Design Hit Counter', description: 'Count hits in past 5 minutes', difficulty: 'medium', solved: false },
            { id: 53, title: 'Shortest Subarray with Sum at Least K', description: 'Find shortest subarray with sum >= K', difficulty: 'hard', solved: false },
            { id: 54, title: 'Constrained Subsequence Sum', description: 'Maximum sum with constraint', difficulty: 'hard', solved: false }
        ]
    },
    6: {
        name: 'Trees',
        description: 'Binary trees, BST, tree traversals, and tree algorithms',
        problems: [
            { id: 55, title: 'Maximum Depth of Binary Tree', description: 'Find maximum depth of tree', difficulty: 'easy', solved: false },
            { id: 56, title: 'Same Tree', description: 'Check if two trees are identical', difficulty: 'easy', solved: false },
            { id: 57, title: 'Invert Binary Tree', description: 'Invert/flip binary tree', difficulty: 'easy', solved: false },
            { id: 58, title: 'Binary Tree Level Order Traversal', description: 'Level order traversal of tree', difficulty: 'medium', solved: false },
            { id: 59, title: 'Validate Binary Search Tree', description: 'Check if tree is valid BST', difficulty: 'medium', solved: false },
            { id: 60, title: 'Kth Smallest Element in BST', description: 'Find kth smallest in BST', difficulty: 'medium', solved: false },
            { id: 61, title: 'Lowest Common Ancestor of BST', description: 'Find LCA in BST', difficulty: 'medium', solved: false },
            { id: 62, title: 'Binary Tree Maximum Path Sum', description: 'Maximum path sum in tree', difficulty: 'hard', solved: false },
            { id: 63, title: 'Serialize and Deserialize Binary Tree', description: 'Serialize tree to string', difficulty: 'hard', solved: false },
            { id: 64, title: 'Binary Tree Cameras', description: 'Minimum cameras to monitor tree', difficulty: 'hard', solved: false },
            { id: 65, title: 'Recover Binary Search Tree', description: 'Fix BST with two swapped nodes', difficulty: 'hard', solved: false },
            { id: 66, title: 'Vertical Order Traversal', description: 'Traverse tree in vertical order', difficulty: 'hard', solved: false }
        ]
    },
    7: {
        name: 'Dynamic Programming',
        description: 'Optimization problems, memoization, and DP patterns',
        problems: [
            { id: 67, title: 'Climbing Stairs', description: 'Number of ways to climb stairs', difficulty: 'easy', solved: false },
            { id: 68, title: 'House Robber', description: 'Maximum money without robbing adjacent', difficulty: 'medium', solved: false },
            { id: 69, title: 'House Robber II', description: 'House robber in circular arrangement', difficulty: 'medium', solved: false },
            { id: 70, title: 'Longest Palindromic Subsequence', description: 'Length of longest palindromic subsequence', difficulty: 'medium', solved: false },
            { id: 71, title: 'Palindromic Substrings', description: 'Count all palindromic substrings', difficulty: 'medium', solved: false },
            { id: 72, title: 'Decode Ways', description: 'Number of ways to decode string', difficulty: 'medium', solved: false },
            { id: 73, title: 'Coin Change', description: 'Minimum coins to make amount', difficulty: 'medium', solved: false },
            { id: 74, title: 'Maximum Product Subarray', description: 'Maximum product of contiguous subarray', difficulty: 'medium', solved: false },
            { id: 75, title: 'Word Break', description: 'Check if string can be segmented', difficulty: 'medium', solved: false },
            { id: 76, title: 'Longest Increasing Subsequence', description: 'Length of longest increasing subsequence', difficulty: 'medium', solved: false },
            { id: 77, title: 'Edit Distance', description: 'Minimum operations to convert strings', difficulty: 'hard', solved: false },
            { id: 78, title: 'Regular Expression Matching', description: 'Implement regex with . and *', difficulty: 'hard', solved: false },
            { id: 79, title: 'Interleaving String', description: 'Check if string is interleaving of two strings', difficulty: 'hard', solved: false },
            { id: 80, title: 'Distinct Subsequences', description: 'Count distinct subsequences', difficulty: 'hard', solved: false },
            { id: 81, title: 'Burst Balloons', description: 'Maximum coins from bursting balloons', difficulty: 'hard', solved: false },
            { id: 82, title: 'Dungeon Game', description: 'Minimum health to reach princess', difficulty: 'hard', solved: false }
        ]
    }
};

// ===== GLOBAL STATE MANAGEMENT =====
let appState = {
    user: { name: 'Student' },
    streak: { count: 0 },
    topics: [],
    goals: [],
    problems: {},
    currentPage: 'home',
    currentTopic: null,
    timer: {
        minutes: 25,
        seconds: 0,
        isRunning: false,
        intervalId: null,
        customMinutes: 25
    }
};

// ===== DOM ELEMENT REFERENCES =====
const elements = {
    // Pages
    homePage: document.getElementById('homePage'),
    topicPage: document.getElementById('topicPage'),
    
    // Header elements
    userName: document.getElementById('userName'),
    editNameBtn: document.getElementById('editNameBtn'),
    
    // Dashboard stats
    streakCount: document.getElementById('streakCount'),
    progressPercent: document.getElementById('progressPercent'),
    miniProgressFill: document.getElementById('miniProgressFill'),
    solvedProblems: document.getElementById('solvedProblems'),
    
    // Timer elements
    timerDisplay: document.getElementById('timerDisplay'),
    startTimer: document.getElementById('startTimer'),
    pauseTimer: document.getElementById('pauseTimer'),
    resetTimer: document.getElementById('resetTimer'),
    setTimer: document.getElementById('setTimer'),
    
    // Topics
    topicsGrid: document.getElementById('topicsGrid'),
    
    // Topic page
    backToHome: document.getElementById('backToHome'),
    topicTitle: document.getElementById('topicTitle'),
    topicDescription: document.getElementById('topicDescription'),
    topicProgress: document.getElementById('topicProgress'),
    topicProgressBar: document.getElementById('topicProgressBar'),
    problemsList: document.getElementById('problemsList'),
    
    // Goals
    goalInput: document.getElementById('goalInput'),
    addGoalBtn: document.getElementById('addGoalBtn'),
    goalsList: document.getElementById('goalsList'),
    
    // Modals
    nameModal: document.getElementById('nameModal'),
    nameInput: document.getElementById('nameInput'),
    saveNameBtn: document.getElementById('saveNameBtn'),
    cancelNameBtn: document.getElementById('cancelNameBtn'),
    
    // Loading & Toast
    loading: document.getElementById('loading'),
    toastContainer: document.getElementById('toastContainer')
};

// ===== UTILITY FUNCTIONS =====
function showLoading() {
    elements.loading.classList.add('active');
}

function hideLoading() {
    elements.loading.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style=\"font-weight: 600; margin-bottom: 4px;\">${type === 'success' ? '✅' : '❌'} ${type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <div>${message}</div>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' }
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API call failed:', error);
        showToast('Failed to connect to server. Please check if backend is running.', 'error');
        throw error;
    }
}

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageName}Page`);
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageName;
    }
}

function showTopicProblems(topicId) {
    appState.currentTopic = topicId;
    const topicData = DSA_PROBLEMS_DATA[topicId];
    
    if (!topicData) return;
    
    // Update topic header
    elements.topicTitle.textContent = topicData.name;
    elements.topicDescription.textContent = topicData.description;
    
    // Update topic progress
    updateTopicProgress(topicId);
    
    // Load problems
    loadProblems(topicId);
    
    // Show topic page
    showPage('topic');
}

function updateTopicProgress(topicId) {
    const problems = appState.problems[topicId] || DSA_PROBLEMS_DATA[topicId].problems;
    const solvedCount = problems.filter(p => p.solved).length;
    const totalCount = problems.length;
    const percentage = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;
    
    elements.topicProgress.textContent = `${solvedCount}/${totalCount} problems solved`;
    elements.topicProgressBar.style.width = `${percentage}%`;
}

// ===== DATA LOADING FUNCTIONS =====
async function loadData() {
    try {
        showLoading();
        
        const data = await apiCall('/data');
        
        appState.user = data.user;
        appState.streak = data.streak;
        appState.topics = data.topics;
        appState.goals = data.goals;
        appState.problems = data.problems || {};
        
        // Initialize problems if not exists
        initializeProblems();
        
        updateAllUI();
        
        console.log('Data loaded successfully:', data);
        
    } catch (error) {
        console.error('Failed to load data:', error);
        showToast('Failed to load data. Using default values.', 'error');
        initializeProblems();
        updateAllUI();
    } finally {
        hideLoading();
    }
}

function initializeProblems() {
    Object.keys(DSA_PROBLEMS_DATA).forEach(topicId => {
        if (!appState.problems[topicId]) {
            appState.problems[topicId] = [...DSA_PROBLEMS_DATA[topicId].problems];
        }
    });
}

// ===== UI UPDATE FUNCTIONS =====
function updateAllUI() {
    updateUserInfo();
    updateDashboardStats();
    updateTopics();
    updateGoals();
    updateTimer();
}

function updateUserInfo() {
    elements.userName.textContent = appState.user.name;
}

function updateDashboardStats() {
    elements.streakCount.textContent = appState.streak.count;
    
    // Calculate overall progress
    let totalProblems = 0;
    let solvedProblems = 0;
    
    Object.values(appState.problems).forEach(problems => {
        totalProblems += problems.length;
        solvedProblems += problems.filter(p => p.solved).length;
    });
    
    const progressPercent = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;
    
    elements.progressPercent.textContent = `${progressPercent}%`;
    elements.miniProgressFill.style.width = `${progressPercent}%`;
    elements.solvedProblems.textContent = solvedProblems;
}

function updateTopics() {
    elements.topicsGrid.innerHTML = '';
    
    if (!appState.topics || appState.topics.length === 0) {
        elements.topicsGrid.innerHTML = `
            <div class=\"empty-state\">
                <h4>No topics available</h4>
                <p>Topics will appear here once loaded from the server.</p>
            </div>
        `;
        return;
    }
    
    appState.topics.forEach(topic => {
        const topicCard = createTopicCard(topic);
        elements.topicsGrid.appendChild(topicCard);
    });
}

function createTopicCard(topic) {
    const problems = appState.problems[topic.id] || [];
    const solvedCount = problems.filter(p => p.solved).length;
    const totalCount = problems.length;
    const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = `topic-card ${progressPercent === 100 ? 'completed' : ''}`;
    card.onclick = () => showTopicProblems(topic.id);
    
    card.innerHTML = `
        <div class=\"topic-header\">
            <div>
                <div class=\"topic-name\">${topic.name}</div>
                <div class=\"topic-description\">${topic.description}</div>
            </div>
            <div class=\"topic-status\">${progressPercent === 100 ? '✅' : '📚'}</div>
        </div>
        <div class=\"topic-progress\">
            <span>${solvedCount}/${totalCount} problems</span>
            <div class=\"progress-bar-small\">
                <div class=\"progress-fill-small\" style=\"width: ${progressPercent}%\"></div>
            </div>
        </div>
    `;
    
    return card;
}

function loadProblems(topicId, difficulty = 'all') {
    const problems = appState.problems[topicId] || [];
    const filteredProblems = difficulty === 'all' ? problems : problems.filter(p => p.difficulty === difficulty);
    
    elements.problemsList.innerHTML = '';
    
    filteredProblems.forEach(problem => {
        const problemElement = createProblemElement(problem, topicId);
        elements.problemsList.appendChild(problemElement);
    });
}

function createProblemElement(problem, topicId) {
    const element = document.createElement('div');
    element.className = `problem-item ${problem.solved ? 'solved' : ''}`;
    element.onclick = () => toggleProblem(topicId, problem.id);
    
    element.innerHTML = `
        <div class=\"problem-checkbox\">${problem.solved ? '✓' : ''}</div>
        <div class=\"problem-info\">
            <div class=\"problem-title\">${problem.title}</div>
            <div class=\"problem-description\">${problem.description}</div>
        </div>
        <div class=\"problem-difficulty difficulty-${problem.difficulty}\">${problem.difficulty}</div>
    `;
    
    return element;
}

function toggleProblem(topicId, problemId) {
    const problems = appState.problems[topicId];
    const problem = problems.find(p => p.id === problemId);
    
    if (problem) {
        problem.solved = !problem.solved;
        
        // Update UI
        updateTopicProgress(topicId);
        loadProblems(topicId);
        updateDashboardStats();
        updateTopics();
        
        showToast(`Problem ${problem.solved ? 'completed' : 'marked incomplete'}!`);
    }
}

// ===== GOALS FUNCTIONS =====
function updateGoals() {
    elements.goalsList.innerHTML = '';
    
    if (!appState.goals || appState.goals.length === 0) {
        elements.goalsList.innerHTML = `
            <div class=\"empty-state\">
                <h4>No goals yet</h4>
                <p>Add your first daily goal to get started!</p>
            </div>
        `;
        return;
    }
    
    const sortedGoals = [...appState.goals].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedGoals.forEach(goal => {
        const goalElement = createGoalElement(goal);
        elements.goalsList.appendChild(goalElement);
    });
}

function createGoalElement(goal) {
    const element = document.createElement('div');
    element.className = `goal-item ${goal.completed ? 'completed' : ''}`;
    element.onclick = () => toggleGoal(goal.id);
    
    element.innerHTML = `
        <div class=\"goal-checkbox\">${goal.completed ? '✓' : ''}</div>
        <div class=\"goal-text\">${goal.text}</div>
        <div class=\"goal-date\">${new Date(goal.date).toLocaleDateString()}</div>
    `;
    
    return element;
}

async function addGoal() {
    const goalText = elements.goalInput.value.trim();
    
    if (!goalText) {
        showToast('Please enter a goal!', 'error');
        return;
    }
    
    try {
        showLoading();
        
        const response = await apiCall('/add-goal', 'POST', { text: goalText });
        
        if (response.success) {
            appState.goals.push(response.goal);
            elements.goalInput.value = '';
            updateGoals();
            updateDashboardStats();
            showToast('Goal added successfully!');
        }
        
    } catch (error) {
        console.error('Failed to add goal:', error);
    } finally {
        hideLoading();
    }
}

async function toggleGoal(goalId) {
    try {
        showLoading();
        
        const response = await apiCall('/toggle-goal', 'POST', { goalId });
        
        if (response.success) {
            const goal = appState.goals.find(g => g.id === goalId);
            if (goal) {
                goal.completed = response.goal.completed;
            }
            
            updateGoals();
            updateDashboardStats();
            showToast(`Goal ${response.goal.completed ? 'completed' : 'marked incomplete'}!`);
        }
        
    } catch (error) {
        console.error('Failed to toggle goal:', error);
    } finally {
        hideLoading();
    }
}

// ===== TIMER FUNCTIONS =====
function updateTimer() {
    const { minutes, seconds } = appState.timer;
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');
    elements.timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    if (appState.timer.isRunning) return;
    
    appState.timer.isRunning = true;
    elements.startTimer.classList.add('active');
    
    appState.timer.intervalId = setInterval(() => {
        if (appState.timer.seconds > 0) {
            appState.timer.seconds--;
        } else if (appState.timer.minutes > 0) {
            appState.timer.minutes--;
            appState.timer.seconds = 59;
        } else {
            // Timer finished - show alert and play sound
            pauseTimer();
            
            // Show alert
            alert('🎉 Study session completed! Time to take a break!');
            
            // Play notification sound
            playNotificationSound();
            
            // Show toast
            showToast('🎉 Study session completed! Great job!', 'success');
            
            resetTimer();
            return;
        }
        
        updateTimer();
    }, 1000);
}

/**
 * Play notification sound when timer ends
 */
function playNotificationSound() {
    try {
        // Create audio context for beep sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800; // Frequency in Hz
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (error) {
        console.log('Audio not supported:', error);
    }
}

function pauseTimer() {
    appState.timer.isRunning = false;
    elements.startTimer.classList.remove('active');
    
    if (appState.timer.intervalId) {
        clearInterval(appState.timer.intervalId);
        appState.timer.intervalId = null;
    }
}

function resetTimer() {
    pauseTimer();
    appState.timer.minutes = appState.timer.customMinutes;
    appState.timer.seconds = 0;
    updateTimer();
}

function setCustomTimer() {
    if (appState.timer.isRunning) {
        showToast('Please pause the timer before changing duration!', 'error');
        return;
    }
    
    const minutes = prompt('Enter timer duration in minutes (1-120):', appState.timer.customMinutes);
    
    if (minutes === null) return; // User cancelled
    
    const parsedMinutes = parseInt(minutes);
    
    if (isNaN(parsedMinutes) || parsedMinutes < 1 || parsedMinutes > 120) {
        showToast('Please enter a valid number between 1 and 120 minutes!', 'error');
        return;
    }
    
    appState.timer.customMinutes = parsedMinutes;
    appState.timer.minutes = parsedMinutes;
    appState.timer.seconds = 0;
    updateTimer();
    showToast(`Timer set to ${parsedMinutes} minutes!`);
}

// ===== USER MANAGEMENT =====
async function updateUserName() {
    const newName = elements.nameInput.value.trim();
    
    if (!newName) {
        showToast('Please enter a valid name!', 'error');
        return;
    }
    
    try {
        showLoading();
        
        const response = await apiCall('/update-user', 'POST', { name: newName });
        
        if (response.success) {
            appState.user.name = response.user.name;
            updateUserInfo();
            closeNameModal();
            showToast('Name updated successfully!');
        }
        
    } catch (error) {
        console.error('Failed to update name:', error);
    } finally {
        hideLoading();
    }
}

function openNameModal() {
    elements.nameInput.value = appState.user.name;
    elements.nameModal.classList.add('active');
    elements.nameInput.focus();
}

function closeNameModal() {
    elements.nameModal.classList.remove('active');
    elements.nameInput.value = '';
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
    // Header events
    elements.editNameBtn.addEventListener('click', openNameModal);
    
    // Timer events
    elements.startTimer.addEventListener('click', startTimer);
    elements.pauseTimer.addEventListener('click', pauseTimer);
    elements.resetTimer.addEventListener('click', resetTimer);
    elements.setTimer.addEventListener('click', setCustomTimer);
    
    // Add double-click to set custom timer (alternative method)
    elements.timerDisplay.addEventListener('dblclick', setCustomTimer);
    elements.timerDisplay.style.cursor = 'pointer';
    elements.timerDisplay.title = 'Double-click to set custom timer duration';
    
    // Navigation
    elements.backToHome.addEventListener('click', () => showPage('home'));
    
    // Goals events
    elements.addGoalBtn.addEventListener('click', addGoal);
    elements.goalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addGoal();
    });
    
    // Modal events
    elements.saveNameBtn.addEventListener('click', updateUserName);
    elements.cancelNameBtn.addEventListener('click', closeNameModal);
    elements.nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateUserName();
    });
    
    // Close modal when clicking outside
    elements.nameModal.addEventListener('click', (e) => {
        if (e.target === elements.nameModal) closeNameModal();
    });
    
    // Difficulty filter
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            const difficulty = e.target.dataset.difficulty;
            if (appState.currentTopic) {
                loadProblems(appState.currentTopic, difficulty);
            }
        }
    });
    
    console.log('✅ Event listeners set up successfully');
}

// ===== APPLICATION INITIALIZATION =====
async function initApp() {
    console.log('🚀 Initializing DSA Problems Tracker...');
    
    try {
        setupEventListeners();
        updateTimer();
        
        await loadData();
        
        console.log('✅ Application initialized successfully!');
        showToast('Welcome to DSA Problems Tracker! 🎯');
        
    } catch (error) {
        console.error('❌ Failed to initialize application:', error);
        showToast('Application failed to start properly. Some features may not work.', 'error');
    }
}

// ===== START APPLICATION =====
document.addEventListener('DOMContentLoaded', initApp);

// ===== EXPORT FOR DEBUGGING =====
window.appDebug = {
    appState,
    loadData,
    updateAllUI,
    apiCall,
    showToast,
    showTopicProblems
};