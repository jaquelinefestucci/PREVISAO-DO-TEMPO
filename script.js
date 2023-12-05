function atualizarDataHora() {
   let dataHora = new Date();
   let data = dataHora.toLocaleDateString();
   let hora = dataHora.toLocaleTimeString();

    document.getElementById ("dataHoraAtual").innerHTML = 'Clima atual ' + data + "📅  "+ hora + "  ⌚";
}

 atualizarDataHora();
 setInterval(atualizarDataHora, 1000);

 let chave = "365d08bad9ea82295710e1fecdb145bf"

 function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".retono_lupacidade").innerHTML = "Previsão do tempo em "+dados.name+" , "+dados.sys.country+"."
    document.querySelector(".temperatura").innerHTML= Math.floor (dados.main.temp)+"°C"
    document.querySelector(".temp-min").innerHTML= Math.floor (dados.main.temp_min)+"°"
    document.querySelector(".temp-max").innerHTML= Math.floor (dados.main.temp_max)+"°"
    document.querySelector(".umidade").innerHTML= "Umidade: "+dados.main.humidity +" %"
    document.querySelector(".descricao").innerHTML= dados.weather[0].description 
    document.querySelector(".sensacao").innerHTML= "Sensação térmica de "+Math.floor(dados.main.feels_like)+"°C"
    document.querySelector(".vento").innerHTML= "🍃 Vento: "+Math.floor(dados.wind.speed)+" km/h"
    document.querySelector(".img-ceu").src = "https://openweathermap.org/img/wn/"+dados.weather[0].icon+".png"
}
 async function buscarCidade(cidade) {
      let dados = await fetch (
    "https://api.openweathermap.org/data/2.5/weather?q=" + cidade  + "&appid=" + chave + 
    "&lang=pt_br" + 
    "&units=metric" 
    ).then (resposta => resposta.json());
    
    colocarNaTela(dados);
      
   
 }

 
 function pesquisar() {
    let cidade = document.querySelector(".input-cidade").value 
    buscarCidade (cidade)
 }