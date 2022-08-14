/*
- TypeScript allows developers to add TYPES to JavaScript.
- JavaScript is a LOOSELY typed language.
- The TypeScript compiler can be configured with which file? -> tsconfig.json
- There are two main ways TypeScript assigns a type:
    explicit and implicit
*/

//Create a "firstName" variable, string type using Implicit type:
let firstName = 'Dylan'
//the answer: firstName

//Create a "firstName" variable, string type using Explicit type:
let firstName : string  = "Dylan";
//the answer: firstName: string

//Create an empty "myVar" variable, and disable type checking:
let myVar: any;
//the answer: any

//Create an empty "myVar" variable, and specify it should be an unknown type:
let myVar: unknown;
//the answer: unknown

//Prevent the array from being changed:
const names: readonly string[] = ["Dylan"];
//the answer: readonly

//The order of value types does not matter for Tuples:
//False
//What's a Tuple? A data type that can contain 2+ values of different data types
//  like var employee: [number, string] = [1, 'fish']

//Define ourTuple as string and boolean, in that order:
let ourTuple: [string, boolean]
//the answer: [string, boolean]

//Add the correct types for the object below:
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
//the answer: type: string, model: string, year: number

//Specify that the second property, called model, should be optional:
const car: { type: string, model? : string } = {
    type: "Toyota"
  };
  //answer: model?

//Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 
enum myEnum {
    myFirstConst,
    mySecondConst
  };
  //answer: myEnuj, myFirstConst, mySecondConst

//Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with the string values "first" and "second":
enum myEnum {
    myFirstConst: 'first',
    mySecondConst: 'second'
}
//answer: everything except 'enum'

//Create a Type Alias for a string, called carType:
type carType = string
//answer: type and string

//Create an interface called myInterface, with the property myProp as a string:
interface myInterface {
    myProp: string
}

//Extend the myInterface interface from last exercise, and add a property myExtProp as a number:
interface myExtInterface extends myInterface{
    myExtProp: number
}

//Specify that the paramater "myVar" for the function can be either string or number:
function myFunc(myVar:string | number){
    console.log(myVar)
}

//Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:
function myFunc(): string{
    return 'learning is fun!'
}

//Create a function that specifically does not return a value:
function myFunc(): void {
    console.log("Learning is Fun!");
  }
  //answer: function and void

//Create a function with 2 parameters (myVar1 and myVar2), that are both strings:
function myFunc(myVar1: string, myVar2: string ) {
    return(myVar1 + myVar2);
  }

//Create a function with 2 parameters (myVar1 and myVar2,in that order), that are both strings.
//Specify that myVar2 should be optional:
function myFunc(myVar1: string, myVar2?: string){
    return(myVar1 + (myVar2 || ""))
}

//Cast the "unknown" variable myVar as a string, using the as keyword:
//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library. Casting is the process of overriding a type.
let myVar: unknown = "Hello world!";
console.log((myVar as string).length);

//Cast the "unknown" variable myVar as a string, using < >:
let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);

//Specify that Person.name can only be accessed within the class, but that the method Person.getName() can be accessed anywhere:
class Person {
  private name: string;
  
   public constructor(name: string) {
    this.name = name;
   }
  
   public getName(): string {
    return this.name;
   }
  }
  //'private' on name, 'public' on getName()

  //Complete the Generic:
  //Generic: being able to create a component that can work over a variety of types rather than a single one.
  //Type variables work on types instead of values.
  function createPair<typeX, typeY>, (x: typeX, y: typeY): [typeX, typeY] {
    return [x, y];
   }
   console.log(createPair<string, number>('Meaning', 42));
   //answer: <typeX, typeY>

//Declare an object kindPerson from the Person interface, where all the properties are optional:
//Partial<Type> constructs a type with all properties of Type set to optional.
interface Person {
    age: number;
    firstName: string;
    lastName: string;
}
            
let kindPerson: Partial<Person> = {};
//answer:Partial<Person>

//Declare an object kindPerson from the Person interface, where all the properties are required.
interface Person {
    age: number;
    firstName: string;
    lastName?: string;
}
            
let kindPerson: Required<Person> = {
    age: 1800,
    firstName: "Santa",
    lastName: "Claus"
};
//answer: kindPerson: Required<Person>

//Complete the sentence:
//RECORD<_string, number> is equivalent to { [key: string]: number }

