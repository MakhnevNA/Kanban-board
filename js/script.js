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
		itemCard = [];
	

	
	// если в lS есть какие-то данные, то мы их от туда поулчим и запишем в наш массив
	
	if (localStorage.getItem('itemCard')) {
		itemCard = JSON.parse(localStorage.getItem('itemCard'));
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
			});
		}
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		cardText = document.querySelectorAll('.card__text');
		deleteText = document.querySelectorAll('.card__text-bin .icon-bin');
	});
	
	
	// добавление новой карточки

	function addNewList() {
		const newList = document.createElement('div');
		let name = prompt('Введите название листа', '');

		const newCard = {
			id: Date.now(),
			name: name,
			children: []
			
		}
		
		newList.setAttribute('id', `${newCard.id}`); // добавили нашему пункту id


		if (name != null && name != '') {
			newList.classList.add('card__item');
			newList.innerHTML = `<div class="card__title">
									<div class="card__name">${newCard.name}</div>
									<div class="card__option">
										<div class="card__option-addthis"><span class="icon-addthis"></span></div>
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
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		return renameCard, addThis, cardContent, binCard, item, nameItem, name, cardText, cardTitle, newCard, renameText;
		
	}

	globalAdd.addEventListener('click', () => addNewList());



	// добавление пункта в карточку

	function addText(j) {
		
		const div = document.createElement('div');
		div.classList.add('card__text');
		div.setAttribute('draggable', 'true');
		

		let text = prompt('Введите название пункта', '');

		
		const itemChildren = {
			id: Date.now(),
			name: text
		}
		div.setAttribute('id', itemChildren.id)

		if (text != null && text != '') {
			div.innerHTML = `<p>${itemChildren.name}</p>
							<div class="card__text-active">
								<div class="card__text-pencil"><span class="icon-pencil"></span></div>
								<div class="card__text-bin"><span class="icon-bin"></span></div>
							</div>`
			
			cardContent[j].append(div);
		} 
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
						let nameText = prompt('Введите новое название', '');

						if (nameText != "" && nameText != null) {

							name[k].textContent = nameText;

							let id = Number(cardText[k].id);	

							//находим индекс задачи в массиве
							
							itemCard.forEach(item => {
								const index = item.children.find((it) => it.id === id);

								if (index) {
									// меняем имя пункта в массиве
									index.name = nameText;
									saveToLocalStorageCard();
								}
							});
						}
					} else if (selectorPen == '.card__option-pencil .icon-pencil') {
						let nameCard = prompt('Введите новое название', '');

						if (nameCard != '' && nameCard != null) {
							nameItem[k].textContent = nameCard;
							let id = Number(item[k].id);

							//находим индекс задачи в массиве
							const index = itemCard.find((item) => item.id === id);

							// меняем имя карточки в массиве
							index.name = nameCard
							saveToLocalStorageCard();
						}
					}
				}
			});
		}
		renameText = document.querySelectorAll('.card__text-pencil .icon-pencil');
		name = document.querySelectorAll('.card__text p');
		cardText = document.querySelectorAll('.card__text');
		return renameText, name, cardText;
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

						// Определяем id задачи
						let id = Number(cardText[k].id);
						
						//находим индекс задачи в массиве
						
						itemCard.forEach(item => {
							const index = item.children.find((it) => it.id === id);
							
							if (index !== undefined) {
								// удаляем задачу из массива
								itemCard.forEach(item => {
									item.children.forEach(it => {
										if (it.id == index.id) {
											item.children.splice(it, 1)
										}
									})
								}); 
								saveToLocalStorageCard();
								// удаляем карточку со страницы
								deleteContent(cardText, k);
							}
						});

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


	


	// сохранение данных в local storage для карточек

	const saveToLocalStorageCard = () => localStorage.setItem('itemCard', JSON.stringify(itemCard));
	// каждый раз при вызове это функции у нас будет происходить сохранение нашего массива в local storage


});