# 📝 Simple To-Do List App

A minimal, single-file JavaScript to-do list application that runs directly in your browser. Built with vanilla JS and localStorage for persistence.

---

## ✨ Features

- ✅ **Add Tasks** - Type and press Enter to add new items
- ✅ **Mark Complete** - Click checkboxes to toggle task status
- ✅ **Delete Items** - Remove completed or unwanted tasks
- ✅ **Persistent Storage** - All data saved to browser localStorage
- ✅ **Clean UI** - Simple, responsive design

---

## 📁 Project Structure

your-repo-name/
├── app.js          # Main application logic
└── index.html      # HTML template (optional)

---

## 🚀 Getting Started

1. **Clone or download this repository**
2. **Open `index.html` in your browser**
3. **Start adding tasks!**

---

## 🛠️ Tech Stack

|Technology |	Purpose |
|-----------|-----------|
|Vanilla JavaScript	| Core logic|
|localStorage |	Data persistence|
|HTML5/CSS3|	Basic styling|

No build tools, frameworks, or dependencies required!

---

## 🔧 Configuration
Browser Compatibility
✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
⚠️ Internet Explorer 11+ (limited support)
LocalStorage Limits
Browser	Max Storage
Chrome/Firefox/Safari/Edge	~5-10 MB
Mobile browsers	Varies by vendor

---

## 📊 Usage Examples
Adding Tasks
// Via API (if exposed)
addTodo("Buy groceries");
addTodo("Complete project");
Checking Status

// Get all tasks
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Check if task exists
const found = todos.find(t => t.text === "Task name");
console.log(found.done); // true/false

---

## 📝 License
MIT License - Feel free to use, modify, and distribute.

---

## 👨‍💻 Contributing
No contribution expected! This is a simple project to test qwen3.5-4b-claude-4.6-opus-reasoning-distilled-v2 LLM model.
