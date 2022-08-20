function AddTask() {
	//condition for empty input
	if (document.querySelector("input").value === "") {
		return window.alert("Insert a Task");
	} else {
		//Get ul
		let TaskUl = document.getElementById("Ul");
		//create li and retrive value of input
		let TaskLi = document.createElement("li");

		let InputTask = document.querySelector("input").value;
		let Priority = document.getElementById("Priority").value;
		Priority.id = "PriorityId";
		//assign priority to li so it can change color based on the priority
		TaskLi.className = Priority;
		//create delete btn
		let deletebtn = document.createElement("button");
		deletebtn.innerHTML = "×";
		deletebtn.id = "deletebtn";
		//append all the elements created
		TaskLi.appendChild(document.createTextNode(InputTask));
		//TaskLi.appendChild(document.createTextNode(Priority));
		TaskLi.appendChild(deletebtn);
		TaskUl.appendChild(TaskLi);
		//create delete fuction
		var DeleteTask = function () {
			TaskLi.parentNode.removeChild(TaskLi);
		};
		// add event listener for delete btn
		deletebtn.addEventListener("click", DeleteTask);
		//creater check fuction
		let checkcolor = function () {
			if (TaskLi.style.textDecoration == "line-through") {
				TaskLi.style.textDecoration = "none";
				TaskLi.style.backgroundColor = "";
			} else {
				TaskLi.style.textDecoration = "line-through";
				TaskLi.style.backgroundColor = "#8A8A8AFF";
			}
		};
		//add event listener for check fuction
		TaskLi.addEventListener("click", checkcolor);
	}
}

function addclick() {
	AddTask();
}
