# Whitening Agent Web Application

A modern web application for exploring and understanding whitening agents, built with React frontend and Flask backend, containerized with Docker.

## 🚀 Features

- **Interactive Frontend**: Built with React for a responsive user experience
- **RESTful API**: Flask backend providing data endpoints
- **Containerized**: Docker setup for easy deployment
- **Component Architecture**: Modular React components for maintainability
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Create React App** - Development setup
- **CSS Modules** - Styling approach
- **React Router** - Client-side routing

### Backend
- **Flask** - Python web framework
- **RESTful API** - JSON-based endpoints
- **CORS enabled** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
whitening-agent/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Navigation/
│   │   │   └── Tabs/
│   │   ├── App.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- **Docker** and **Docker Compose** installed
- **Node.js** (for local development)
- **Python 3.7+** (for local development)

### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd whitening-agent
   ```

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

### Local Development

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

#### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python app.py
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api`   | Returns welcome message from Flask backend |

### Example API Response
```json
{
  "message": "Hello from Flask!"
}
```

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
# Add your test commands here
```

## 🚀 Deployment

### Using Docker Compose (Production)
```bash
docker-compose -f docker-compose.yml up -d
```

### Environment Variables
Create a `.env` file in the root directory:
```bash
# Frontend
REACT_APP_API_URL=http://localhost:5000

# Backend
FLASK_ENV=production
FLASK_DEBUG=False
```

## 🎨 Customization

### Adding New Components
1. Create component directory in `frontend/src/components/`
2. Add `.js` and `.css` files
3. Import and use in `App.js`

### Adding New API Endpoints
1. Add new route in `backend/app.py`
2. Update frontend components to consume new endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.


## 📝 Roadmap

- [ ] Add comprehensive whitening agent database
- [ ] Implement search and filter functionality
- [ ] Add comparison features
- [ ] Implement user authentication
- [ ] Add admin dashboard
- [ ] Performance optimization
- [ ] Mobile app development

## 🔗 Useful Links

- [React Documentation](https://reactjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
