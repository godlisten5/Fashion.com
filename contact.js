document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for reaching out! We will get back to you shortly.');
});
// Function to validate the form
function validateForm(event) {
  event.preventDefault();  // Prevent the form from submitting

  // Get the values from the input fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regular expression for email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Validation checks
  let valid = true;
  let errorMessage = '';

  // Check if the name is empty
  if (name === '') {
    valid = false;
    errorMessage += 'Name is required.\n';
  }

  // Check if the email is valid
  if (email === '') {
    valid = false;
    errorMessage += 'Email is required.\n';
  } else if (!emailPattern.test(email)) {
    valid = false;
    errorMessage += 'Please enter a valid email address.\n';
  }

  // Check if the message is empty
  if (message === '') {
    valid = false;
    errorMessage += 'Message is required.\n';
  }

  // If validation fails, show error message
  if (!valid) {
    alert(errorMessage);
    return false;
  }

  // If validation is successful, alert success
  alert('Your message has been sent successfully!');
  return true;  // Allow form submission
}

// Add event listener to form submit button
document.getElementById('contactForm').addEventListener('submit', validateForm);
