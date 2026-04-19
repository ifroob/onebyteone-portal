# OneByteOne Portal

A professional, mobile-optimized portal for OneByteOne - helping people and businesses with software solutions, one byte at a time.

## Features

- **3 Clear Offerings**: For Businesses, For Learners/Students, Free Discovery Call
- **Email Capture**: Collect emails for roadmap downloads
- **Mobile-First Design**: Fully responsive
- **OneByteOne Branding**: Teal (#089bb9), Light Blue (#eaf7fa)

---

## File Structure

├── backend/ │ ├── .env # Backend environment variables │ ├── requirements.txt # Python dependencies │ └── server.py # FastAPI server │ ├── frontend/ │ ├── public/ │ │ ├── index.html # HTML template │ │ └── logo.webp # OneByteOne logo │ ├── src/ │ │ ├── App.js # Main React component │ │ ├── App.css # Brand styles │ │ ├── index.js # Entry point │ │ └── index.css # Tailwind imports │ ├── .env # Frontend environment variables │ ├── package.json # Node dependencies │ └── tailwind.config.js # Tailwind configuration │ └── README.md


---

## Deployment Instructions

### Prerequisites

- Node.js 18+
- Python 3.9+
- MongoDB (local or Atlas)

---

### Option 1: Local Development

#### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
# Edit .env with your MongoDB URL

# Run server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
Frontend Setup
cd frontend

# Install dependencies
yarn install  # or npm install

# Configure environment
# Edit .env - set REACT_APP_BACKEND_URL to your backend URL

# Run development server
yarn start  # or npm start
```

### Option 2: Deploy to Vercel (Frontend) + Railway/Render (Backend)
Frontend (Vercel)

Push code to GitHub

Go to vercel.com and import your repo

Set root directory to frontend

Add environment variable:

REACT_APP_BACKEND_URL = your backend URL

Deploy

Backend (Railway)

Go to railway.app

Create new project from GitHub

Set root directory to backend

Add environment variables:
MONGO_URL = your MongoDB connection string
DB_NAME = your database name
CORS_ORIGINS = your frontend URL

Deploy

### Option 3: Deploy with Docker
Create a docker-compose.yml in the root:

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8001:8001"
    environment:
      - MONGO_URL=mongodb://mongo:27017
      - DB_NAME=onebyteone
      - CORS_ORIGINS=http://localhost:3000
    depends_on:
      - mongo

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_BACKEND_URL=http://localhost:8001

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:

```
Run with:
```bash
docker-compose up --build
```

Environment Variables

Backend (.env)
MONGO_URL="mongodb://localhost:27017"
DB_NAME="onebyteone"
CORS_ORIGINS="*"


Frontend (.env)
REACT_APP_BACKEND_URL=http://localhost:8001


API Endpoints
Method	Endpoint	Description
GET	/api/	Health check
POST	/api/subscribe	Subscribe email for roadmaps
GET	/api/subscriptions	List all subscribers (admin)
Customization
Update Calendly Links
In frontend/src/App.js, find the offerings array and update the link property:

link: "https://calendly.com/YOUR-USERNAME/business",
Change Brand Colors
In frontend/src/App.css, update the CSS variables:

:root {
  --obo-primary: #089bb9;  /* Main teal */
  --obo-light: #eaf7fa;    /* Light background */
  --obo-dark: #1a1a2e;     /* Dark text */
}


License
MIT License - OneByteOne