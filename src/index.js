let offset
let string

document.getElementById('login-medic').style.display='none'
document.getElementById('login-patient').style.display='none'
document.getElementById('diagnostic-medic-patient').style.display='none'
document.getElementById('btn-go-back').style.display='none'

document.getElementById('btn-medic').addEventListener('click',() =>{ 
  document.getElementById('login-medic').style.display='block'
  document.getElementById('btn-go-back').style.display='block'
  document.getElementById('login').style.display='none'
})
document.getElementById('btn-patient').addEventListener('click',() =>{
  document.getElementById('login-patient').style.display='block'
  document.getElementById('btn-go-back').style.display='block'
  document.getElementById('login-medic').style.display='none'
  document.getElementById('login').style.display='none'
})
document.getElementById('btn-send-medic').addEventListener('click',() =>{
  document.getElementById('diagnostic-medic-patient').style.display='block'
  document.getElementById('btn-go-back').style.display='block'
  document.getElementById('login-patient').style.display='none'
  document.getElementById('login-medic').style.display='none'
})
document.getElementById('btn-send-patient').addEventListener('click',() =>{
  document.getElementById('diagnostic-medic-patient').style.display='block'
  document.getElementById('btn-go-back').style.display='block'
  document.getElementById('login-patient').style.display='none'
  document.getElementById('login-medic').style.display='none'
})
document.getElementById('btn-go-back').addEventListener('click',() =>{
  document.getElementById('login').style.display='block'
  document.getElementById('diagnostic-medic-patient').style.display='none'
  document.getElementById('btn-go-back').style.display='none'
})

document.getElementById('btn-encode').addEventListener('click', () =>{ 
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text').value
  cipher.encode(offset, string)  
})
document.getElementById('btn-decode').addEventListener('click', () =>{
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text2').value
  cipher.decode(offset, string)
})



