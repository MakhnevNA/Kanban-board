'use strict'

window.addEventListener('DOMContentLoaded', () => {
	
	const parent = document.querySelector('.container'),
		globalAdd = document.querySelector('.global__option-addthis');

	
	
	
	let addThis = document.querySelectorAll('.card__option-addthis .icon-addthis'),
		renameCard = document.querySelectorAll('.card__option-pencil .icon-pencil'),
		binCard = document.querySelectorAll('.card__option-bin .icon-bin'),
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil'),
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin'),
		cardContent = document.querySelectorAll('.card__content'),
		item = document.querySelectorAll('.card__item'),
		name = document.querySelectorAll('.card__text p'),
		cardText = document.querySelectorAll('.card__text'),
		nameItem = document.querySelectorAll('.card__name'),
		cardTitle = document.querySelectorAll('.card__title'),
		input = document.querySelectorAll('.card__option-color input');
	
	
	// let tasks = [];
	// let itemCard = [];

	

		// если в lS есть какие-то данные, то мы их от туда поулчим и запишем в наш массив
	
	// if (localStorage.getItem('itemCard')) {
	// 	itemCard = JSON.parse(localStorage.getItem('itemCard'));
	// 	cardContent = document.querySelectorAll('.card__content');
	// }
	
	
	// if (localStorage.getItem('tasks')) {
	// 	tasks = JSON.parse(localStorage.getItem('tasks'));
	// 	cardContent = document.querySelectorAll('.card__content');
	// }

	




	// отображаем на странице данные из массива с пунктами

	// tasks.forEach(task => {
	// 	const div = document.createElement('div');
	// 	div.classList.add('card__text');
	// 	div.setAttribute('draggable', 'true');
	// 	div.setAttribute('id', `${task.id}`); // добавили нашему пункту id
	// 	div.setAttribute('data-number', `${task.numberItem}`); // добавили нашему пункту data атрибут

	// 		div.innerHTML = `<p> ${task.text} </p>
	// 						 <div class="card__text-active">
	// 							<div class="card__text-pencil"><span class="icon-pencil"></span></div>
	// 							<div class="card__text-bin"><span class="icon-bin"></span></div>
	// 						 </div>`;
	// 	cardContent[task.numberItem].append(div);  // сделать чтобы после перезагрузки пункты оставались в своих карточках
		

	// 	deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
	// 	cardText = document.querySelectorAll('.card__text');
	// 	renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
	// 	name = document.querySelectorAll('.card__text p');

	// });



	
	// отображаем на странице данные из массива с карточками

	// itemCard.forEach(task => {
	// 	const newList = document.createElement('div');
	// 	newList.classList.add('card__item');
	// 	newList.setAttribute('id', `${task.id}`); // добавили нашему пункту id
	// 	newList.setAttribute('data-number', `${task.numberItem}`); // добавили нашему пункту data атрибут
	// 	newList.setAttribute('data-color', `${task.bg}`);


	// 	newList.innerHTML = `<div class="card__title">
	// 							<div class="card__name">${task.text}</div>
	// 							<div class="card__option">
	// 								<div class="card__option-addthis"><span class="icon-addthis"></span></div>
	// 								<div class="card__option-color"><span class="icon-color_lens"> <input type="color" name="" id=""></span></div>
	// 								<div class="card__option-pencil"><span class="icon-pencil"></span></div>
	// 								<div class="card__option-bin"><span class="icon-bin"></span></div>
	// 							</div>
	// 						</div>
	// 						<div class="card__content"></div>`
		
	// 	parent.append(newList);
	// 	deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
	// 	cardText = document.querySelectorAll('.card__text');
	// 	renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
	// 	name = document.querySelectorAll('.card__text p');
	// 	addThis = document.querySelectorAll('.card__option-addthis .icon-addthis');
	// 	cardContent = document.querySelectorAll('.card__content');
	// 	console.log(cardContent);
	// });





	// добавление пункта в карточку
	
	
	// function addText(j) {
		
	// 	const div = document.createElement('div');
	// 	div.classList.add('card__text');
	// 	div.setAttribute('draggable', 'true');

		
	// 		let text = prompt('Введите название пункта', '').trim();

			
	// 		const newTask = {
	// 			id: Date.now(),
	// 			text: text,
	// 			numberItem: j
	// 		}
			

	// 		if (text != null && text != '') {

				
				
	// 			div.innerHTML = `<p>${newTask.text}</p>
	// 							<div class="card__text-active">
	// 								<div class="card__text-pencil"><span class="icon-pencil"></span></div>
	// 								<div class="card__text-bin"><span class="icon-bin"></span></div>
	// 							</div>`
				
				
				
	// 			// описали задачу в виде объекта
				
	// 			// div.setAttribute('id', `${newTask.id}`); // добавили нашему пункту id
	// 			// div.setAttribute('data-number', `${newTask.numberItem}`); // добавили нашему пункту data атрибут
	// 			// // div.setAttribute('data-cardOfNumber', `${newTask.numberItem}`);

				

	// 			cardContent[j].append(div);


	// 			// добавление задачи в массив с задачами
				
	// 			tasks.push(newTask);
	// 			saveToLocalStorage();

	// 		} 
		
		
		
	// 	renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
	// 	name = document.querySelectorAll('.card__text p');
	// 	deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
	// 	cardText = document.querySelectorAll('.card__text');
	// 	cardContent = document.querySelectorAll('.card__content');
	// 	console.log(cardContent);
	// 	return renameText, name, deleteText, cardText, newTask, cardContent;
	// }
	
	



	// добавление пункта в карточку

	function addText(j) {
		
		const div = document.createElement('div');
		div.classList.add('card__text');
		div.setAttribute('draggable', 'true');

		let text = prompt('Введите название пункта', '').trim();

		if (text != null && text != '') {
			div.innerHTML = `<p>${text}</p>
							<div class="card__text-active">
								<div class="card__text-pencil"><span class="icon-pencil"></span></div>
								<div class="card__text-bin"><span class="icon-bin"></span></div>
							</div>`
			
			cardContent[j].append(div);
		} 
		
		
		
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		cardText = document.querySelectorAll('.card__text');
		cardContent = document.querySelectorAll('.card__content');
		return renameText, name, deleteText, cardText, cardContent;
	}
	

	parent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.matches('.card__option-addthis .icon-addthis')) {
			addThis.forEach((item, j) => {
				if (target == item) {
					addText(j);
				}
			});
		}


	});




	// добавление новой карточки

	function addNewList() {
		const newList = document.createElement('div');
		let name = prompt('Введите название листа', '');

		if (name != null && name != '') {
			newList.classList.add('card__item');
			newList.innerHTML = `<div class="card__title">
									<div class="card__name">${name}</div>
									<div class="card__option">
										<div class="card__option-addthis"><span class="icon-addthis"></span></div>
										<div class="card__option-color"><span class="icon-color_lens"> <input type="color" name="" id=""></span></div>
										<div class="card__option-pencil"><span class="icon-pencil"></span></div>
										<div class="card__option-bin"><span class="icon-bin"></span></div>
									</div>
								</div>
								<div class="card__content"></div>`
			parent.append(newList);
		}

		renameCard = document.querySelectorAll('.card__option-pencil .icon-pencil');
		addThis = document.querySelectorAll('.card__option-addthis .icon-addthis');
		cardContent = document.querySelectorAll('.card__content');
		binCard = document.querySelectorAll('.card__option-bin .icon-bin');
		item = document.querySelectorAll('.card__item');
		nameItem = document.querySelectorAll('.card__name');
		name = document.querySelectorAll('.card__text p');
		cardText = document.querySelectorAll('.card__text');
		cardTitle = document.querySelectorAll('.card__title');
		input = document.querySelectorAll('.card__option-color input');
		return renameCard, addThis, cardContent, binCard, item, nameItem, name, cardText, cardTitle, input;
		
	}

	globalAdd.addEventListener('click', () => addNewList());




	//универсальная функция по изменению названия картчоки и пунктов в карточке

	function renameClick(selectorPen, rename, target) {
		if (target && target.matches(selectorPen)) {
			rename.forEach((item, k) => {
				if (target == item) {
					if (selectorPen == '.card__text-pencil .icon-pencil') {
						name[k].textContent = prompt('Введите новое название', '')
					} else if (selectorPen == '.card__option-pencil .icon-pencil') {
						nameItem[k].textContent = prompt('Введите новое название', '')
					}
				}
			});
		}
	}


	// изменение названия пункта или карточки
	parent.addEventListener('click', (event) => {
		const target = event.target;
		if (event.target.parentElement.classList == 'card__text-pencil') {
			renameClick('.card__text-pencil .icon-pencil', renameText, target,);
		} else if (event.target.parentElement.classList == 'card__option-pencil') {
			renameClick('.card__option-pencil .icon-pencil', renameCard, target,);
		}
	});





	// универсальные функции по удалению карточки/пунтка в карточке

	function deleteContent(textDelete, k) {
		let name = confirm('Вы дейсвительно хотите удалить?');
		if (name == true) {
			textDelete[k].remove();
		} 

		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p'); // ???
		cardText = document.querySelectorAll('.card__text');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		binCard = document.querySelectorAll('.card__option-bin .icon-bin');
		item = document.querySelectorAll('.card__item');
		cardContent = document.querySelectorAll('.card__content');
		return binCard, item, renameText, name, deleteText, cardText, cardContent;
	}


	function deleteClick(selectorBin, del, target, deleteContent) {

		if (target && target.matches(selectorBin)) {
			del.forEach((it, k) => {
				if (target == it) {
					if (selectorBin == '.card__text-bin .icon-bin') {
						deleteContent(cardText, k)
					} else if (selectorBin == '.card__option-bin .icon-bin') {
						deleteContent(item, k)
					}
				}
			});
		}
	}

	//удаление пунтка в карточке/карточки
	parent.addEventListener('click', (event) => {
		const target = event.target;
		if (event.target.parentElement.classList == 'card__text-bin') {
			deleteClick('.card__text-bin .icon-bin', deleteText, target, deleteContent);
		} else if (event.target.parentElement.classList == 'card__option-bin') {
			deleteClick('.card__option-bin .icon-bin', binCard, target, deleteContent);	
		}		
	});


	
	














	// измение bg у заголовка
	
	function changeColor(i) {
		let color = input[i].value;
		// cardTitle[i].setAttribute('data-color', `${color}`);
		cardTitle[i].style.backgroundColor = `${color}`;
		
		return color;
	}

	parent.addEventListener('change', (e) => {
		const target = e.target;
		if (target && target.matches('.card__option-color input')) {
			input.forEach((item, i) => {
				if (item == target) {
					changeColor(i)
				}
			})
		}
	});






	// сохранение данных в local storage для пунктов

	// const saveToLocalStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks)); // каждый раз при вызове это функции у нас будет происходить сохранение нашего массива в local storage




	// сохранение данных в local storage для карточек

	// const saveToLocalStorageCard = () => localStorage.setItem('itemCard', JSON.stringify(itemCard)); // каждый раз при вызове это функции у нас будет происходить сохранение нашего массива в local storage



















	



















	// drag and drop

	// через делегирование делать
	// теперь у новых пунктов в статичном списке все норм
	// а у пунктов в созданной карточке плохо


	// parent.addEventListener('dragstart', (e) => {
	// 	const target = e.target;

	// 	if (target && target.classList.contains('card__text')) {
	// 		cardText.forEach((item, i) => {
	// 			if (target == item) {
	// 				item.classList.add('dragging');
	// 			}
	// 		});
	// 	}
	// });

	// parent.addEventListener('dragend', (e) => {
	// 	const target = e.target;

	// 	if (target && target.classList.contains('card__text')) {
	// 		cardText.forEach((item, i) => {
	// 			if (target == item) {
	// 				item.classList.remove('dragging');
	// 			}
	// 		});
	// 	}
	// });
	

// 	parent.addEventListener('dragover', (e) => {
// 		const target = e.target;
// 		e.preventDefault();
// 		if (target && target.classList.contains('card__content')) {
// 			cardContent.forEach((item) => {
// 				e.preventDefault();
// 				const afterElement = getDragAfterElement(item, e.clientY); // присвоим значение функции это переменной
// 				let draggable = document.querySelector('.dragging');
// 				// getDragAfterElement(item, e.clientY);
// 				getDragAfterElement(item, e.clientY);
// 				if (target == item && afterElement == null) {
					
// 					item.appendChild(draggable);
// 				} else  {
// 					item.insertBefore(draggable, afterElement)
// 				} 
// 				// getDragAfterElement(item, e.clientY, i);
// 				// if (afterElement == null) {
// 				// 	item.appendChild(draggable);
// 				// } else {
// 				// 	item.insertBefore(draggable, afterElement)
// 				// }
// 			});
// 		}
// 	});
	
// // определение между каким элементами мы находимся
	
// 	// определяет положение мыши, когда мы перетаскиваем элемент
// 	function getDragAfterElement(item, y) {
// 		const draggableElements = [...item.querySelectorAll('.card__text:not(.dragging)')]; // исключаем элемент, который сейчас держим.и со спредом преобразовываем в массив
// 		return draggableElements.reduce((closest, child) => {
// 			const box = child.getBoundingClientRect();
// 			const offset = y - box.top - box.height/2;
// 			if (offset < 0 && offset > closest.offset) {
// 				return { offset: offset, element:child }
// 			} else {
// 				return closest;
// 			}
// 		}, {offset: Number.NEGATIVE_INFINITY}).element 
// 	}

	// function getDragAfterElement(item, y, i) {
	// 	const draggableElements = [...item.querySelectorAll('.card__text:not(.dragging)')]; // исключаем элемент, который сейчас держим.и со спредом преобразовываем в массив
	// 	draggableElements.reduce((closest, child) => {
	// 		const box = child.getBoundingClientRect();
	// 		const offset = y - box.top - box.height / 2;
	// 		console.log(offset);
	// 		// if (offset < 0 && offset > closest.offset) {
	// 		// 	return { offset: offset, element: child }
	// 		// } else {
	// 		// 	return closest;
	// 		// }
	// 	}, { offset: Number.NEGATIVE_INFINITY })
	// }





});