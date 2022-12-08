let x = 10;
let dog = {
    name: "Sam",
    age: 2
}

function test(p1, p2) {
    p1 += 2;
    p2.age += 1;
}

test(x, dog);

console.log(`x = ${x}`);
console.log(`Dog age = ${dog.age}`);
