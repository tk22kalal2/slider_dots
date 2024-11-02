// Select all the buttons with the class 'read-more-btn'
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Add a click event listener for each button
readMoreButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const contentWrapper = this.previousElementSibling; // Select the previous sibling which is the content wrapper
    
    // Toggle the 'expanded' class on the content wrapper
    if (contentWrapper.classList.contains('expanded')) {
      contentWrapper.classList.remove('expanded'); // Collapse content
      this.textContent = 'Read More...'; // Change button text to 'Read More'
    } else {
      contentWrapper.classList.add('expanded'); // Expand content
      this.textContent = 'Show Less'; // Change button text to 'Show Less'
    }
  });
});
