/*
Problem:
Implement regular expression matching with the following special characters:
. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element That is, implement a
function that takes in a string and a valid regular expression and returns whether or
not the string matches the regular expression.
For example, given the regular expression "ra." and the string "ray", your function
should return true. The same regular expression on the string "raymond" should return
false.
Given the regular expression ".*at" and the string "chat", your function should return
true. The same regular expression on the string "chats" should return false.
*/

//
const actualStr1 = "ray"
const alteredStr1 = "*.y*"

function checkStr(actual, alter){
  
  // if alter doesnt includes "*"
  if (!alter.includes("*")) {
    
    let result = true
    
    if (actual.length !== alter.length) return false
    
    actual.split("").forEach((el, index)=>{
      if (el!==alter[index]&&alter[index]!==".") {
        result = false
      }
    })
    return result
  }
  
  // if alter includes "*"
  else{
    let result = true
    
    alter.split("").forEach((el, index)=>{
      if (el!==actual[index]&&el!==".") {
        if (el!=="*"&&alter[index+1]!=="*") {
          result = false
        }
      }  
    })
    
    return result
  }
}


// driver code
console.log(checkStr(actualStr1, alteredStr1));
