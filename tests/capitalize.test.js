import capitalize from '../scr/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error('Ошибка в работе функции!');
}

if (capitalize('') !== '') {
    throw new Error('Ошибка в работе с пустой строкой');
}

console.log('Пройдены проверки');