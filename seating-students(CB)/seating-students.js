function SeatingStudents(arr) { 

  var k = arr[0]; //number of desks
  var o = arr.slice(1); // occupiedDesks
  var count = 0;
  
  for(var i = 1; i <= k; i++){
      if(!o.includes(i)){
          if(!o.includes(i-2) && i > 2) count += 1
          
          if(!o.includes(i+2) && i < (k-1) ) count += 1
          
          if( !( (i % 2) || o.includes(i-1) ) || ( (i % 2) && !o.includes(i+1) ) ){
            count += 1;
          }
      }
  }
  
  return count/2;

}
   
// keep this function call here 
SeatingStudents(readline());