// setTimeout ile zamanlama
let timeoutCounter = 0;
setTimeout(function(){
    console.log("Bu 5 saniye sonra basılacak");
    timeoutCounter++;
}, 5000);

    // başka türlü zamanlama
// clearla durdurabilirsin ikisini zamanlayıcıyı da
function send (message) {
    console.log("Bu " + message + " saniye sonra basılacak");
    timeoutCounter++;
    if(timeoutCounter > 0) {
        clearTimeout(sendMessage);
    }
}
let sendMessage = setTimeout(send, 10000, "10");
// setTimeout'u sıfıra ayarlayıp ikinci sırada olarak bastırma
let anotherMessage = setTimeout(send, 0, "sıfır");
console.log("hızlıca bu yazıyı bas");

// setInterval ile belirli aralıklarla tekrarlı iş
// Bir kere kurdun mu aynı değer tekrarlanıyor değiştiremezsin
let counter = 0;
function alarm(hour) {
    console.log("Uyan artık saat " + hour + " oldu!");
    counter++;
    if (counter > 6) {
        clearInterval(intervalID);
    };
}
let time = new Date();
const intervalID = setInterval(alarm, 3000, time.getHours());

// arrow function setTimeout
for (let number = 5; number < 9; number++) {
    setTimeout(() => console.log(number), 1);
}

// interval kurup timeout ile sonlandıralım
function showName(name) {
    return(`Hello, student ` + name + '!');
}

const studentGreeting = setInterval(showName, 1000, "Alex");
setTimeout(() => clearInterval(studentGreeting), 7000);
