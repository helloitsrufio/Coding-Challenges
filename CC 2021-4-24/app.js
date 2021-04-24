//Parameters: Need to remove space from string. Will always be a string. Always need to return given string and do so without
//spaces. 

//Results: Will return any given string without spaces.

//Examples: Ex. Given 'I am a fish', will return 'Iamafish'. Ex. Given 'Ruthie is the bomb diggity', will return
//'Ruthieisthebombdiggity'

//Pseudocode
//Write out function which takes one parameter.
function noSpace(x){
    //return split method with (' ')
    //will yield each word as one element, but I need to join together based on no space. Use join('')
    return x.split(' ').join('')
}