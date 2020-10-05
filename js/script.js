var arr = [];
function next() {
  execute();
  var speed = document.getElementById("speed").selectedIndex;
  //  var strUser = e.options[].selectedIndex;
  //  alert();
  document.getElementById("step-tracker").style.visibility = "visible";
  var start, mid, last;

  start = 1;
  var element = document.getElementById("enter").value;
  last = parseInt(document.getElementById("length").value);
  if (speed == 1) {
    var time = 4000;
  } else if (speed == 2) {
    var time = 6000;
  } else {
    var time = 2000;
  }
  var start_time = 1000;
  var counter = 0;
  var start_p = 0;
  var last_p = 0;
  var bb = 0;
  for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
      var mm = (start + last) / 2;

      if (mm == 1.5) {
        mid = 1;
      } else {
        mid = Math.round(mm);
      }
      if (start_p != 0) {
        document.getElementById("r" + start_p).style.backgroundColor =
          "#444444";
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
        document.getElementById("r" + counter).style.backgroundColor =
          "#444444";
      }
      $("#r" + counter)
        .find("div")
        .first()
        .remove();

      counter = mid;
      document.getElementById("r" + mid).style.backgroundColor = "#ffd000";
      $("#r" + mid).append(
        '<div  class="high">' +
          document.getElementById("enter").value +
          " </div>"
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

        if (mid == 0) {
          document.getElementById("label1").innerHTML =
            "Item Found at index :" + mid;
        } else {
          document.getElementById("label1").innerHTML =
            "Item Found at index :" + (mid - 1);
        }

        clearInterval(interval);
      } else if (parseInt(arr[mid - 1]) < element && bb == 0) {
        //right

        document.getElementById("explanation").style.color = "red";
        document.getElementById("explanation").innerHTML =
          "Element " +
          element +
          " is greater than mid element <br/> Moving right and neglacting the left half part of array. ";
        start_p = start;
        start = mid + 1;
      } else if (parseInt(arr[mid - 1]) > element && bb == 0) {
        //left
        // document.getElementById("explanation").style.color = "red";
        document.getElementById("label1").innerHTML =
          "Element " +
          element +
          " is less than mid element <br/> Moving left and neglacting the right half part of array. ";
        last_p = last;
        last = mid - 1;
      }

      if (
        start >= last ||
        mid == 1 ||
        mid == parseInt(document.getElementById("length").value)
      ) {
        document.getElementById("label1").style.color = "red";
        document.getElementById("label1").innerHTML =
          "Sorry  Item :  " + element + " not found in the given array  ";
        bb++;

        clearInterval(interval);
      }
    }, start_time);

    start_time = time + start_time;
  }
}

//array print

function execute() {
  ll = parseInt(document.getElementById("length").value);
  var str = document.getElementById("array").value;
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
var modal = document.getElementById("popup");

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

    //displaying the input tab
    var input = document.getElementById("input");
    input.className = input.className.replace(/\bhide\b/g, "show");

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
  } else {
    reset();
  }
}
