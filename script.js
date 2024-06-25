let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let elements = document.querySelectorAll("a, i");
let nav = document.querySelector("nav");
let messagebox = document.querySelector(".message-box");
let option = document.querySelector(".option-i");
let resnav = document.querySelector(".res-nav");
let bar = document.querySelector(".bar");
let closebar = document.querySelector(".close-bar");
let option2 = document.querySelector(".option2-i");
let messagebox2 = document.querySelector(".msg-box2");
let isOn = false;

const updateDisplay = () => {
  if (isOn) {
    body.style.background = "black";
    mode.style.right = "0"; // Added quotes for the value
    mode.style.transition = " all ease 0.5s";
    mode.style.left = ""; // Clear the left style
    elements.forEach((element) => {
      element.style.color = "white";
    });
    nav.style.background = "transparent";
    nav.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.5)";
  } else {
    body.style.background = "white";
    mode.style.left = "0"; // Added quotes for the value
    mode.style.right = ""; // Clear the right style
    elements.forEach((element) => {
      element.style.color = "blue";
    });
    nav.style.background = ""; // Reset background color if needed
    nav.style.boxShadow = ""; // Reset box shadow if needed
  }
};

// Add event listener to the mode button to toggle the state
mode.addEventListener("click", () => {
  isOn = !isOn; // Toggle the state
  updateDisplay();
});

// Initialize the display
updateDisplay();

// Apply rotation on mouse enter

let click = 0

option.addEventListener("click", () => {
  if(click == 0){
    messagebox.style.display = "inline-block";
    option.style.transform = "rotate(180deg)";
    click = 1;
  }else{
    messagebox.style.display = "none";
    option.style.transform = "rotate(0deg)";
    click = 0;
  }
});

let click2 = 0

option2.addEventListener("click", () => {
  if(click2 == 0){
    messagebox2.style.display = "inline-block";
    option2.style.transform = "rotate(180deg)";
    click2 = 1;
  }else{
    messagebox2.style.display = "none";
    option2.style.transform = "rotate(0deg)";
    click2 = 0;
  }
});

bar.addEventListener('click', () => {
  resnav.style.right = 0;
      resnav.style.display = "inline-block"
      bar.style.display = "none";
      closebar.style.display = "inline"
});

closebar.addEventListener('click', () => {
   resnav.style.display = "none"
   closebar.style.display = "none"
   bar.style.display = "inline"
})