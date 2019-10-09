let offset
let string

document.getElementById('btn-encode').addEventListener('click', () =>{ // 
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text').value
  cipher.encode(offset, string)  
})
document.getElementById('btn-decode').addEventListener('click', () =>{
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text2').value
  cipher.decode(offset, string)
})

