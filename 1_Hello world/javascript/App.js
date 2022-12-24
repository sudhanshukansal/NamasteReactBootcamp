const createElement = document.createElement('h1');
// console.log(CreateElement)

const createText = document.createTextNode('Hello');
// console.log(CreateText)
createElement.append(createText);
// console.log(CreateElement)

const add = document.getElementsById("root");

// console.log(Add)
// console.log(Array.isArray(Add))
add.appendchild(createElement)

