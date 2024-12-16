// Select the paragraph by its ID
const paragraph = document.getElementById('paragraph');
  
// Select the button by its ID
const button = document.getElementById('changeText');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Change the paragraph text
  paragraph.textContent = "The paragraph text has been changed!";

  // Optionally change the paragraph style
  paragraph.style.color = 'blue';
});