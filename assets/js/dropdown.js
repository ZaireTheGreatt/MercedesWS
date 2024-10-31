// Get the dropdown element
const dropdown = document.querySelector('.navbar-item.has-dropdown.is-hoverable');

// Add event listener to the dropdown element
dropdown.addEventListener('mouseover', () => {
  // Show the dropdown content
  dropdown.querySelector('.dropdown-content').style.display = 'block';
});

// Add event listener to the dropdown element
dropdown.addEventListener('mouseout', () => {
  // Hide the dropdown content
  dropdown.querySelector('.dropdown-content').style.display = 'none';
});