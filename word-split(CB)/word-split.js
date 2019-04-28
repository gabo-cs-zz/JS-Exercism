function WordSplit(strArr) { 
    var dictionary = strArr[1].split(/,/);
    var word = strArr[0];
    var first = [];
    var last = [];
    var result = '';
    
    for(var item of dictionary){
        var pattern1 = new RegExp(`\^${item}`);
        var pattern2 = new RegExp(`${item}\$`);
        if (pattern1.test(word)) {
          first.push(item);
        }
        if (pattern2.test(word)) {
          last.push(item);
        }
    }
    
    for(var i of first){
      for(var j of last){
        if (i + j === word){
            result = `${i},${j}`
        }
      }
    }
    
    return result || 'not possible';
    
}
   
// keep this function call here 
WordSplit(readline());