// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
// test_00:

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// // 2 -> 8 -> 3 -> -1 -> 7

// sumList(a); // 19

// test_01:

// const x = new Node(38);
// const y = new Node(4);

// x.next = y;

// // 38 -> 4

// sumList(x); // 42

// test_02:

// const z = new Node(100);

// // 100

// sumList(z); // 100

// test_03:

// sumList(null); // 0

//writing a function called sumList. Takes in a linked list with numbers.
// should return the sum of a linked list (all the stuff added together)
//i was navigating with current.next

console.log(sumList(x), 42);
console.log(sumList(z), 100);
console.log(sumList(null), 0);

//Make a function called sumList
function sumList(head) {
  //make an empty sum variable
  let sum = 0;
  //make a variable that captures the value of head (and therefore the linked list)
  let current = head;
  while (current != null) {
    //Grab the current value and add it to sum
    sum += current.val;
    //Change the current variable to be variable.next
    current = current.next;
    //return sum?
  }
  return sum;
}
