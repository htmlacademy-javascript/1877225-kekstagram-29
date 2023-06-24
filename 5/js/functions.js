//Проверка длины строки
function checkString (string, maxLengthString) {
  if (!string) {
    return 'Пустое значение';
  }
  return string.length <= maxLengthString;
}

checkString('Hello World!', 20);


//Проверка, является ли слово палиндромом
function checkPalindrome (text) {
  const clearedText = text.replace(/\s/g, '').toLowerCase();
  let res = '';
  for (let i = clearedText.length - 1; i >= 0; i--) {
    res += clearedText.at(i);
  }
  return res === clearedText;
}

checkPalindrome ('топот');


//Вывод целого положительного числа из принятой строки
function extractNumber (input) {
  if (!input) {
    return NaN;
  }
  const inputString = input.toString();
  let res = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!Number.isNaN(parseInt(char, 10))) {
      res += char;
    }
  }
  return parseInt(res, 10);
}

extractNumber ('1 кефир, 0.5 батона');
