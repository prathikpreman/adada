function toggleMenu(element) {
  const content = element.nextElementSibling;
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "grid"; // Show the menu group
  } else {
    content.style.display = "none"; // Hide the menu group
  }
  element.classList.toggle("active"); // Toggle active class for styling
}


function toggleVegMenu() {
  const isVegOnly = document.getElementById('veg-toggle-checkbox').checked;
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    const vegIcon = item.querySelector('img[src="img/veg.png"]');
    if (isVegOnly) {
      // If veg-only is checked, hide non-veg items
      if (!vegIcon) {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex'; // Show veg items
      }
    } else {
      // Show all items if veg-only is not checked
      item.style.display = 'flex';
    }
  });
}


 
  
