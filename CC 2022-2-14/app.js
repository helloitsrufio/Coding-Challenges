//Create a dog object that has four properties and three methods
let dog {
    'hair':true,
    'nose':true,
    'feathers':false,
    'shoes': false,

    scratch(),
    bark(),
    sleep()

}
//Attempt at this challenge

//Teacher soln
let dog = {}

dog.breed = 'poodle'
dog.color = 'golden'
dog.legs = 4
dog.name = 'Fido'

dog.bark = function(){
    console.log('WOOF')
}
dog.jump = function(){
    console.log('BLAST OFF')
}
dog.fetch = function(){
    console.log('ZOOOOOM')
}