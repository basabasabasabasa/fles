const exitButton = document.querySelector('.exit_Button')
const minimizeButton = document.querySelector('.minimize_Button')
const window_View = document.querySelector('.main_Window')
const about_Me = document.querySelector('.about_Me')
const contact_Me = document.querySelector('.contact_Me')
const about_Clickable = document.querySelector('.about_Clickable')
const contact_Clickable = document.querySelector('.contact_Clickable')
exitButton.addEventListener('click', exitFunction);
minimizeButton.addEventListener('click', exitFunction);
about_Clickable.addEventListener('click', windowChangeAbout)
contact_Clickable.addEventListener('click', windowChangeContact);
function exitFunction() {
  if (window_View) {
    window_View.style.display = 'none';
  }
}
function windowChangeAbout() {
  if (contact_Me.style.display = 'flex') {
    about_Me.style.display = 'flex';
    contact_Me.style.display = 'none';
  }
}
function windowChangeContact() {
  if (about_Me.style.display = 'flex') {
    about_Me.style.display = 'none';
    contact_Me.style.display = 'flex';
  }
}