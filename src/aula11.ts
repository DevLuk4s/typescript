let svalor: number;
let uvalor: string;
let vvalor: unknown;

vvalor = 10;
svalor = <number>vvalor;
uvalor = <string>vvalor;

console.log(svalor);
console.log(uvalor);
console.log(vvalor);
