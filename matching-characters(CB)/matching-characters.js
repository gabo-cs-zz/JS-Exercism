function maxCount(part){
    var g = new Set(part.split(""));
    return g.size;
}

function MatchingCharacters(str) {
  var result = 0;
  for(var i = 0; i < str.length - 1; i++){
     var last = str.lastIndexOf(str[i]);
     var part = str.slice(i+1, last);
     if (part) {
        result = Math.max(result, maxCount(part) );
     }
  }  
  return result; 
         
}
   
// keep this function call here 
MatchingCharacters(readline());