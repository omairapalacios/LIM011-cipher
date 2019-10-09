
window.cipher = {

encode: (offset, string) => {
let asciiString
let result=''

  for (let i = 0; i < string.length; i++) {
    asciiString = string.charCodeAt(i)
    if (asciiString >= 65 && asciiString <= 90) { // conditional to uppercase
      result += String.fromCharCode (((asciiString - 65) + parseInt(offset)) % 26 + 65)
    } else if (asciiString >= 97 && asciiString <= 122) { // conditional to lowercase
      result += String.fromCharCode (((asciiString - 97) + parseInt(offset)) % 26 + 97)
    } else if (asciiString >= 48 && asciiString <= 57){ // conditional to numbers
      result += String.fromCharCode (((asciiString - 48) + parseInt(offset)) % 10 + 48)
    }else {
      result += String.fromCharCode(asciiString) //conditional to any character
    }
    document.getElementById('string-Text2').innerHTML = result 
  } 
}
,

decode: (offset, string) => {
  let asciiString
  let result=''
  for (let i = 0; i < string.length; i++) {
    asciiString = string.charCodeAt(i)
    if (asciiString >= 65 && asciiString <= 90) { // conditional to uppercase
      result += String.fromCharCode (((asciiString - 90 - parseInt(offset)) % 26)+90)
    } else if (asciiString >= 97 && asciiString <= 122) { // conditional to lowercase
      result += String.fromCharCode (((asciiString - 122 - parseInt(offset)) % 26) +122)
    } else if (asciiString >= 48 && asciiString <= 57) { // conditional to numbers
      result += String.fromCharCode (((asciiString - 57 - parseInt(offset)) % 10 ) + 57)
    } else {
      result += String.fromCharCode(asciiString) // conditional to any character
    }
    document.getElementById('string-Text2').innerHTML = result   
  } 
}
};
