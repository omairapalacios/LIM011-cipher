let offset
let string
let result
document.getElementById('btn-medic').addEventListener('click',() =>{ 
  document.getElementById('login-medic').classList.remove('hide')
  document.getElementById('btn-go-back').classList.remove('hide')
  document.getElementById('login').classList.add('hide')
})
document.getElementById('btn-patient').addEventListener('click',() =>{
  document.getElementById('login-patient').classList.remove('hide')
  document.getElementById('btn-go-back').classList.remove('hide')
  document.getElementById('login-medic').classList.add('hide')
  document.getElementById('login').classList.add('hide')
})
document.getElementById('btn-send-medic').addEventListener('click',() =>{
  document.getElementById('diagnostic-medic-patient').classList.remove('hide')
  document.getElementById('btn-go-back').classList.remove('hide')
  document.getElementById('login-patient').classList.add('hide')
  document.getElementById('login-medic').classList.add('hide')
})
document.getElementById('btn-send-patient').addEventListener('click',() =>{
  document.getElementById('diagnostic-medic-patient').classList.remove('hide')
  document.getElementById('btn-go-back').classList.remove('hide')
  document.getElementById('login-patient').classList.add('hide')
  document.getElementById('login-medic').classList.add('hide')
})
document.getElementById('btn-go-back').addEventListener('click',() =>{
  document.getElementById('login').classList.remove('hide')
  document.getElementById('diagnostic-medic-patient').classList.add('hide')
  document.getElementById('btn-go-back').classList.add('hide')
})
document.getElementById('btn-encode').addEventListener('click', () =>{ 
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text').value
  result = cipher.encode(offset, string)
  if (result==="offset invalido"){
    alert ("Por favor, ingrese un numero mayor o diferente de cero")
  }
  else{
    document.getElementById('string-Text2').innerHTML = result  
  } 
})
document.getElementById('btn-decode').addEventListener('click', () =>{
  offset=document.getElementById('offset-Text').value
  string = document.getElementById('string-Text2').value
  result = cipher.decode(offset, string)
  if (result==="offset invalido"){
    alert ("Por favor, ingrese un numero mayor o diferente de cero")
  }
  else{
    document.getElementById('string-Text2').innerHTML = result  
  } 
})



