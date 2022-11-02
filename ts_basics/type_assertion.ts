let mess;
mess = "type string";

// Assert that mess is trsing, not any.
let printMess = (<string>mess).endsWith('i');
let alaternativePrint = (mess as string).endsWith('e');

console.log(printMess);
// console.log(alaternativePrint);

let code: any = 6726;
let employeeCode = <number> code;
let staffCode = code as number;