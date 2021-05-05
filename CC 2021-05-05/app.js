// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that:

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

//P: Will always be given a string, will always be in caps. Will take in special characters and sort based on that. 
//R: (LASTNAME, FIRSTNAME) -> alphabetical order
//E: 'John:Smith; Jane:Doe;' -> '(DOE, JANE)(SMITH, JOHN)'
//   'Leon:Noel; Elon:Musk; Richard:Branson;' -> '(BRANSON,RICHARD)(MUSK,ELON)(NOEL,LEON)'
//P: Make a function that takes in a string
function nameList(str){
    // Make all of string.toUpperCase()
    console.log(str.split(';').toUpperCase())
    //   Sort in alphabetical order by last name, maybe use .sort() (not sure how to do last name though)
    console.log str.map(l=> l.sort())
    //   IF IT IS THE CASE that the last names are the same, sort by first name (.sort()?)
    //   return .join(())   
}
//   This one is damn HARD. I don't have any good ideas about how to solve it, really. I can't even test it because it doesn't like the : in .split(:).


//Teacher soln:
function meet(str){
    let newStr = str.toUpperCase().split(';')
    .map(n => n.split(':').reverse().join(', '))
    .sort()
    .join(')(')
    return `(${newStr})`
}

//I...don't totally understand this. I need to think about it more. Definitely way above my level. 