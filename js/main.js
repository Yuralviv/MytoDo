let tasks = [
	'study javascript',
	'study react',
];


let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];


function listTempale(task) {
	
	let li = document.createElement('li');
	li.textContent = task;
	li.className = 'list-group-item d-flex align-items-center'; 	

	let iDelete = document.createElement('i');
	iDelete.className = 'far fa-trash-alt delete-item ml-auto';
	li.appendChild(iDelete);	
	
	return li;
}

function clearList() {
	ul.innerHtml = '';
}

function generateList(tasksArray) {

	clearList();

	for(let i = 0; i<tasksArray.length; i++){
		ul.appendChild(listTempale(tasksArray[i]));	
	}

	
}

function addList(list) {

	tasks.unshift(list);
	ul.insertAdjacentElement('afterbegin', listTempale(list));
}

function deleteListItem(target) {
	let parent = target.closest('li');
	let index = tasks.indexOf(parent.textContent);
	tasks.slice(index, 1);
	parent.remove();
}

ul.addEventListener('click', function(e){
	if (e.target.classList.contains('delete-item') ) {

		deleteListItem(e.target);
	}
});

form.addEventListener('submit', function(event){
	e.preventDefault(); 

	if ( !inputText.value) {
		inputText.classList.add('is-invalid');
	}else{
	addList(inputText.value);
		
	}


});


generateList(tasks);

