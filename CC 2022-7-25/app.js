//https://www.structy.net/problems/linked-list-values

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// test_00:

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

// test_01:

// const x = new Node("x");
// const y = new Node("y");

// x.next = y;

// // x -> y

// linkedListValues(x); // -> [ 'x', 'y' ]

// test_02:

// const q = new Node("q");

// // q

// linkedListValues(q); // -> [ 'q' ]

// test_03:

// linkedListValues(null); // -> [ ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  // todo
};

module.exports = {
  linkedListValues,
};

//P: Wants us to make a function (linkedListValues) whose parameter is the head of a linked list. Will we always be given a head of a linked list? Nah
//R: Return an array containing values of nodes in the linked list. 
//E:
//P: Make a function that takes in a param
function linkedListValues(head){
    // make an empty array for the future list
    const array = []
    //we make a variable that has the value of 'head'
    let current = head
    //make a while loop
    while(current != null){
        array.push(current.val)
        current = current.next
    } 
    return array
        //condition of while value is still a thing
        // we push that value.val (tapping into that linked list syntax baby)
        //then we reassign that value to be value.next (tapping into that syntax that grabs the next item in the linked list)
    //then we return the og array
}
console.log(linkedListValues(a),[ 'a', 'b', 'c', 'd' ])
console.log(linkedListValues(x),[ 'x', 'y' ])
console.log(linkedListValues(q),[ 'q' ])
console.log(linkedListValues(null),[ ])

//the computer LOVED IT