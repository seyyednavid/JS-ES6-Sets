// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
// it does not 100 (repetitive) again => they have to be unique values
set1.add(100);

console.log(set1);

//  Add values via second way
const set2 = new Set([1, true, "string"]);
console.log(set2);

//  Get count
console.log(set1.size);

console.log("-----------------");
// --------------------------------------------

// check the values
console.log(set1.has(100));
console.log(set1.has(50 + 50));

/* it's the exact same character because this is a reference object and is not primitive value that is actually stored in the stack */
console.log(set1.has({ name: "John" }));
// false => it's pointing to a different location in memory
console.log({ name: "John" } === { name: "John" });

console.log("------------------");
// --------------------------------------------

//  Delete from set
set1.delete(100);
console.log(set1);

console.log("------------------");
// -------------------------------------------

// Iterate through set

// For...of
for (let item of set1) {
  console.log(item);
}
//  The same result
for (let item of set1.values()) {
  console.log(item);
}

//  ForEach
set1.forEach((value) => {
  console.log(value);
});

console.log("-----------------");
// -------------------------------------------

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
