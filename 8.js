let tasks = ["Azkar Sabah","Study Physics","Read Quran","Watch a tutorial","Take a break"];
let list = document.getElementById("task-list");

function showTasks(){
  list.innerHTML = "";
  for(let i=0;i<tasks.length;i++){
    let li = document.createElement("li");
    li.textContent = tasks[i];
    li.onclick = () => {
      li.classList.toggle("completed");
    };
    list.appendChild(li);
  }
}

showTasks();

let addBtn = document.getElementById("add-btn");
let input = document.getElementById("task-input");

addBtn.onclick = () => {
  let newTask = input.value.trim();
  if(newTask !== ""){
    tasks.push(newTask);
    showTasks();
    input.value = "";
  }else{
    alert("Please write something first!");
  }
};