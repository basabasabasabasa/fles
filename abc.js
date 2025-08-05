const exitButton = document.querySelector('.exit_Button')
const minimizeButton = document.querySelector('.minimize_Button')
const window_View = document.querySelector('#main_Window')
const about_Me = document.querySelector('.about_Me')
const contact_Me = document.querySelector('.contact_Me')
const about_Clickable = document.querySelector('.about_Clickable')
const contact_Clickable = document.querySelector('.contact_Clickable')
dragWindow(document.getElementById('main_Window'))
dragForm(document.getElementById('form'))
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
function dragForm(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "window_Border")) {
    document.getElementById(elmnt.id + "window_Border").onmousedown = dragDown;
  } else {
    elmnt.onmousedown = dragDown;
  }
  function dragDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDrag;
  document.onmousemove = dragElement;
  }
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; 
  }
  function closeDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function dragWindow(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header_Bar")) {
    document.getElementById(elmnt.id + "header_Bar").onmousedown = dragDown;
  } else {
    elmnt.onmousedown = dragDown;
  }
  function dragDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDrag;
  document.onmousemove = dragElement;
  }
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; 
  }
  function closeDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}