

// Built in functions
// isNaN?  -NaN'ı bir tek bununla kontrol edebilirsin
// tüm karşılaştırmalar çöp NaN yanında
console.log(isNaN(Math.sqrt(-1)));

// isFinite?
// infinity değil dimi onu check eder
console.log(isFinite(1/0));

// parseFloat
// string başında float varsa onu çeker alır sana verir
// yoksa NaN verir
console.log(parseFloat("4.52323SelamlarAhmetBey")); // 4.52323
console.log(parseFloat("Selamlar4.523AhmetBey")); //NaN

// parseInt
// başında sayı varsa onu alır ikinci olarak taban girersin
// girdiğin tabandan büyük sayı varsa NaN atar unutma
console.log(parseInt("534223232MertE", 10));


let data = 'word_123something_other_word'

// substring veya slice ile kesme - slice daha iyi negatif no girebiliyosun
data = data.slice(5,data.length);

console.log(parseFloat(data)) //replace the ellipsis with the desired value

// concat >> birleştirme
// copyWithin >> array elementlerini istenilen yere sıraya aktarır
// indexOf
// reverse
// push >> sona bir tane ekle length döndür
// sort
// toString
// find, findIndex
// filter