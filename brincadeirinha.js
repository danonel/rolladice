function rollDice(){
        
    var dice1=document.getElementById("dice1")
    var dice2=document.getElementById("dice2")
    var status=document.getElementById("resultado")
    var d1=Math.floor(Math.random()*6)+1
    var d2=Math.floor(Math.random()*6)+1
    var diceResultado=d1+d2
    dice1.innerHTML=d1
    dice2.innerHTML=d2
    var critico="CRITICAL HIT " + `VOCÊ ROLOU ${diceResultado}.`
    if(d1==d2){
        
    return status.innerHTML=critico
    }
      status.innerHTML=`Você rolou ${diceResultado}.`
        
}

















