// Type declarations in TS

// Explicitly specify the type
let myNumb2: number = 10; // Number
let myStr2: string = 'Some string'; // String
let myBool2: boolean = true; // Boolean
let myAny2: any = 25; // Any
myAny2 = 'any string';

// Implicit type assignment
let myNumb3 = 10; // Number
let myStr3 = 'Some string'; // String
let myBool3 = true; // Boolean
let myAny3; // Any
myAny3 = true;
myAny3 = 25;

// Several types
let myNumb4: number | boolean = 25; // Number and Boolean
myNumb4 = true;
// myNumb4 = 'string'; // error type
