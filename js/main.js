let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText =  form.elements['todoText'];



function listTemplate(task) {
	//create list item
	let li = document.createElement('li');
	li.className = 'list-group-item d-flex align-items-center';

	let span = document.createElement('span');
	span.textContent = task;

	//create tag i trash
	let iDelete = document.createElement('i');
	iDelete.className = 'far fa-trash-alt delete-item ml-auto';

	//append delete icon to li
	li.appendChild(span);
	//li.appendChild(iEdit);
	li.appendChild(iDelete);

	return li;

}

function clearList(){
	ul.innerHTML = ' ';
}

function generateList(taskArray){

	clearList();

	for(let i = 0; i < taskArray.length; i++){
		let li = listTemplate(taskArray[i]);
		ul.appendChild(li);
	}
}

function addList(list){
	tasks.unshift(list);
	//generateList(tasks);
	ul.insertAdjacentElement('afterbegin', listTemplate(list) );
	//add to localStorage
	localStorage.setItem('tasks', JSON.stringify(tasks) );
}

function deleteListItem(target) {
	let parent = target.closest('li');
	let text = parent.textContent;
	let index = tasks.indexOf(text);
	tasks.splice(index, 1);
	parent.remove();
	//update  to localStorage
	localStorage.setItem('tasks', JSON.stringify(tasks) );
}

ul.addEventListener('click', function(e) {
	if (e.target.classList.contains('delete-item') ) {

		deleteListItem(e.target);

	}
});

form.addEventListener('submit', function(e) {
	
	e.preventDefault();
	if (!inputText.value) {
		//show error
		inputText.classList.add('is-invalid');
	}else{
		//addList(inputText.value);
		inputText.classList.remove('is-invalid');
		addList(inputText.value);
		form.reset();
	}
});

inputText.addEventListener('keyup', function(e) {
	if (inputText.value)  {
		inputText.classList.remove('is-invalid');
	}
});
/////////////
generateList(tasks);