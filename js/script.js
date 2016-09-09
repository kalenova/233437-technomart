var link = document.querySelector(".btn-mail");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");

	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}

});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !email.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		}
	}
});

/* Селектор, который выбирает кнопку по которой открывается окно */
var mapOpen = document.querySelector(".js-open-map");

/* Селектор, который выбирает окно */

var mapPopup = document.querySelector(".modal-content-map");

/* Селектор, который выбирает кнопку закрыть */
var mapClose = mapPopup.querySelector(".modal-content-close");

/* Вешаем событие на кнопку открытия */

mapOpen.addEventListener("click", function(event) {
/* Отменяем переход по ссылке */
	event.preventDefault();
		/* ДОбавляем класс, который делает окно видимым */
	mapPopup.classList.add("modal-content-show");
});

/* Вешаем событие на кнопку закрытия */

mapClose.addEventListener("click", function(event) {
			/* Отменяем переход по ссылке */
	event.preventDefault();
				/* Убираем класс, который делает окно видимым */
	mapPopup.classList.remove("modal-content-show");
});


/* Вешаем событие на нажатие кнопки (клавиатуры) на кнопку открыть */
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});

/* Ниже идет все про модалку купить */

/* Селектор, который выбирает кнопку по которой открывается окно */
var buyOpen = document.querySelector(".buy");

/* Селектор, который выбирает окно */

var buyPopup = document.querySelector(".modal-content-buy");

/* Селектор, который выбирает кнопку закрыть */
var buyClose = buyPopup.querySelector(".modal-content-close");

/* Вешаем событие на кнопку открытия */

buyOpen.addEventListener("click", function(event) {
/* Отменяем переход по ссылке */
	event.preventDefault();
		/* ДОбавляем класс, который делает окно видимым */
	buyPopup.classList.add("modal-content-show");
});

/* Вешаем событие на кнопку закрытия */

buyClose.addEventListener("click", function(event) {
			/* Отменяем переход по ссылке */
	event.preventDefault();
				/* Убираем класс, который делает окно видимым */
	buyPopup.classList.remove("modal-content-show");
});


/* Вешаем событие на нажатие кнопки (клавиатуры) на кнопку открыть */
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (buyPopup.classList.contains("modal-content-show")) {
			buyPopup.classList.remove("modal-content-show");
		}
	}
});

