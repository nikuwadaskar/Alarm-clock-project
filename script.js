let alert1 = true;
let tring = false;
let both = false;

var timeArr = [];

// selecting what type of alert you want
function handleChange(e) {
  let value = e.target.value;

  if (value == "tring") {
    alert1 = false;
    tring = true;
  }
}

// stting alarm time in array

function setalarm() {
  var time = document.getElementById("time").value;
  addQueue(time);
}

function addQueue(time) {
  timeArr.push(time);
}

// interval for cnstant update in time and matching if current time is equal to alarm time
// if yes then call alert function

let currenttime = document.getElementsByTagName("h1");

let interval = setInterval(() => {
  let date = new Date();
  currenttime[0].innerHTML = date.toLocaleTimeString("EN-IN").toUpperCase(); //this line will make cuurent time visible in h1 tag
  for (var k = 0; k <= timeArr.length; k++) {
    if (
      timeArr[k] ==
      date.toLocaleTimeString("en-IN", {
        hour12: false,
      })
    ) {
      showAlert();
    }
  }
}, 1000);

// chacking what type  alert you want

function showAlert() {
  if (tring) {
    playme(true);
  } else {
    alert("time has come");
  }
}

// if audio then it will active play function
var audio = new Audio("/assets/tring.mp3");
function playme() {
  audio.play();
}

// when you press stop button it actives pause function and it will stop playing
function pauseme() {
  audio.pause();
}

// now using add alarm function we'll create a paragraph where alarm time and some text will be written

var i = 1;
var m = 1;

function addalarm() {
  //  timeString12hr is use for converting 24 hour formate to 12 hour formate
  var timeString12hr = new Date(
    "1970-01-01T" + time.value + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  let tag = document.createElement("p");
  tag.id = "p" + i;

  tag.setAttribute("class", "btn-grad-three animate__animated animate__zoomIn");
  tag.setAttribute("data-value", time.value);

  i++;

  let text = document.createTextNode("Alarm Set For : " + timeString12hr);

  tag.appendChild(text);
  let element = document.getElementById("new");
  element.appendChild(tag);
}

// using bellow fucntion we'll add trash or delete button to the above created text

function addtrash() {
  let tag = document.createElement("button");
  tag.id = "span" + m;

  tag.setAttribute("value", "p" + m);
  tag.setAttribute("onclick", "removealaram(value),removespan(id)");
  tag.innerHTML = "Delete";

  var trash = document.getElementById("span" + m);

  tag.setAttribute(
    "class",
    " btn-grad-two animate__animated animate__zoomIn red"
  );
  m++;
  let element = document.getElementById("new");
  element.appendChild(tag);
}

//below function will actually remove paragraph tag text from the html and also that time from th arrye of alarm's

function removealaram(id) {
  let element = document.getElementById(id);
  element.setAttribute("class", " animate__animated animate__zoomOut");
  let currAralrm = element.getAttribute("data-value");
  setTimeout(function () {
    element.remove();
  }, 500);

  for (let j = 0; j <= timeArr.length; j++) {
    if (timeArr[j] == currAralrm) {
      timeArr.splice(j, 1);
    }
  }
}

// this function will remove the trash button which was created to remove paragraph tag
function removespan(id) {
  let element = document.getElementById(id);
  element.setAttribute("class", " animate__animated animate__zoomOut");
  setTimeout(function () {
    element.remove();
  }, 500);
}
