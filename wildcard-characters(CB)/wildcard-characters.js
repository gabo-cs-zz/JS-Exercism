function WildcardCharacters(str) {

    var first = str.split(" ")[0];
    var last = str.split(" ")[1];
    var re = new RegExp("[a-zA-Z]");
    var index = 3;
    var item = last[0];
    var count = 0;

    if (!first.includes('*') && re.test(last)) return true;

    if (first.search(/\d/) !== -1) {
        index = first[first.search(/\d/)];
    }

    for(var i = 1; i < last.length; i++){
        if (item === last[i]){
            if (re.test(item)) count += 1;
        } else {
            item = last[i];
            if (count == index) break;
        }
    }

    return count == index;
}
   
// keep this function call here 
WildcardCharacters(readline());