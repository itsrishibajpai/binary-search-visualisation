var arr = [];
var start, mid, last;
var counter = 0;
var start_p = 0;
var last_p = 0;
var bb = 0;
var element = 0;
var i = 0;
start = 1;
//var last = parseInt(document.getElementById("length").value);
function next() {
  if (counter == 0) {
    execute();
  }
  //var speed = document.getElementById("speed").selectedIndex;
  //  var strUser = e.options[].selectedIndex;
  //  alert();
  document.getElementById("step-tracker").style.visibility = "visible";

  var element = document.getElementById("enter").value;

  //if (speed == 1) {
  //var time = 4000;
  //} else if (speed == 2) {
  //var time = 6000;
  //} else {
  // var time = 2000;
  //}
  //var start_time = 1000;

  //for (var i = 0; i < arr.length; i++) {
  //setTimeout(() => {

  if (bb == 0) {
    var mm = (start + last) / 2;

    if (mm == 1.5) {
      mid = 1;
    } else {
      mid = Math.round(mm);
    }
    if (start_p != 0) {
      document.getElementById("r" + start_p).style.backgroundColor = "#444444";
    }
    if (last_p != 0) {
      document.getElementById("r" + last_p).style.backgroundColor = "#444444";
    }
    document.getElementById("r" + start).style.backgroundColor = "#00b92b";
    document.getElementById("r" + mid).style.backgroundColor = "#ffd000";
    document.getElementById("r" + last).style.backgroundColor = "#ff0730";
    document.getElementById("start-val").innerHTML = "  " + (start - 1);
    document.getElementById("mid").innerHTML = "  " + (mid - 1);
    document.getElementById("last").innerHTML = "  " + (last - 1);
    //  alert(counter);

    if (counter != 0) {
      document.getElementById("r" + counter).style.backgroundColor = "#444444";
    }
    $("#r" + counter)
      .find("div")
      .first()
      .remove();

    counter = mid;
    document.getElementById("r" + mid).style.backgroundColor = "#ffd000";
    $("#r" + mid).append(
      '<div  class="high">' + document.getElementById("enter").value + " </div>"
    );
    // op.innerHTML = "start" + start + "Mid" + mid + "lst=" + last;
    //  alert(arr[mid - 1]);
    document.getElementById("explanation").style.visibility = "hidden";
    if (arr[mid - 1] == element) {
      $("#r" + counter)
        .find("div")
        .first()
        .remove();
      //    document.getElementById("output").innerHTML = start + mid + last;
      var elec = document.getElementById("enter").value;
      $("#r" + mid).append('<div  class="high">' + element + "  </div>");
      document.getElementById("label1").style.color = "green";
      document.getElementById("label1").innerHTML =
        "Item Found at index :" + (mid - 1);
      document.getElementById("explanation").style.visibility = "visible";
      document.getElementById("explanation").innerHTML =
        "<center>Step 6: EXIT</center>";
      start = last + 1;
      bb = 1;
      clearInterval(interval);
    } else if (parseInt(arr[mid - 1]) < element && bb == 0) {
      //right

      document.getElementById("explanation").style.color = "red";
      document.getElementById("explanation").style.visibility = "visible";
      document.getElementById(
        "explanation"
      ).innerHTML = `<center> Step 4: IF A[MID] = VAL <br/>
    SET POS = MID <br/>
    PRINT POS<br/>
    Go to Step 6<br/>
    ELSE IF A[MID] > VAL<br/>
    SET END = MID - 1<br/>
    ELSE<br/>
    SET BEG = MID + 1 <br/>
    [END OF IF] <br/>
    [END OF LOOP]</center>`;
      start_p = start;
      start = mid + 1;
    } else if (parseInt(arr[mid - 1]) > element && bb == 0) {
      //left
      // document.getElementById("explanation").style.color = "red";
      document.getElementById("explanation").style.visibility = "visible";
      document.getElementById(
        "explanation"
      ).innerHTML = `<center>Step 4: IF A[MID] = VAL <br/>
    SET POS = MID <br/>
    PRINT POS<br/>
    Go to Step 6<br/>
    ELSE IF A[MID] > VAL<br/>
    SET END = MID - 1<br/>
    ELSE<br/>
    SET BEG = MID + 1 <br/>
    [END OF IF] <br/>
    [END OF LOOP]</center>`;
      last_p = last;
      last = mid - 1;
    }

    if (start > last) {
      document.getElementById("label1").style.color = "red";
      document.getElementById("label1").innerHTML =
        "Sorry  Item :  " + element + " not found in the given array  ";
      bb++;

      clearInterval(interval);
    }
  }
  // }, start_time);

  //start_time = time + start_time;
  //}
}

//array print

function execute() {
  simulatorArea.scrollIntoView(true);
  ll = parseInt(document.getElementById("length").value);
  last = parseInt(document.getElementById("length").value);
  var str = document.getElementById("array").value;
  element = parseInt(document.getElementById("enter").value);
  arr = str.split(",");
  arr.sort((a, b) => a - b);

  $("#target").empty();
  $("#target").append("<br/></br></br>");
  for (var i = 0; i < ll; i++) {
    $("#target").append(
      '<div id="r' +
        (i + 1) +
        '" class="ansbox"> <p class="index">' +
        i +
        "</p>  " +
        arr[i] +
        "</div>"
    );
  }
}

var demarr = [1, 3, 4, 5, 7, 12, 45, 67, 89, 90, 94, 95, 98, 97, 99];
var st = [0, 0];
var mi = [7, 3];
var las = [14, 6];
var cc = 0;
var step_count = 0;
function forward() {
  if (step_count == 0) {
    document.getElementById("r1").style.backgroundColor = "#00b92b";

    document.getElementById("r15").style.backgroundColor = "#ff0730";

    document.getElementById("r8").style.backgroundColor = "#ffd000";
    $("#r8").append('<div  class="high">' + 5 + " </div>");

    document.getElementById("explanation").innerHTML =
      "As we can see our mid element 67 is greater than the element 5 which we are trying to search . <br/> So we will neglect the right half part of the array beacuse it conatins all the element greater than mid element which is 67 at this moment ";
    document.getElementById("start-val").innerHTML = " " + st[step_count];
    document.getElementById("mid").innerHTML = " " + mi[step_count];
    document.getElementById("last").innerHTML = " " + las[step_count];
    step_count++;
  } else if (step_count == 1) {
    document.getElementById("r15").style.backgroundColor = "grey";
    document.getElementById("r8").style.backgroundColor = " grey";
    document.getElementById("r7").style.backgroundColor = "#ff0730";
    $("#r8").find("div").first().remove();
    document.getElementById("r4").style.backgroundColor = "#ffd000";
    $("#r4").append('<div  class="high">' + 5 + " </div>");
    document.getElementById("explanation").innerHTML = `
    Now at this step : last will become mid -1 , <br/>  Last = 6 . <br/>  Now again we will calculate using formula :  <br/> mid =   (start + last) / 2 <br/>
    (0 + 6 ) / 2 = 3 

    Now we will check if the mid element located at 3 which is 5 equals to the element which we are trying to find .
    The element at current mid position 5 is becomes equal to the element which we are trying to find .
  As we have found the required element. Now we will exit the loop; 

  `;
    document.getElementById("start-val").innerHTML = " " + st[step_count];
    document.getElementById("mid").innerHTML = " " + mi[step_count];
    document.getElementById("last").innerHTML = " " + las[step_count];

    step_count++;
  } else if (step_count == 9) {
    document.getElementById("r8").style.backgroundColor = "gray";
    document.getElementById("r5").style.backgroundColor = "#ff0730";
    $("#r5").find("div").first().remove();
    document.getElementById("r3").style.backgroundColor = "#ffd000";
    $("#r3").append('<div  class="high">' + 4 + " </div>");
    document.getElementById("explanation").innerHTML = `
    Now again last will become mid , <br/> which is last = 5 . <br/>  Now again we will calculate using formula :  <br/> mid =   (start + last) / 2 <br/>
    <br/> (1 + 5) / 2 = 3 <brs/> . Again we will check the mid element at position 3 against the element which we are trying to search.
    Now the element at position 3 which is 4 becomes equal to the element which we are trying to search.Hence we will exit the loop now`;
    document.getElementById("start-val").innerHTML = " " + st[step_count];
    document.getElementById("mid").innerHTML = " " + mi[step_count];
    document.getElementById("last").innerHTML = " " + las[step_count];
    step_count++;
    document.getElementById("afterloop").hidden = false;
  } else if (step_count == 2) {
    input();
  }
}
function backward() {
  if (step_count == 1) {
    document.getElementById("r1").style.backgroundColor = "#444";
    document.getElementById("r15").style.backgroundColor = "#444";
    document.getElementById("r8").style.backgroundColor = "#444";
    $("#r8").find("div").first().remove();
    document.getElementById("explanation").innerHTML =
      "For a binary search to work, it is mandatory for the target array to be sorted.The following is our sorted array and let us assume that we need to search the location of value 5 using binary search.First, we shall determine half of the array by using this formula <br/><br/> mid =   (start + last) / 2 <br/> <br/> Here it is, <br/> <br/> (0 + 14 ) / 2 = 7 <br/><br/> So, 7 is the mid of the array";

    document.getElementById("start-val").innerHTML = "0";
    document.getElementById("mid").innerHTML = "7";
    document.getElementById("last").innerHTML = "14";
    step_count--;
  } else if (step_count == 2) {
    document.getElementById("r15").style.backgroundColor = "#ff0730";
    $("#r4").find("div").first().remove();
    document.getElementById("r4").style.backgroundColor = "#444";
    document.getElementById("r7").style.backgroundColor = "#444";
    document.getElementById("r8").style.backgroundColor = "#ffd000";
    $("#r8").append('<div  class="high">' + 5 + " </div>");
    document.getElementById("explanation").innerHTML =
      "As we can see our mid element 67 is greater than the element 5 which we are trying to search . <br/> So we will neglect the right half part of the array beacuse it conatins all the element greater than mid element which is 67 at this moment ";

    document.getElementById("start-val").innerHTML = " " + st[0];
    document.getElementById("mid").innerHTML = " " + mi[0];
    document.getElementById("last").innerHTML = " " + las[0];
    step_count--;
  }
}
function manual() {
  document.getElementById("step-tracker").style.visibility = "hidden";
  document.getElementById("next").hidden = true;
  document.getElementById("afterloop").hidden = true;
  document.getElementById("prev").hidden = true;
  document.getElementById("test").style.display = "block";
  $("#target").empty();
  $("#explanation").empty();
  $("#start-val").empty();
  $("#mid").empty();
  $("#last").empty();
}
function init() {
  simulatorArea.scrollIntoView(true);
  popup.style.display = "none";
  document.getElementById("step-tracker").style.visibility = "visible";
  ll = 15;
  document.getElementById("explanation").innerHTML =
    "For a binary search to work, it is mandatory for the target array to be sorted.The following is our sorted array and let us assume that we need to search the location of value 5 using binary search.First, we shall determine half of the array by using this formula <br/><br/> mid =   (start + last) / 2 <br/> <br/> Here it is, <br/> <br/> (0 + 14 ) / 2 = 7 <br/><br/> So, 7 is the mid of the array";

  document.getElementById("start-val").innerHTML = " 0";
  document.getElementById("mid").innerHTML = "7";
  document.getElementById("last").innerHTML = "14";
  document.getElementById("start").hidden = true;
  // making prev and next buttons visible
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  prev.className = prev.className.replace(/\bhide\b/g, "show");
  next.className = next.className.replace(/\bhide\b/g, "show");
  $("#target").empty();
  $("#target").append("<br/></br></br>");
  for (var i = 0; i < ll; i++) {
    $("#target").append(
      '<div id="r' +
        (i + 1) +
        '" class="ansbox"> <p class="index">' +
        i +
        "</p>  " +
        demarr[i] +
        "</div>"
    );
  }
}

//bottom code

// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("launch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// buttons functionality
// start() function to start predefined simulation
function start() {
  // hiding the start button
  var start = document.getElementById("start");
  start.className = start.className.replace(/\bshow\b/g, "hide");
  // making prev and next buttons visible
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  prev.className = prev.className.replace(/\bhide\b/g, "show");
  next.className = next.className.replace(/\bhide\b/g, "show");
  // hiding user input tab (if displayed at that moment)
  var input = document.getElementById("input");
  input.className = input.className.replace(/\bshow\b/g, "hide");
}

// reset() function to reset the simulator
function reset() {
  window.location.reload();
  return false;
}

// input() function to show input tab and take user input
function input() {
  // displaying confirm box
  var choice = confirm(
    "Have you Learnt the concept and want to do it yourself?"
  );
  if (choice == true) {
    //clearing the previous content
    var animArea = document.getElementById("target");
    animArea.innerHTML = "";
    var explanation = document.getElementById("explanation");
    explanation.innerHTML = "";

    //hiding prev and next
    document.getElementById("prev").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("h1").hidden = false;
    document.getElementById("h2").hidden = false;
    popup.style.display = "none";
    document.getElementById("input").scrollIntoView();
    //displaying the input tab
    var input = document.getElementById("input");
    input.className = input.className.replace(/\bhide\b/g, "show");
    input.scrollIntoView();
    // hiding the start button
    var start = document.getElementById("start");
    start.className = start.className.replace(/\bshow\b/g, "hide");

    // making prev and next buttons visible
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    prev.className = prev.className.replace(/\bshow\b/g, "hide");
    next.className = next.className.replace(/\bshow\b/g, "hide");

    //clearing all fields
    $("#start-val").empty();
    $("#mid").empty();
    $("#last").empty();

    //document.getElementById(
    //"label1"
    //).innerHTML = `[INITIALIZE] SET BEG = lower_bound
    //END = upper_bound, POS = - 1`;

    document.getElementById("explanation").innerHTML = `
    Step 1: [INITIALIZE] SET BEG = lower_bound   <br/>  <br/>
    END = upper_bound, POS = - 1   <br/>  <br/>
    Step 2: Repeat Steps 3 and 4 while BEG <=END  <br/>  <br/>
    Step 3: SET MID = (BEG + END)/2  <br/>  <br/>
    Step 4: IF A[MID] = VAL  <br/>  <br/>
    SET POS = MID  <br/>  <br/>
    PRINT POS  <br/>  <br/>
    Go to Step 6  <br/>  <br/>
    ELSE IF A[MID] > VAL  <br/>  <br/>
    SET END = MID - 1  <br/>  <br/>
    ELSE   <br/>  <br/>
    SET BEG = MID + 1    <br/><br/>
    [END OF IF]  <br/>  <br/>
    [END OF LOOP]  <br/>  <br/>
    Step 5: IF POS = -1  <br/>  <br/>
    PRINT "VALUE IS NOT PRESENT IN THE ARRAY"   <br/> <br/>
    [END OF IF] <br/>  <br/>
    Step 6: EXIT <br/>  <br/>
`;
  } else {
    reset();
  }
}

/* ***********************************************
 **************** G A M E   J S ****************
 *********************************************** */

//initializing all variables globally
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var optionE = document.getElementById("option-e");
var optionF = document.getElementById("option-f");
var optionG = document.getElementById("option-g");
var optionH = document.getElementById("option-h");

//places to target
var park = document.getElementById("park");
var temple = document.getElementById("temple");
var school = document.getElementById("school");
var hospital = document.getElementById("hospital");
var bus = document.getElementById("bus");
var railway = document.getElementById("railway");
var shopping = document.getElementById("shopping");
var other = document.getElementById("other");

var label = document.getElementById("status");

//getting the playground
var playground = document.getElementById("gameboard");
var simulatorArea = document.getElementById("simulator-area");

//get the cop
var cop = document.getElementById("cop");

// Get the modal
var gamePopup = document.getElementById("gamePopup");

// Get the button that opens the modal
var gameBtn = document.getElementById("gameLaunch");

// Get the <span> element that closes the modal
var gameClose = document.getElementsByClassName("gameClose")[0];

// When the user clicks the button, open the modal
gameBtn.onclick = function () {
  cop.style.visibility = "hidden";
  gamePopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
gameClose.onclick = function () {
  gamePopup.style.display = "none";
  cop.style.visibility = "visible";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == gamePopup) {
    popup.style.display = "none";
    cop.style.visibility = "visible";
  }
};

// buttons functionality
function drop() {
  document.getElementById("bomb").classList.remove("activeblink");
  // getting document wrapper
  var docWrapper = document.querySelector(".wrapper");
  // getting popup
  var dropMenu = document.getElementById("dropmenu");
  // getting close buttons for all Modals
  var closemenu = document.getElementsByClassName("close-menu")[0];

  //displaying the popup
  gamePopup.style.display = "none";
  dropMenu.style.display = "block";
  docWrapper.classList.add("blur");

  //closing the popup
  closemenu.onclick = function () {
    dropMenu.style.display = "none";
    gamePopup.style.display = "none";
    docWrapper.classList.remove("blur");
    cop.style.visibility = "visible";
  };

  function optionSelected() {
    dropMenu.style.display = "none";
    gamePopup.style.display = "none";
    docWrapper.classList.remove("blur");
    cop.style.visibility = "visible";
    playground.scrollIntoView();
  }

  //getting inputs
  //selecting option 1
  optionA.onclick = function () {
    setTimeout(function () {
      optionSelected();
      park.classList.add("highlight");
      cop.classList.add("park");
      label.classList.add("statusOne");
    }, 300);
  };

  //selecting option 2
  optionB.onclick = function () {
    setTimeout(function () {
      optionSelected();
      school.classList.add("highlight");
      cop.classList.add("school");
      label.classList.add("statusTwo");
    }, 300);
  };

  //selecting option 3
  optionC.onclick = function () {
    setTimeout(function () {
      optionSelected();
      temple.classList.add("highlight");
      cop.classList.add("temple");
      label.classList.add("statusThree");
    }, 300);
  };

  //selecting option 4
  optionD.onclick = function () {
    setTimeout(function () {
      hospital.classList.add("highlight");
      optionSelected();
      cop.classList.add("hospital");
      label.classList.add("statusFour");
    }, 300);
  };

  //selecting option 5
  optionE.onclick = function () {
    setTimeout(function () {
      shopping.classList.add("highlight");
      optionSelected();
      cop.classList.add("mall");
      label.classList.add("statusFive");
    }, 300);
  };

  //selecting option 6
  optionF.onclick = function () {
    setTimeout(function () {
      bus.classList.add("highlight");
      optionSelected();
      cop.classList.add("bus");
      label.classList.add("statusSix");
    }, 300);
  };

  //selecting option 7
  optionG.onclick = function () {
    setTimeout(function () {
      railway.classList.add("highlight");
      optionSelected();
      cop.classList.add("railway");
      label.classList.add("statusSeven");
    }, 300);
  };

  //selecting option 8
  optionH.onclick = function () {
    setTimeout(function () {
      optionSelected();
      cop.classList.add("notfound");
      label.classList.add("statusEight");
    }, 300);
  };
}

// Improvements to embed both Simulation in single page

function loadSimulation() {
  //hiding visualisation
  gameBtn.style.display = "none";
  gamePopup.style.display = "none";
  playground.style.display = "none";
  //showing simulation
  btn.style.display = "block";
  simulatorArea.style.display = "block";
}

function runVisualisation() {
  //hiding simulation
  btn.style.display = "none";
  popup.style.display = "none";
  simulatorArea.style.display = "none";
  //showing visulation
  gameBtn.style.display = "block";
  playground.style.display = "block";
  playground.scrollIntoView(true);
}
