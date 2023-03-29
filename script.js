// Arr1
// let arr = [];
// let n = 11;
// for(let i = 1; i <= n; i += 2) {
//     arr.push(i);
// }
// console.log(arr);

// Arr2
// let arr = [];
// let n = 5;
// for(let i = 0; i <= n; i++) {
//     let k = 2 ** i;
//     arr.push(k);
// }
// console.log(arr);

// Arr3
// let arr = [];
// let n = 12,
//     A = 3,
//     D = 2;
// for (let i = A; i <= n; i += D) {
//     arr.push(i);
// }
// console.log(arr);

// Arr4
// let arr = [];
// let n = 12,
//     A = 3,
//     D = 2;
// for (let i = A; i <= n; i *= D) {
//     arr.push(i);
// }
// console.log(arr);

// Arr5
// let arr = [];
// let n = 5;
// for (let i = 2; i <= n; i++) {
//     let F = i - 1 + (i - 2);
//     arr.push(F);
// }
// console.log(arr);

// Arr6
// let a;
// let A = 1,
//     B = 5;
//     a[0] = A,
//     a[1] = B;
// let n = 7;
// let s = a[0] + a[1];
// for (let i = 2; i < n; i++) {
//     a[i] = s;
//     s += a[i];
// }
// console.log(s);

// Arr7
// let arr = [];
// let n = 5;
// for (let i = n; i >= 0; i--) {
//     arr.push(i);
// }
// console.log(arr);

// Arr8
// let arr = [];
// let n = [4, 5, 7, 8, 6, 9],
//     k = 0;
// for (let i = 0; i <= n.length; i++) {
//     if (n[i] % 2 !== 0) {
//         arr.push(n[i]);
//         k++;
//     } else {
//         continue;
//     }
// }
// console.log(arr);
// console.log(`toqlar soni = ${k}`);

// Arr9
// let arr = [];
// let n = [4, 5, 7, 8, 6, 9],
//     k = 0;
// for (let i = 0; i <= n.length; i++) {
//     if (n[i] % 2 == 0) {
//         arr.push(n[i]);
//         k++;
//     } else {
//         continue;
//     }
// }
// console.log(arr);
// console.log(`toqlar soni = ${k}`);

// Arr10
let arr = [];
let n = [4, 5, 7, 8, 6, 9];
for (let i = 0; i <= n.length; i++) {
    if (n[i] % 2 == 0) {
        console.log(n[i]);
    } else {
        console.log(n[i]);
    }
}
