'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '700px';
box.style.

btns[1].style.borderRadius = '100%';

box.style.cssText = 'background-color: red; width: 200px';

//for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
const text = document.createTextNode('Текст текстовый');

div.classList.add('black');

wrapper.append(div);

wrapper.prepend(div);

hearts[1].before(div);

hearts[0].replaceWith(div);

//div.remove();

div.innerHTML = "<h1>'Hello'</h1>";

div.textContent = 'text';

div.insertAdjacentHTML('beforebegin', '<h2>Text</h2>');