/**
 * Paste the following snippet into the console to
 * get it ready for cheesy launch with big red button
 */

const body = document.querySelector('body');
const app = document.querySelector('.app');

const div = document.createElement('div');
const button = document.createElement('button');

// Initiatial app state before launch
app.style.transform = 'scale(0) rotate(360deg)';

// Set button text
button.innerHTML = '🚀 LAUNCH';

// style button
button.style.color = 'white';
button.style.padding = '2rem';
button.style.fontSize = '2em';
button.style.height = '20vh';
button.style.width = '20vh';
button.style.backgroundColor = '#ff3e3e';
button.style.boxShadow = '0 1vh 0 0 #a41818';
button.style.borderRadius = '10vh';
button.style.transition = 'all 0.2s linear';

// style background
div.style.height = '100vh';
div.style.width = '100vw';
div.style.position = 'fixed';
div.style.top = 0;
div.style.background = 'black';
div.style.zIndex = 9999;
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';

// Add elements to DOM
div.appendChild(button);
body.appendChild(div);

// animation when button is pressed
button.addEventListener('mousedown', () => {
  button.style.boxShadow = '0 0vh 0 0 #a41818';
  button.style.transform = 'translateY(1vh)';
});

// Start launch procedure
button.addEventListener('click', () => {
  button.innerHTML = 3;
  button.style.borderColor = 'rgba(255,255,255,0)';

  window.setTimeout(() => {
    button.innerHTML = 2;
  }, 1000);

  window.setTimeout(() => {
    button.innerHTML = 1;
  }, 2000);

  window.setTimeout(() => {
    button.innerHTML = 0;
  }, 3000);

  // LAUNCH!
  window.setTimeout(() => {
    div.remove();
    app.style.transition = 'all 2s ease-in-out';
    app.style.transform = 'scale(1) rotate(0deg)';
  }, 4000);
});
