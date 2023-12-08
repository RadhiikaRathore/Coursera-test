
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (items of names) {

  
   var firstLetter = items.charAt(0)

  
  if (firstLetter.toLowerCase()=='j') {
    byeSpeaker.speak(items);
  } else {
    helloSpeaker.speak(items);
  };
};