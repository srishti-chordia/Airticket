// Script for handling pop-ups

document.getElementById('signinForm')?.addEventListener('submit', (e) => {
e.preventDefault();
alert('Logged in successfully');
  window.location.href = 'index.html'; // Redirect to home
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registered successfully');
  window.location.href = 'signin.html'; // Redirect to sign-in page
});

document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
e.preventDefault();
alert('Booking confirmed!');
  window.location.href = 'index.html'; // Redirect to home
});
