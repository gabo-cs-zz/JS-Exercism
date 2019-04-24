export function parse(input){
  return input
          .replace(/[^a-zA-Z']/g, ' ')
          .split(' ')
          .filter(i => i != '')
          .map(i => i[0])
          .join('')
          .toUpperCase();
}