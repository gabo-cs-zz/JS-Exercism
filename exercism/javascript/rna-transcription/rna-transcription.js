// Given a DNA strand, return its RNA complement (per RNA transcription).
export function toRna(str){
	let res = '';
  if (str.match(/[BD-FH-SU-Z]/)){
    throw 'Invalid input DNA.';
	} else {
    for(let c of str){
      res += transc(c);
    }
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
