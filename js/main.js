let tasks = [
	'study javascript',
	'study react',
	'make to do list',
];


let ul = document.querySelector('.list-group');
let deleteBtns = document.getElementsByClassName('delete-item');


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

	setDeleteEvent();
}

function addList(list) {
	tasks.unshift(list);
	generateList(tasks);
}


function setDeleteEvent() {
	for(let i= 0; i < deleteBtns.length; i++){
		deleteBtns[i].addEventListener('click', function (event) {
		console.log('click');
		});
	}
}

generateList(tasks);

