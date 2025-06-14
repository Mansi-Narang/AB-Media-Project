# 🧳 Full-Stack Travel Platform

A modern full-stack travel platform built with the MERN stack, designed to help users explore exciting destinations and top-selling tour packages. The project features a modular structure, seamless API integration, and a responsive user interface.

---

## ✨ Features

* Explore curated destinations with rich details and images
* View top-selling travel packages marked as popular
* Modular frontend components with React
* Backend API using Express.js and MongoDB
* Real-time data fetching with TanStack Query
* Developer-friendly code structure for easy extension

---

## 📋 Prerequisites

Ensure the following tools are installed on your system:

* [Node.js](https://nodejs.org/) (v16 or above)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/) (running locally or using MongoDB Atlas)

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travel-platform
```

Start the backend server:

```bash
npm start
```

The backend will be running at: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will be accessible at: `http://localhost:5173`

---

## 🧭 Usage

Once both servers are running:

1. Open `http://localhost:5173` in your browser
2. Browse the destinations and packages
3. Enjoy the responsive and fast user interface

---

## 🛠 Project Structure

```
.
├── backend/
│   ├── models/
│   ├── data/
│   ├── utils/
│   ├── .env
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── App.jsx
│   ├── .env
│   └── vite.config.js
```

---

## 🧯 Troubleshooting

* **MongoDB connection error**: Ensure your MongoDB service is running and URI is correct in `.env`
* **CORS issue**: Confirm `VITE_API_BASE_URL` matches the backend server's URL
* **Port conflict**: Check if ports `5000` (backend) and `5173` (frontend) are free or update them

---

## 📃 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
Feel free to fork and build upon it for your own use or contributions.

---

Let me know if you'd like this exported as a Markdown file or tailored for deployment instructions too.
