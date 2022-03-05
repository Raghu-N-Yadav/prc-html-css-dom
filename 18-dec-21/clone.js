const obj = {
    name: "raghu",
    about: {
        age: 17,
        class: 7
    }
}

const clone = Object.assign({}, obj.about)

// clone.name = 'WOW'
clone.age = 18;

console.log(obj.name)
console.log(obj.about.age)