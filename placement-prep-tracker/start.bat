@echo off
echo ========================================
echo   Placement Preparation Tracker
echo   Quick Start Script
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version

echo.
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.
echo 🚀 Starting the backend server...
echo Backend will run on: http://localhost:5000
echo Frontend should be opened on: http://localhost:3000
echo.
echo ⚠️  IMPORTANT: After backend starts, open another terminal
echo    and navigate to the 'frontend' folder, then open index.html
echo    with Live Server in VS Code or use Python HTTP server
echo.
echo Starting server now...
npm start