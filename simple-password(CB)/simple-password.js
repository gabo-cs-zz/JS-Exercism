function SimplePassword(str) {
    return ( /[A-Z]/.test(str) && /\d/.test(str) &&
    /[^\w\s/]/.test(str) && !/password/i.test(str) &&
    str.length > 7 && str.length < 31 );
}
   
// keep this function call here 
SimplePassword(readline());