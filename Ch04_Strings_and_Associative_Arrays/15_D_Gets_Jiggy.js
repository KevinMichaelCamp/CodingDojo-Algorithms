// Write a function that accepts as a parameter a string contianing someone's name. Return a string containing the
// following oh-so-cool greeting: strip off the first letter of the name, capitalize the new word and add 'to the [first letter]'
// Given "Dylan", return "Ylan to the D"

function getJiggy(name){
    var newName = ""
    for (var i = 1; i < name.length; i++){
        newName += name[i];
    }
    var nameCap = newName.charAt(0).toUpperCase() + newName.slice(1);
    return nameCap + " to the " + name[0];
}

console.log(getJiggy("Kevin"));