# 🌟 Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development

## 🚀 Objective
Build a **responsive React application** using **JSX** and **Tailwind CSS** that demonstrates:
- Component-based architecture  
- State management with React Hooks  
- API integration  
- Theme switching (light/dark mode)  
- Responsive design principles  

---

## 📦 Project Overview
This project implements a **Task Manager** web application that allows users to:
- Add, mark, and delete tasks  
- Filter tasks (All, Active, Completed)  
- Persist tasks in `localStorage` using a custom React hook  
- Fetch and display data from a public API  
- Use Tailwind CSS for responsive and modern UI  

---

## 🧱 Features
✅ Reusable React components (`Button`, `Navbar`, `Footer`, etc.)

✅ Task management with add, delete, and filter functionality

✅ Local storage persistence using a custom hook (`useLocalStorageTasks`)

✅ Dark and light mode theme support

✅ API data fetching with loading and error states

✅ Fully responsive UI built with Tailwind CSS  

---

## 🗂️ Folder Structure
```

plp-task-manager/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── TaskManager.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       └── logo.svg
├── tailwind.config.js
├── package.json
└── README.md

````

---

## ⚙️ Installation and Setup

### 1️⃣ Prerequisites
- Node.js **v18+**
- npm or yarn
- A code editor (VS Code recommended)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<ryankoigi-dev>/plp-task-manager.git
cd plp-task-manager
````

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 🧠 Key Technologies

| Technology       | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| **React.js**     | Frontend library for building dynamic UIs                  |
| **JSX**          | Syntax extension for embedding HTML inside JavaScript      |
| **Tailwind CSS** | Utility-first CSS framework for responsive styling         |
| **Vite**         | Fast build tool for React apps                             |
| **React Hooks**  | useState, useEffect, and custom hooks for state management |

---

## 🧩 Components Overview

### 🔹 `Button.jsx`

Reusable button with multiple variants:

```jsx
<Button variant="primary">Add Task</Button>
<Button variant="danger">Delete</Button>
```

### 🔹 `TaskManager.jsx`

Handles adding, deleting, and toggling task completion with localStorage persistence.

### 🔹 `App.jsx`

Main layout component with Navbar, Footer, and TaskManager.

---

## 🌐 API Integration Example

This project demonstrates fetching data from an external API such as:

```js
https://jsonplaceholder.typicode.com/posts
```

Example snippet:

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => setError(err.message));
}, []);
```

---

## 🎨 Styling with Tailwind CSS

Tailwind provides responsive, utility-first classes:

```jsx
<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
  <h1 className="text-2xl font-bold">Task Manager</h1>
</div>
```

Enable **dark mode** in `tailwind.config.js`:

```js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🧪 Expected Output

✅ Functional React Task Manager

✅ Responsive UI with Tailwind CSS

✅ State management using React hooks

✅ API integration and error handling

✅ Clean, organized, and reusable components

---

## 🚀 Deployment

### Option 1: **Vercel**

1. Go to [Vercel Dashboard](https://vercel.com/)
2. Import your GitHub repository
3. Click **Deploy**

### Option 2: **Netlify**

1. Go to [Netlify](https://app.netlify.com/)
2. Import your project from GitHub
3. Deploy using `npm run build`

### Option 3: **GitHub Pages**

```bash
npm run build
npm install gh-pages --save-dev
npm run deploy
```

## 📚 Resources

* [React.js Documentation](https://react.dev/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Vite Documentation](https://vitejs.dev/guide/)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 🧑‍💻 Author

**Ryan Koigi Njuguna**
💼 Power Learn Project – Software Development Track

📧 ryankoigi64@gmail.com.
