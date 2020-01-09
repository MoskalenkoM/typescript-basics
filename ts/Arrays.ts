const arrNumb1: number[] = [1, 2, 3]; // array of numbers
const arrNumb2: Array<number> = [1, 2, 3]; // array of numbers

const arrStr1: string[] = ['1', '2', '3']; // array of strings
const arrStr2: Array<string> = ['1', '2', '3']; // array of strings

const arrBool1: boolean[] = [true, false]; // array of booleans
const arrBool2: Array<boolean> = [true, false]; // array of booleans

const tuples1: [number, string] = [1, '2']; // tuples
const tuples2 = [1, '2', true]; // tuples
// const tuples3: Array<number, string> = [1, '2']; // - error

const arrNumb3: number[] = [1, 2, 3];
arrNumb3[3] = 5;
// arrNumb3[4] = '5'; // - error type
// arrNumb3.push('1'); // - error type

const arrStr3: string[] = ['1', '2', '3'];
// arrStr3[3] = 2; - error type

let arrBool3: boolean[] = [true, false];
arrBool3 = [];
arrBool3[0] = true;
arrBool3.push(false);
// arrBool3[2] = 'true'; // - error type
// arrBool3.push('false'); // - error type

const tuples4: [number, string] = [1, '2'];
tuples4[0] = 25;
tuples4.push('str');
tuples4.push(17);
tuples4[tuples4.length - 1] = '27';
tuples4[tuples4.length - 1] = 27;
// tuples4[tuples4.length - 1] = true; // - error type
// tuples4[0] = '27'; // - error type
// tuples4[2] = false; // - error type
// tuples4.push(false); // - error type

const tuples5 = [1, '2', true];
tuples5[0] = 20;
tuples5[0] = '23';
tuples5[0] = true;
