/*let token;

const register = async () => {
  const name = document.getElementById('register-name').value;
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during registration');
  }
};

const login = async () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      token = data.token;
      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        window.location.href = 'tasks.html'; // Redirect to tasks page
      }
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during login');
  }
};

const createTask = async () => {
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const deadline = document.getElementById('task-deadline').value;

  try {
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ title, description, deadline })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Task created:', data);
      loadTasks();
    } else {
      alert(data.message || 'Task creation failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during task creation');
  }
};

const loadTasks = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const tasks = await response.json();

    if (response.ok) {
      const tasksList = document.getElementById('tasks-list');
      tasksList.innerHTML = '';
      tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = `${task.title} - ${task.description} - ${new Date(task.deadline).toLocaleString()}`;
        tasksList.appendChild(taskItem);
      });
    } else {
      alert(tasks.message || 'Failed to load tasks');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while loading tasks');
  }
};
*/

/*
let token;

async function register() {
  const name = document.getElementById('register-name').value;
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during registration');
  }
}

async function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      token = data.token;
      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        window.location.href = 'tasks.html'; // Redirect to tasks page
      }
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during login');
  }
}

async function createTask() {
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const deadline = document.getElementById('task-deadline').value;

  try {
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ title, description, deadline })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Task created:', data);
      loadTasks();
    } else {
      alert(data.message || 'Task creation failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during task creation');
  }
}

async function loadTasks() {
  try {
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const tasks = await response.json();

    if (response.ok) {
      const tasksList = document.getElementById('tasks-list');
      tasksList.innerHTML = '';
      tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = `${task.title} - ${task.description} - ${new Date(task.deadline).toLocaleString()}`;
        tasksList.appendChild(taskItem);
      });
    } else {
      alert(tasks.message || 'Failed to load tasks');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while loading tasks');
  }
}
*/

async function register() {
    const name = document.getElementById('register-name').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    console.log('Registering user:', { name, username, password });
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password })
      });
  
      const data = await response.json();
  
      console.log('Response from server:', data);
  
      if (response.ok) {
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
  }

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Successful login
        const token = data.token; 
        localStorage.setItem('token', token); 
        alert('Login successful!');
        window.location.href = 'tasks.html'; 
      } else {
        
        alert(data.message || 'Login failed'); 
      }
    } catch (error) {
     
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  }
async function createTask() {
    
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const deadline = document.getElementById('task-deadline').value;
  

    const taskData = {
      title: title,
      description: description,
      deadline: deadline
    };
  
    try {
      
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(taskData)
      });
  
   
      const responseData = await response.json();
  
      if (response.ok) {
      
        console.log('Task created successfully:', responseData);
        alert('Task created successfully!');
      } else {
    
        console.error('Error creating task:', responseData.message || 'Unknown error');
        alert('Error creating task: ' + (responseData.message || 'Unknown error'));
      }
    } catch (error) {
   
      console.error('Error creating task:', error);
      alert('An error occurred while creating the task');
    }
  }
  
  