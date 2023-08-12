/*
Author : Mohit Jangid
Follow me on linkedin for more like this...
linkedin : https://www.linkedin.com/in/mohit487/

*/ 


const menuItems = document.querySelectorAll('.nav-link-menus > a');
const hamburger = document.querySelector(".hamburger-menu-container");

function handleMenuItemClick(event) {
    // Remove 'active' class from all menu items
    menuItems.forEach(item => {
      item.classList.toggle('active');
    });

    // Add 'active' class to the clicked menu item
    // event.target.classList.add('active');
  }
  
  // Add click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', handleMenuItemClick);
  });
  
// Event on hamburger menus added
hamburger.addEventListener("click", mobileMenu);

// functions 
function mobileMenu() {
    hamburger.classList.toggle("active");
};

// to close hamburger menu again

const navLink = document.querySelectorAll(".nav-link-menus > a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
}



// Download my resume 

const downloadButton = document.getElementById('downloadResume');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './Resume.pdf';
  link.download = 'resume.pdf';
  link.click();
});
