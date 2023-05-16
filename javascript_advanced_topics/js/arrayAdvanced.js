const arr = [1, 2, 3, 4, 5];

// aşırı çok elemanlı
const arr2 = Array(100).fill(0); // 100 tane 0
console.log(arr2);
const arr3 = Array(100).fill(0).map((_, i) => i + 1); // 100 tane 1 den başlayarak
console.log(arr3);

// spread operator ile array
// 101 elemanlı object oluştur ve keys ile iterate et ve array oluştur
const arr4 = [...Array(101).keys()]; // 0 dan başlayarak 100 e kadar olan sayıları array olarak döndör
console.log(arr4);
const arr5 = [...arr, 6, 7, 8, 9, 9]; // arr dizisini tekrar etmeyecek şekilde yeni bir dizi oluşturduk
console.log(arr5);

// set oluşturma
const uniqueArr = [...new Set(arr5)]; // unique elemenlı dizi yani set oluşturduk (prototipi array)
const uniqueSet = new Set(arr5); // unique elemenlı set oluşturduk (prototipi set)
console.log(uniqueArr);
console.log(uniqueSet);

// hızlı iterate etmek için
for (const item of arr5) {
	console.log(item);
}

// veya index ile hızlı iterate etmek için
for (const [index, item] of arr5.entries()) {
	console.log(index, item);
}

// functional methodlarla yapmak istersen bir şeyler
// arr.forEach(); // iterate
// arr.map(); // convert values
// arr.filter; // remove unwanted value
// arr.find(); // find value
// arr.reduce(); // take entire array and calculate single value from it