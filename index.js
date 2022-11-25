const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased (){
  return tutorials.map((words) =>{
    let my_split_words = words.split(" ")
    
    let new_words_Array = my_split_words.map((word) =>{
      
      return word[0].toLocaleUpperCase() + word.slice(1)
      
    })
    return new_words_Array.join(" ")
  })
 

 }
 
