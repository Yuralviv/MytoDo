let tasks = [
	'study javascript',
	'study react',
	'make to do list',
];


let ul = document.querySelector('.list-group');


function listTempale(task) {
	let li = document.createElement('li');

	li.textContent = task;
	li.className = 'list-group-item'; 	
	
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
	generateList(tasks);
}

generateList(tasks);

 let clear-btn = document.querySelector('clear-btn');
 