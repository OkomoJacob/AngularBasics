## Type Assertion in TypeScript

Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. 
- Such a situation can occur when you might be porting over code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. 
- It is similar to type casting in other languages like C# and Java. However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript. 
- It is merely a way to let the TypeScript compiler know the type of a variable.

```shell
let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number
```

#### Resources
1. [Type Assertion in TypeScript](https://www.tutorialsteacher.com/typescript/type-assertion)