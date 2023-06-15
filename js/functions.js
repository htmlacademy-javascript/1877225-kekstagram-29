//Проверка длины строки
function checkString (string, maxLengthString) {
  if (string === '') {
    return 'Пустое значение';
  }
  return string.length <= maxLengthString;
}

checkString('Hello World!', 20);


//Проверка, является ли слово палиндромом
function checkPalindrome (text) {
  const invertedText = text.replaceAll(' ', '').toLowerCase();
  let string = '';
  for (let i = invertedText.length - 1; i >= 0; i--) {
    string += invertedText.at(i);
  }
  return string === invertedText;
}

checkPalindrome ('топот');


//Вывод целого положительного числа из принятой строки
function getNumbers (string) {
  const number = string.toString();
  let count = '';
  if (typeof(string) === 'number') {
    count = number.replaceAll('.', '').replaceAll('-', '');
    return parseInt(count, 10);
  }
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(number[i], 10))) {
      count += number[i];
    }
  }
  return parseInt(count, 10);
}

getNumbers ('1 кефир, 0.5 батона');
