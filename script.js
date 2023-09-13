const inputTextarea = document.querySelector('#input-textarea');
const characCount = document.querySelector('#charac-count');
const boxWordCount = document.querySelector('#word-count');

inputTextarea.oninput = function () {

    // Дістаємо текст поля
    const text = inputTextarea.value;

    // Визначаємо довжину тексту
    const length = text.length;

    // Виводимо довжину тексту
    characCount.innerText = length;

    // Підраховуємо слова в тексті
    const wordsCount = text.split(' ').length;

    console.log("boxWordCount: ", boxWordCount);
    // Вивести кількість слів
    boxWordCount.innerText = wordsCount;
};