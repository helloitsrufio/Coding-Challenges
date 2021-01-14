//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 
namesList = ['Annie', 'Rachel', 'Ruth'];

function addPersonToList(name) {
    namesList.push(name);
    alert(`Hello ${name}, you are currently ${namesList.length}th on the list.`)
};

addPersonToList('Sam');