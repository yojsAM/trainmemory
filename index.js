// https://learn.javascript.ru/number
// https://learn.javascript.ru/settimeout-setinterval
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

let allNumbers;

function headClick() {
  inputA.value = "0" + getRandomArbitrary(0, 10);
  inputB.value = getRandomArbitrary(10, 100);
  inputC.value = getRandomArbitrary(1e5, 10e5);

  allNumbers = inputA.value + inputB.value + inputC.value;
  console.log(allNumbers);

  setTimeout(waitTime3sec, 1100);

  function waitTime3sec() {
  inputD.value = 3;
  setTimeout(waitTime2sec, 1100);
  }

  function waitTime2sec() {
  inputD.value = 2;
  setTimeout(waitTime1sec, 1100);
  }

  function waitTime1sec() {
  inputD.value = 1;
  setTimeout(waitTime0sec, 1100);
  }

  function waitTime0sec() {
  inputD.value = "";
    clearAllNumber();
  }
}



function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function enterClick() {

  if(inputD.value == allNumbers) {
    info.value = "Верно!";
    streak.value = +streak.value + 1;
  } else {
    info.value = `Не верно, ответ был: ${allNumbers}`;
    streak.value = 0;
  }

  if(streak.value == 3) {
    level.value = 2;
    info.value = "Поздравляем, вы сделали 3 правильных ответа подряд! Уровень повышен.";
  } else if(streak.value == 5) {
    level.value = 3;
    info.value = "Поздравляем, вы сделали 5 правильных ответа подряд! Уровень повышен.";
  } else if(streak.value == 10) {
    level.value = 4;
    info.value = "Поздравляем, вы сделали 10 правильных ответа подряд! Уровень повышен.";
  }


}

function clearAllNumber() {
  inputA.value = "00";
  inputB.value = "00";
  inputC.value = "000000";
}
