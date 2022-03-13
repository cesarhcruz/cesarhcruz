var data = new Date()
var anoAtual = data.getFullYear()
var mesAtual = data.getMonth() + 1
var diaAtual = data.getDate()
var meuNascimento = "13/03/1988"
var anoNasc = meuNascimento.split('/')[2]
var mesNasc = meuNascimento.split("/")[1]
var diaNasc = meuNascimento.split("/")[0]
if (mesNasc > mesAtual){
  var idade = anoAtual - anoNasc - 1
} else if (mesNasc == mesAtual ){
  if (diaNasc <= diaAtual){
   var idade = anoAtual - anoNasc 
  } else  {
    var idade = anoAtual - anoNasc - 1
  }
} else {
  var idade = anoAtual - anoNasc
}
console.log(idade)
