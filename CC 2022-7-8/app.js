// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:
// (1) => (2) => (3) => (4) => (5)
// to
// (5) => (4) => (3) => (2) => (1)

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

 

// Constraints:

//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000

 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


//Linked lists are like arrays, except they know who their neigbors are. 
//So if you have [1,2,3,4] and it's an array, none of the elements know who they are in the array with. But in a linked list (assuming it's the same as above), every element/node in the list knows who else is up in there.
//Every element in a linked list is a node. Just living life. Then after each node is a POINTER. This does the thing where it points at the next node. 
//The first pointer is called the 'head'.
//You know a linked list is done when it hits NULL.
//Spotify: in the player, each song links to the next (and previous) in the playlist. 
//when you're looking for a specific node, in a linked list you are jumping from node to node until you find the one you're looking for. That's different from an array b/c an array you can access it directly. 
//In terms of memory, array data is all stored in one place (:)) Linked list data nodes can be errywhere.
// say you want to access an index in an array (say, A), you would just directly access it buy A[index]. In a linked list, you have to traverse up until that index starting from the head. 
// Lists used when you need push items in front or back many times but don’t need acces to elements in the middle
// a linked list is slower because it doesn’t store the index of its values, making random access at a specific index unavailable without traversing the entire linked list from the head to the tail.
// Singly linked list where each node only has the next pointer
// Doubly linked list where each node has both next and previous pointer
// Circular linked list where the tail node points to the head node, creating a circle (can be singly or doubly)
//ex: Think of a word processor that has the ability to read the text to you. It just needs a link from the 1st word to the 2nd and so on. No need to jump to just a single word (for reading outloud to you)
//in some programming languages, when you create a new array, you have to specify the number of elements your array will be holding (so your computer knows how much space to reserve in memory). so, if you have an array with 100 elements, and you want to delete one element from that array (so you want to end up with an array of size 99), in those languages you would have to create a new array, copy every element in that array (except for that element you're deleting). that would be inefficient!
// if you have a linked list with 100 elements however, & you want to delete an element, you would only have to change one the "next" pointer (so instead of pointing to the direct neighbor it should skip the element that should be deleted and point to its successor)