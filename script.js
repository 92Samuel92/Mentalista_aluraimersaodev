var numeroSecreto=parseInt(Math.random()*10)
var tentativas=3
while(tentativas>0) {
  var chute=parseInt(prompt("Digite um número de 1 à 10"))
  if (numeroSecreto==chute) {alert("Você acertou")
  break} else if (chute > numeroSecreto) {alert("o número secreto é menor")
  tentativas=tentativas-1}
  else if (chute < numeroSecreto) {alert("o número secreto é maior")
  tentativas=tentativas-1}
}
if(chute!=numeroSecreto){alert("Suas tentativas acabaram o número era "+numeroSecreto)}
