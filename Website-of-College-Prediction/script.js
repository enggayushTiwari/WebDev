// Add event listeners for login and register buttons
document.getElementById('loginBtn').addEventListener('click', function() {
    // Open login modal
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
});

document.getElementById('registerBtn').addEventListener('click', function() {
    // Open register modal
    var modal = document.getElementById('registerModal');
    modal.style.display = 'block';
});

// Add event listeners for About Us and Contact Us buttons
document.getElementById('aboutUsBtn').addEventListener('click', function() {
    // Open About Us modal
    var modal = document.getElementById('aboutUsModal');
    modal.style.display = 'block';
});

document.getElementById('contactUsBtn').addEventListener('click', function() {
    // Open Contact Us modal
    var modal = document.getElementById('contactUsModal');
    modal.style.display = 'block';
});

// Add event listeners for close buttons
var closeBtns = document.getElementsByClassName('close');
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        // Close the modal
        var modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    });
}

// Add event listeners for submit buttons
document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Prevent default form submission
    e.preventDefault();
    // Get the form data
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Validate the form data
    // You need to add your own validation logic here
    // For example, check if the email and password are not empty
    if (email && password) {
        // Send the form data to the server
        // You need to add your own server-side logic here
        // For example, use fetch or XMLHttpRequest to send an AJAX request
        // Then handle the response from the server
        // For example, show a success or error message to the user
        alert('Login successful'); // This is just a placeholder
    } else {
        // Show an error message to the user
        alert('Please enter your email and password'); // This is just a placeholder
    }
    // Close the modal
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    // Prevent default form submission
    e.preventDefault();
    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // You can add further registration logic here
    // For example, send the data to the server using AJAX
    // and handle the server response accordingly
});

// Add event listener for Home button
document.getElementById('homeBtn').addEventListener('click', function() {
    location.reload();
});

const getStartedBtn = document.getElementById('getStartedBtn');
const topCollegesBtn = document.getElementById('topCollegesBtn');

getStartedBtn.addEventListener('click', function() {
  // Open the "IITs" page in the same window
  window.location.href = "iits.html";
});

topCollegesBtn.addEventListener('click', function() {
  // Open the "IITs" page in the same window
  window.location.href = "iits.html";
});