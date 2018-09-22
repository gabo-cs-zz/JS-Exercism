// Given a DNA strand, return its RNA complement (per RNA transcription).
export function toRna(str){
  let res = '';
  if (str.match(/[^CGTA]/)){
    throw new Error('Invalid input DNA.');
  }
  for(let c of str){
    res += transc(c);
  }
  return res;
}

function transc(char){
  switch(char){
    case 'G': return 'C';
    case 'C': return 'G';
    case 'T': return 'A';
    case 'A': return 'U';
  }
}
