Retro To-Do List App
This repository is an attempt to initiate the idea of full-stack development by creating a To-Do list with a retro-style UI. The frontend is built with React and styled using Tailwind CSS, while the backend APIs are powered by Django.

Features
Retro Style UI: A visually appealing retro-style design using React and Tailwind CSS.
Task Management: Create, view, and manage tasks efficiently.
Dynamic Checkboxes: Custom-styled checkboxes for a consistent look.
Responsive Design: Fully responsive design to ensure usability on various devices.
Technology Stack
Frontend: React, Tailwind CSS
Backend: Django, Django REST Framework
API Integration: Axios for handling API requests
Getting Started
Prerequisites
Node.js
Python
Django
React
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/retro-todo-list.git
cd retro-todo-list
Backend Setup:

sh
Copy code
cd backend
python -m venv env
source env/bin/activate # On Windows, use `env\Scripts\activate`
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
Frontend Setup:

sh
Copy code
cd ../frontend
npm install
npm start
Usage
Run the backend server:

sh
Copy code
cd backend
python manage.py runserver
Run the frontend development server:

sh
Copy code
cd frontend
npm start
Open your browser and navigate to:

sh
Copy code
http://localhost:5173
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License.

