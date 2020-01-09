// Explicitly specify the type
let myNumb: number = 10; // Number
let myStr: string = 'Some string'; // String
let myBool: boolean = true; // Boolean
let myAny: any = 25; // Any
myAny = 'any string';

// Implicit type assignment
let myNumb2 = 10; // Number
let myStr2 = 'Some string'; // String
let myBool2 = true; // Boolean
let myAny2; // Any
myAny2 = true;
myAny2 = 25;

// Several types
let myNumb3: number | boolean = 25; // Number and Boolean
myNumb3 = true;
// myNumb3 = 'string'; // error type
