let myForm = document.getElementById("myform");
let myInputs = document.querySelectorAll("input");
let btn = document.getElementById("btn");
let myTasks = document.getElementById("my-tasks");
let myIcon = document.getElementById("icon");
let myMenu = document.getElementById("menu");
let bgColor = document.getElementById("background");
let fontColor = document.getElementById("colors");
let menuOverLay = document.getElementById("menu-overlay");
//popup
function popup() {
  //get elements
  let popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "main-popup popup";
  let btn = document.createElement("button");
  btn.id = "btn";
  btn.className = "close-btn";
  btn.textContent = "Ok";
  let titleEl = document.createElement("h3");
  titleEl.className = "title popup";
  titleEl.textContent = "Hello Sir";
  let popupContent = document.createElement("p");
  popupContent.className = "content popup";
  popupContent.textContent = "Failed can't Be Empty";
  popup.append(btn, titleEl, popupContent);
  document.body.append(popup);
  // create and decleare  over lay in page
  let overLay = document.createElement("div");
  overLay.className = "over-lay";
  overLay.id = "over-lay";
  popup.before(overLay);
  //start time to appear message
  setTimeout(() => {
    popup.style.cssText = `z-index: 5; opacity: 1;`;
    if (localStorage.getItem("bgcolor") || localStorage.getItem("font-color")) {
      popup.style.cssText = `
    z-index: 5; 
    opacity: 1;
    background-color:${window.localStorage.getItem("bgcolor")} !important;
  color: ${window.localStorage.getItem("font-color")}`;
    }
    overLay.style.cssText = `z-index: 2; opacity: 1;`;
  }, 100);
  // set color
  if (
    window.localStorage.getItem("bgcolor") ||
    window.localStorage.getItem("font-color")
  ) {
    popup.style.cssText = `background-color:${window.localStorage.getItem(
      "bgcolor"
    )} !important`;
    popup.style.color = window.localStorage.getItem("font-color");
    btn.style.backgroundColor = window.localStorage.getItem("font-color");
    btn.style.color = window.localStorage.getItem("bgcolor");
  }
  // btn click to close message
  btn.addEventListener("click", function () {
    popup.style.cssText = ` z-index: -5; opacity: 0;`;
    overLay.style.cssText = ` z-index: -4; opacity: 0;`;
    //time to remove popup and over lay from page
    setTimeout(() => {
      popup.remove();
      overLay.remove();
    }, 1000);
  });
  // document click anywhaer to close message
  overLay.addEventListener("click", (e) => {
    if (!e.target.classList.contains("popup")) {
      popup.style.cssText = ` z-index: -5; opacity: 0;`;
      overLay.style.cssText = ` z-index: -4; opacity: 0;`;
      //time to remove popup and over lay from page
      setTimeout(() => {
        popup.remove();
        overLay.remove();
      }, 1000);
    }
  });
}
// start custom color
function setColor() {
  menuOverLay.addEventListener("click", (y) => {
    if (!y.target.classList.contains("")) {
      myMenu.classList.remove("active");
      menuOverLay.classList.remove("active");
    }
  });
  myIcon.addEventListener("click", () => {
    myMenu.classList.toggle("active");
    menuOverLay.classList.toggle("active");
  });
  bgColor.addEventListener("change", function () {
    document.querySelector("header").style.backgroundColor = bgColor.value;
    bgColor.style.backgroundColor = bgColor.value;
    fontColor.style.backgroundColor = bgColor.value;
    document.querySelectorAll(".task").forEach((el) => {
      el.style.backgroundColor = bgColor.value;
    });
    btn.style.backgroundColor = bgColor.value;
    document.querySelector("footer").style.backgroundColor = bgColor.value;
    window.localStorage.setItem("bgcolor", bgColor.value);
  });
  fontColor.addEventListener("change", function () {
    bgColor.style.color = fontColor.value;
    fontColor.style.color = fontColor.value;
    document.querySelector("header").style.color = fontColor.value;
    myIcon.style.borderColor = fontColor.value;
    document.querySelectorAll("#icon span").forEach((el) => {
      el.style.backgroundColor = fontColor.value;
    });
    document.querySelectorAll(".task div").forEach((el) => {
      el.style.color = fontColor.value;
    });
    btn.style.color = fontColor.value;
    document.querySelector("footer").style.color = fontColor.value;
    window.localStorage.setItem("font-color", fontColor.value);
  });
  //get color from local storage ==========
  if (
    window.localStorage.getItem("bgcolor") ||
    window.localStorage.getItem("font-color")
  ) {
    bgColor.value = window.localStorage.getItem("bgcolor");
    bgColor.style.cssText = `background-color :${window.localStorage.getItem(
      "bgcolor"
    )};
    color: ${window.localStorage.getItem("font-color")}`;
    fontColor.style.cssText = `background-color :${window.localStorage.getItem(
      "bgcolor"
    )};
    color: ${window.localStorage.getItem("font-color")}`;

    document.querySelector("header").style.backgroundColor =
      window.localStorage.getItem("bgcolor");
    btn.style.backgroundColor = window.localStorage.getItem("bgcolor");

    document.querySelectorAll(".task").forEach((el) => {
      el.style.backgroundColor = window.localStorage.getItem("bgcolor");
    });
    document.querySelector("footer").style.backgroundColor =
      window.localStorage.getItem("bgcolor");
    //font color
    fontColor.value = localStorage.getItem("font-color");
    myIcon.style.borderColor = localStorage.getItem("font-color");
    document.querySelectorAll("#icon span").forEach((el) => {
      el.style.backgroundColor = localStorage.getItem("font-color");
    });
    document.querySelector("header").style.color =
      localStorage.getItem("font-color");
    document.querySelectorAll(".task div").forEach((el) => {
      el.style.color = localStorage.getItem("font-color");
    });
    btn.style.color = localStorage.getItem("font-color");
    document.querySelector("footer").style.color =
      localStorage.getItem("font-color");
  }
};
//add tasks
window.onload = () => {
  myInputs[0].onfocus = function () {
    myInputs[0].style.outlineColor = window.localStorage.getItem("bgcolor");
  };
  myInputs[0].focus();
};
function addTasks() {
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //create task container
    let taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.style.backgroundColor = window.localStorage.getItem("bgcolor");
    // create task data
    let taskInfo = document.createElement("div");
    taskInfo.className = "task-info";
    taskInfo.textContent = myInputs[0].value;
    //delete button
    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    let delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.textContent = "delete";
    //edit button
    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "edit";
    btnContainer.append(editBtn, delBtn);
    //append ====================================
    if (myInputs[0].value !== "") {
      //append elements
      taskEl.append(taskInfo, btnContainer);
      myTasks.append(taskEl);
      //store to local storage
      window.localStorage.tasks = myTasks.innerHTML;
    } else {
      popup();
    }
    // end append ===========================================
    myInputs[0].value = "";
  });
}
// remove task
function removeTasks() {
  myTasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
      e.target.parentElement.parentElement.remove();
      window.localStorage.tasks = myTasks.innerHTML;
    }
  });
}
//edit tasks
function editTasks() {
  myTasks.addEventListener("click", (edit) => {
    if (edit.target.classList.contains("edit-btn")) {
      edit.target.parentElement.parentElement.firstElementChild.setAttribute(
        "contenteditable",
        "true"
      );
      edit.target.parentElement.parentElement.firstElementChild.focus();
      edit.target.parentElement.parentElement.firstElementChild.style.cssText = `background-color: #0075ff;
       color:#fff;`;
      let doneEdit = document.createElement("button");
      doneEdit.className = "done";
      doneEdit.textContent = "done";
      edit.target.parentElement.firstElementChild.after(doneEdit);
      edit.target.style.display = "none";
      doneEdit.addEventListener("click", (done) => {
        if (
          done.target.parentElement.parentElement.firstElementChild
            .innerText !== ""
        ) {
          edit.target.parentElement.parentElement.firstElementChild.removeAttribute(
            "contenteditable"
          );
          done.target.parentElement.parentElement.firstElementChild.setAttribute(
            "value",
            done.target.parentElement.parentElement.firstElementChild.value
          );
          done.target.remove();
          edit.target.style.display = "inline";
          edit.target.parentElement.parentElement.firstElementChild.style.cssText = `background-color: transparent;
          color:white;`;
          window.localStorage.tasks = myTasks.innerHTML;
        } else {
          popup();
        }
      });
    }
  });
}
//append tasks from local Storage
if (localStorage.getItem("tasks")) {
  myTasks.innerHTML = window.localStorage.getItem("tasks");
}
// call function
addTasks();
removeTasks();
editTasks();
setColor();
