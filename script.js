"use strict";

// 1. Сообщение о том, что все теги прогрузились
document.addEventListener("DOMContentLoaded", function() {
    console.log("все теги прогрузились");
});

// 2. Сообщение о том, что страница загрузилась
window.addEventListener("load", function() {
    console.log("страница загрузилась");
});

// 3. Обработка кликов по элементам с делегированием
document.addEventListener("click", function(event) {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    const hasClass = element.classList.contains("super_element");
    console.log(`Класс "super_element" ${hasClass ? "присутствует" : "отсутствует"} в элементе "${tagName}".`);
});

// 4. Сообщение при наведении на textarea
document.querySelector("textarea").addEventListener("mouseover", function() {
    console.log("Вы навели на textarea.");
});

// 5. Обработка кликов по кнопкам внутри ul с делегированием
document.querySelector("ul").addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        console.log(event.target.textContent);
    }
});

// 7. Изменение цвета фона каждого второго li
document.querySelectorAll("ul li:nth-child(even)").forEach(function(li) {
    li.style.backgroundColor = "#f0f0f0"; // Вы можете выбрать любой другой цвет
});