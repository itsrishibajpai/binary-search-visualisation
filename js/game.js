//initializing all variables globally
var optionA = document.getElementById('option-a');
var optionB = document.getElementById('option-b');
var optionC = document.getElementById('option-c');
var optionD = document.getElementById('option-d');
var optionE = document.getElementById('option-e');
var optionF = document.getElementById('option-f');
var optionG = document.getElementById('option-g');
var optionH = document.getElementById('option-h');

//places to target
var park = document.getElementById('park');
var temple = document.getElementById('temple');
var school = document.getElementById('school');
var hospital = document.getElementById('hospital');
var bus = document.getElementById('bus');
var railway = document.getElementById('railway');
var shopping = document.getElementById('shopping');
var other = document.getElementById('other');

var label = document.getElementById('status');

//getting the playground
var playground =  document.getElementById('gameboard');

//get the cop
var cop =  document.getElementById('cop');

// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("launch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  cop.style.visibility = "hidden";
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popup.style.display = "none";
  cop.style.visibility = "visible";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
    cop.style.visibility = "visible";
  }
};

// buttons functionality
function drop(){
  document.getElementById('bomb').classList.remove('activeblink');
  // getting document wrapper
  var docWrapper = document.querySelector('.wrapper');
  // getting popup
  var dropMenu = document.getElementById("dropmenu");
  // getting close buttons for all Modals
  var closemenu = document.getElementsByClassName("close-menu")[0];

  //displaying the popup
  popup.style.display = "none";
  dropMenu.style.display = "block";
  docWrapper.classList.add('blur');

  //closing the popup
  closemenu.onclick = function () {
    dropMenu.style.display = "none";
    popup.style.display = "none";
    docWrapper.classList.remove('blur');
    cop.style.visibility = "visible";
  };

  function optionSelected(){
    dropMenu.style.display = "none";
    popup.style.display = "none";
    docWrapper.classList.remove('blur');
    cop.style.visibility = "visible";
    playground.scrollIntoView();
  }

  //getting inputs
  //selecting option 1
  optionA.onclick = function() {
    setTimeout(function(){
      optionSelected();
      park.classList.add('highlight');
      cop.classList.add('park');
      label.classList.add('statusOne');
    }, 300);
  };

  //selecting option 2
  optionB.onclick = function() {
    setTimeout(function(){
      optionSelected();
      school.classList.add('highlight');
      cop.classList.add('school');
      label.classList.add('statusTwo');
    }, 300);
  };

  //selecting option 3
  optionC.onclick = function() {
    setTimeout(function(){
      optionSelected();
      temple.classList.add('highlight');
      cop.classList.add('temple');
      label.classList.add('statusThree');
    }, 300);
  };

  //selecting option 4
  optionD.onclick = function() {
    setTimeout(function(){
      hospital.classList.add('highlight');
      optionSelected();
      cop.classList.add('hospital');
      label.classList.add('statusFour');
    }, 300);
  };

  //selecting option 5
  optionE.onclick = function() {
    setTimeout(function(){
      shopping.classList.add('highlight');
      optionSelected();
      cop.classList.add('mall');
      label.classList.add('statusFive');
    }, 300);
  };

  //selecting option 6
  optionF.onclick = function() {
    setTimeout(function(){
      bus.classList.add('highlight');
      optionSelected();
      cop.classList.add('bus');
      label.classList.add('statusSix');
    }, 300);
  };

  //selecting option 7
  optionG.onclick = function() {
    setTimeout(function(){
      railway.classList.add('highlight');
      optionSelected();
      cop.classList.add('railway');
      label.classList.add('statusSeven');
    }, 300);
  };

  //selecting option 8
  optionH.onclick = function() {
    setTimeout(function(){
      optionSelected();
      cop.classList.add('notfound');
      label.classList.add('statusEight');
    }, 300);
  };

}
