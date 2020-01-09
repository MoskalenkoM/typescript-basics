// Arrays in TS

const arrNumb1: number[] = [1, 2, 3]; // array of numbers
const arrNumb2: Array<number> = [1, 2, 3]; // array of numbers

const arrStr1: string[] = ['1', '2', '3']; // array of strings
const arrStr2: Array<string> = ['1', '2', '3']; // array of strings

const arrBool1: boolean[] = [true, false]; // array of booleans
const arrBool2: Array<boolean> = [true, false]; // array of booleans

const tuple1: [number, string] = [1, '2']; // tuple
const tuple2 = [1, '2', true]; // tuple
// const tuple3: Array<number, string> = [1, '2']; // - error

const arrNumb3: number[] = [1, 2, 3];
arrNumb3[3] = 5;
arrNumb3.push(1);
arrNumb3.push(2);
arrNumb3.push(3);
// arrNumb3[0] = '15'; // - error type
// arrNumb3[7] = '5'; // - error type
// arrNumb3.push('1'); // - error type
console.log('arrNumb3: ', arrNumb3); // [1, 2, 3, 5, 1, 2, 3]

const arrStr3: string[] = ['1', '2', '3'];
// arrStr3[0] = 7; // - error type
// arrStr3[3] = 2; // - error type
// arrStr3.push(10); // - error type

let arrBool3: boolean[] = [true, false];
arrBool3 = [];
arrBool3[0] = true;
arrBool3.push(false);
// arrBool3[2] = 'true'; // - error type
// arrBool3.push('false'); // - error type
arrBool3.push(false);
arrBool3.push(true);
console.log('arrBool3: ', arrBool3); // [ true, false, false, true ]

const tuple4: [number, string] = [1, '2'];
tuple4[0] = 25;
tuple4.push(17);
tuple4.push('str');
tuple4[tuple4.length - 1] = '27';
tuple4[tuple4.length - 1] = 27;
// tuple4[tuple4.length - 1] = true; // - error type
// tuple4[0] = '27'; // - error type
// tuple4[2] = false; // - error type and error length
// tuple4.push(false); // - error type
console.log('tuple4: ', tuple4); // [ 25, '2', 17, 27 ]

const tuple5 = [1, '2', true];
tuple5[0] = 20;
tuple5[0] = '23';
tuple5[0] = true;
tuple5.push(10);
tuple5.push('112');
tuple5.push(false);
console.log('tuple5: ', tuple5); // [ true, '2', true, 10, '112', false ]
