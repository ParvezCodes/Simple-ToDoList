document.querySelector("#push").onclick = function () {
  if (document.querySelector("#new_task input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task">
        <span id="taskname">
            ${document.querySelector("#new_task input").value}
        </span>
        <button class="delete">
            <i class="fa fa-times-circle" style="font-size:22px"></i>
        </button>
    </div>`;

    var current_task = document.querySelectorAll(".delete");
    for (i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#new_task input").value = "";
  }
};
