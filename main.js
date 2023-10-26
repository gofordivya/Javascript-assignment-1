// Put DOM elements into variables
const contact = document.querySelector("#contact");
const firstNameInput = document.querySelector("#firstname");
const lasttNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const msg = document.querySelector(".formMessage");
const btn = document.querySelector("#submit");
const userList = document.querySelector("#users");

// Listen for form submit
contact.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (firstNameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${firstNameInput.value} ${lasttNameInput.value} ${emailInput.value} ${messageInput.value}`
      )
    );
    userList.appendChild(li);

    firstNameInput.value = "";
    lasttNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Sample skills data
var skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "WordPress",
  "PHP",
  "Photoshop",
  "Git",
  "Responsive Design",
];

var skillList = document.getElementById("skillList");
// Function to add skills with animation
function addSkillsWithAnimation() {
  for (var i = 0; i < skills.length; i++) {
    (function (i) {
      setTimeout(function () {
        var skill = skills[i];
        var listItem = document.createElement("li");
        listItem.textContent = skill;
        listItem.style.opacity = "0";
        skillList.appendChild(listItem);
        setTimeout(function () {
          listItem.style.opacity = "1";
        }, 300 * i);
      }, 300 * i);
    })(i);
  }
}

// Add skills with animation when the page loads
addSkillsWithAnimation();

function add() {}
