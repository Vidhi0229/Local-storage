localStorage.clear()

// localStorage.setItem('name', 'Vidhi', 'age', 23)

// let names = localStorage.getItem('name')
// let age = localStorage.getItem('age')

//console.log(names, age);

//localStorage.clear()

localStorage.setItem('name', 'Vidhi')

let names = localStorage.getItem('name')
//let age = localStorage.getItem('age')


const todos = [
    {name: "Vidhi", age: 23},
    {name: "Nancy", age: 24},
    {name: "Khushboo", age: 22}
];

localStorage.setItem('todos', JSON.stringify(todos))

const item = localStorage.getItem('todos')
console.log(JSON.parse(item));