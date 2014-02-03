for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue; //Продолжает цикл
    }
    console.log(i);
    if (i == 8) {
        break; //Завершает цикл
    }
}

var i = 0;
while(i < 10) {
    if (i == 5) {
        continue; //Продолжает цикл
    }
    console.log(i);
    if (i == 8) {
        break; //Завершает цикл
    }
    i++;
}