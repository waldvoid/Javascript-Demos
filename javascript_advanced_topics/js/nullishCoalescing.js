// truthy, falsey, null , undefined

const x = '';  // false
const val = x || 'default'; // picks default
console.log(val); // default
// ?? nullish operator sadece undefined ve null değerlerini atlar boş veya sıfır gibi değerleri false olarak kabul etmez
// bu sayede || operatoründen daha tahmin edilebilir sonuçlar sunar
const val2 = x ?? 'default'; // picks x
console.log(val2); // x