
	/*array with tasks*/
let tasks = [
	// 'study javascript',
	// 'study react',
];

///////////////////////////////////////////
		/*use tag from html*/
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];



		//this function create tag li (task)
function listTempale(task) {
	
	let li = document.createElement('li');
	li.textContent = task;

	// add needed class
	li.className = 'list-group-item d-flex align-items-center'; 	
	
	// added trash in tag li
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
	//ul.insertAdjacentElement('afterbegin', listTempale(list));
	ul.insertAdjacentElement('afterbegin', listTempale(list) );
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
		inputText.classList.add('is-invalid');
		addList(inputText.value);
		form.reset();
		
	}
});


///////////////////////////////////////////

generateList(tasks);

///////////////////////////////////////////