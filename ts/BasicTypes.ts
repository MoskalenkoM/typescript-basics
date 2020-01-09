// Explicitly specify the type
let myNum: number = 10; // Number
let myStr: string = 'Some string'; // String
let myBool: boolean = true; // Boolean
let myAny: any = 25; // Any
myAny = 'any string';

// Implicit type assignment
let myNum2 = 10; // Number
let myStr2 = 'Some string'; // String
let myBool2 = true; // Boolean
let myAny2; // Any
myAny2 = true;
myAny2 = 25;

// Several types
let myNum3: number | boolean = 25; // Number and Boolean
myNum3 = true;
// myNum3 = 'string'; // error
