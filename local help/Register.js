



document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
});

// Select the form and user list
const register_form = document.getElementById('register_form');
const userList = document.getElementById('userList');

// Function to display stored users
function displayUsers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.username} (${user.email})`;
    userList.appendChild(li);
  });
}

// Handle form submission
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Add new user to the list
  users.push({ username, email, password });

  // Save updated users to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Clear form fields
  registrationForm.reset();

  // Refresh displayed users
  displayUsers();
});

// Display users on page load
displayUsers();

