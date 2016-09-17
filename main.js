//add find remove
var hash = new hashMap(3);
function rand(len) {
    var valid = 'abcdefghijklmnopqrstuvwxyz';
    var str   = '';
    for (var i = 0; i < len; i++) {
        str = str + valid[Math.floor(Math.random()*valid.length)];
    }
    return str;
}
var randKey = rand(5),
    randVal = rand(3);

for (var i = 0; i < 1000; i++) {
    hash.add(rand(5), rand(3));
}
hash.add(randKey, randVal);

console.log(hash);
document.getElementById('data').textContent = JSON.stringify(hash);
console.log('--------')
// console.log('>> Find');
// console.log(hash.find(randKey));
// console.log('>> Remove');
// console.log(hash.remove(randKey));
console.log('>> Find after removing');
console.log(hash.find(randKey));
