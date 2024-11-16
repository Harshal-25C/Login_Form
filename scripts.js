// Select the main container element
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');//Select the login link.
const registerLink = document.querySelector('.register-link');//Select the register link.
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Add event listener to the "Register" link
// When clicked, adds the 'active' class to the wrapper for showing the register form
registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});

// Add event listener to the "Login" link...
// When clicked, removes the 'active' class from the wrapper for showing the login form.
loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});

// Add event listener to the popup trigger Button...
// When clicked, adds the 'active-popup' class to the wrapper to display the popup.
btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
}
);
// Add event listener to the popup close icon...
// When clicked, removes the 'active-popup' class to hide the popup.
iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});