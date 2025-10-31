# THRONEIFY

> A Game of Thrones themed music streaming platform built with React and FastAPI

![Game of Thrones](https://img.shields.io/badge/Theme-Game%20of%20Thrones-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?style=for-the-badge&logo=fastapi)
![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248?style=for-the-badge&logo=mongodb)

##  Overview

**THRONEIFY** is an immersive music streaming web application inspired by the epic world of Game of Thrones. Experience your favorite playlists with a medieval fantasy aesthetic, complete with house-themed collections, character-based recommendations, and location-specific ambiances.

### Features

-  **Themed Playlists** - Curated music collections for each Great House
-  **Location-Based Themes** - Explore playlists inspired by iconic Westeros locations
-  **Character Profiles** - Discover music through your favorite characters
-  **Atmospheric Effects** - Immersive snow effects and animated backgrounds
-  **Favorites System** - Save and manage your favorite playlists
-  **Modern UI** - Beautiful glassmorphic design with TailwindCSS
-  **Responsive Design** - Seamless experience across all devices
-  **Search Functionality** - Find playlists by house, location, or theme

##  Tech Stack

### Frontend
- **React 19.0.0** - Modern UI framework
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API requests
- **CRACO** - Custom React App Configuration

### Backend
- **FastAPI** - High-performance Python web framework
- **MongoDB** - NoSQL database with Motor (async driver)
- **Pydantic** - Data validation and settings management
- **Uvicorn** - ASGI server
- **Python-dotenv** - Environment variable management


## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **Yarn** - Install via `npm install -g yarn`
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use MongoDB Atlas

### Installation

#### 1) Clone the Repository

```bash
git clone https://github.com/yourusername/throneify.git
cd throneify
```

#### 2) Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
# Edit .env file with your MongoDB connection string
```

**Backend `.env` Configuration:**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=throneify_db
CORS_ORIGINS=http://localhost:3000
```

#### 3) Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
yarn install

# Configure environment variables
# Edit .env file
```

**Frontend `.env` Configuration:**
```env
REACT_APP_BACKEND_URL=http://localhost:8000
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=true
ENABLE_HEALTH_CHECK=false
```

### Running the Application

#### Start MongoDB

Ensure MongoDB is running on your system:

```bash
# On Windows (if installed as service):
net start MongoDB

# On macOS:
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod
```

#### Start Backend Server

```bash
cd backend
.\venv\Scripts\Activate.ps1  # Activate virtual environment
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: **http://localhost:8000**
API documentation: **http://localhost:8000/docs**

#### Start Frontend Development Server

Open a new terminal:

```bash
cd frontend
yarn start
```

Frontend will be available at: **http://localhost:3000**

## API Endpoints

### Base URL: `http://localhost:8000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check endpoint |
| POST | `/status` | Create status check entry |
| GET | `/status` | Get all status checks |

## UI Components

The project uses **shadcn/ui** components including:

- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Navigation Menu, Popover, Progress
- Scroll Area, Select, Slider
- Tabs, Toast, Tooltip
- And many more...

##  Pages

- **Home** - Featured playlists and recommendations
- **Search** - Search and filter playlists
- **Library** - Your saved favorites and collections

## 🧪 Testing

```bash
# Frontend tests
cd frontend
yarn test

# Backend tests
cd backend
pytest
```

## Development Scripts

### Frontend

```bash
yarn start      # Start development server
yarn build      # Build for production
yarn test       # Run tests
```

### Backend

```bash
uvicorn server:app --reload              # Development server
uvicorn server:app --host 0.0.0.0        # Production server
pytest                                    # Run tests
black .                                   # Format code
flake8                                    # Lint code
```

## Key Features Explained

### Glassmorphic Design
Modern UI with frosted glass effects, backdrop blur, and subtle shadows for an immersive experience.

### House-Themed Collections
- Stark - Northern anthems
- Lannister - Royal compositions
- Targaryen - Dragon-inspired tracks
- And more...

### Atmospheric Effects
Dynamic snow particles and animated map backgrounds that respond to user interactions.

### Local Storage
Favorites and user preferences are saved locally for persistence across sessions.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Game of Thrones universe by George R.R. Martin
- HBO for the iconic series
- shadcn/ui for the beautiful component library
- The open-source community

## 📧 Contact

For questions or feedback, please open an issue on GitHub.
