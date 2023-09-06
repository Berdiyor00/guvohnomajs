// let a = prompt('guvohnoma olganmisz');
// let b = prompt('ko`rish qobilyatingiz yaxshimi');
// let c = "ha";
// if (a == c && b == c) {
//     console.log("Hayday olasiz");
// } else { console.log("hayday olmaysiz"); }
let JohnM = +prompt('John og`irligingni kirit');
let JohnH = +prompt('John bo`yingni  kirit');
let finish = Math.round((JohnM / JohnH) ** 2);
let BobM = +prompt('Bob og`irligingni kirit');
let BobnH = +prompt('Bob bo`yingni  kirit');
let bobfinish = Math.round((BobM / BobnH) ** 2);
if (JohnM > BobM && JohnH > BobnH) {
    console.log("john kuchli");
} else if (JohnH < BobnH && JohnM < BobM) {
    console.log('Bob kuchli');

} else
    (JohnH == BobnH && JohnM == BobM); {
    console.log('ikkalasi teng')
}