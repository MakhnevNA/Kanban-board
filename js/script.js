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
		input = document.querySelectorAll('.card__option-color input'),
		itemCard = [];
	

	// если в lS есть какие-то данные, то мы их от туда поулчим и запишем в наш массив
	
	if (localStorage.getItem('itemCard')) {
		itemCard = JSON.parse(localStorage.getItem('itemCard'));
		cardContent = document.querySelectorAll('.card__content');
		console.log(itemCard.children)
	}
	
	// отображаем на странице данные из массива с карточками

	itemCard.forEach((task, i) => {
		const newList = document.createElement('div');
		newList.classList.add('card__item');
		newList.setAttribute('id', `${task.id}`); // добавили нашему пункту id

		newList.innerHTML = `<div class="card__title">
								<div class="card__name">${task.name}</div>
								<div class="card__option">
									<div class="card__option-addthis"><span class="icon-addthis"></span></div>
									<div class="card__option-color"><span class="icon-color_lens"> <input type="color" name="" id=""></span></div>
									<div class="card__option-pencil"><span class="icon-pencil"></span></div>
									<div class="card__option-bin"><span class="icon-bin"></span></div>
								</div>
							</div>
							<div class="card__content"></div>`
		parent.append(newList);
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
		cardText = document.querySelectorAll('.card__text');
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		addThis = document.querySelectorAll('.card__option-addthis .icon-addthis');
		cardContent = document.querySelectorAll('.card__content');
		item = document.querySelectorAll('.card__item');
		binCard = document.querySelectorAll('.card__option-bin .icon-bin');
		renameCard = document.querySelectorAll('.card__option-pencil .icon-pencil');
		nameItem = document.querySelectorAll('.card__name');
	});



	// отображаем на странице данные из массива с пунктами
	itemCard.forEach((task, i) => {
		if (task.children.length > 0) {
			task.children.forEach(item => {
				const div = document.createElement('div');
				div.classList.add('card__text');
				div.setAttribute('draggable', 'true');
				div.setAttribute('id', `${item.id}`); // добавили нашему пункту id	
					div.innerHTML = `<p> ${item.name} </p>
									 <div class="card__text-active">
										<div class="card__text-pencil"><span class="icon-pencil"></span></div>
										<div class="card__text-bin"><span class="icon-bin"></span></div>
									 </div>`;
				cardContent[i].append(div)
			})
		}
	});




	








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
	
	
	
	
	
	// добавление новой карточки
	
	// а стоит ли давать карточке атрибут data-name или без него сделать, если без него то убрать лишнее

	function addNewList() {
		const newList = document.createElement('div');
		let name = prompt('Введите название листа', '');
		
		
		newList.setAttribute('data-name', `${name}`);  // ??


		const newCard = {
			id: Date.now(),	
			name: newList.dataset.name,   // ???
			children: []
			
		}
		
		newList.setAttribute('id', `${newCard.id}`); // добавили нашему пункту id


		if (name != null && name != '') {
			newList.classList.add('card__item');
			newList.innerHTML = `<div class="card__title">
									<div class="card__name">${newCard.name}</div>
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

		
		

		// добавление задачи в массив с задачами

		itemCard.push(newCard);
		saveToLocalStorageCard();


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
		return renameCard, addThis, cardContent, binCard, item, nameItem, name, cardText, cardTitle, input, newCard;
		
	}

	globalAdd.addEventListener('click', () => addNewList());



	// добавить в объкет еще children, и внутри для каждого добавить id

	// 

	// добавление пункта в карточку

	function addText(j) {
		
		const div = document.createElement('div');
		div.classList.add('card__text');
		div.setAttribute('draggable', 'true');

		let text = prompt('Введите название пункта', '');


		
		// newCard.children = Date.now();
		
		const itemChildren = {
			id: Date.now(),
			name: text
		}


		if (text != null && text != '') {
			div.innerHTML = `<p>${text}</p>
							<div class="card__text-active">
								<div class="card__text-pencil"><span class="icon-pencil"></span></div>
								<div class="card__text-bin"><span class="icon-bin"></span></div>
							</div>`
			
			cardContent[j].append(div);
		} 
		// console.log(itemCard)
		itemCard[j].children.push(itemChildren)
		saveToLocalStorageCard();
		
		
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








	//универсальная функция по изменению названия карточки и пунктов в карточке

	function renameClick(selectorPen, rename, target) {
		if (target && target.matches(selectorPen)) {
			rename.forEach((it, k) => {
				if (target == it) {
					if (selectorPen == '.card__text-pencil .icon-pencil') {
						name[k].textContent = prompt('Введите новое название', '')
					} else if (selectorPen == '.card__option-pencil .icon-pencil') {
						let nameCard = prompt('Введите новое название', '');
						
						nameItem[k].textContent = nameCard;
						let id = Number(item[k].id);

						//находим индекс задачи в массиве
						const index = itemCard.find((item) => item.id === id);

						// меняем карточке в массиве
						index.name = nameCard
						saveToLocalStorageCard();
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
		addThis = document.querySelectorAll('.card__option-addthis .icon-addthis');
		renameCard = document.querySelectorAll('.card__option-pencil .icon-pencil');
		nameItem = document.querySelectorAll('.card__name');
		return binCard, item, renameText, name, deleteText, cardText, cardContent, addThis, renameCard, nameItem;
	}


	function deleteClick(selectorBin, del, target, deleteContent) {

		if (target && target.matches(selectorBin)) {
			del.forEach((it, k) => {
				if (target == it) {
					if (selectorBin == '.card__text-bin .icon-bin') {
						deleteContent(cardText, k)
					} else if (selectorBin == '.card__option-bin .icon-bin') {
						// определяем id задачи
						let id = Number(item[k].id);

						//находим индекс задачи в массиве
						const index = itemCard.findIndex((item) => item.id === id);

						// удаляем задачу из массива
						itemCard.splice(index, 1);
						saveToLocalStorageCard();

						// удаляем карточку со страницы
						deleteContent(item, k);
						
						
						
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


	
	// сохранение данных в local storage для карточек

	const saveToLocalStorageCard = () => localStorage.setItem('itemCard', JSON.stringify(itemCard));
	// каждый раз при вызове это функции у нас будет происходить сохранение нашего массива в local storage



















	



















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