window.DECKS = window.DECKS || {};
window.DECKS["pt"] = window.DECKS["pt"] || {};
window.DECKS["pt"]["taxi"] = [
  { "d":1, "prompt":"You get in. Say where you're going.", "answers":["Para [destination] por favor", "Vou para [destination]", "Leva-me a [destination]"] },
  { "d":1, "prompt":"Say please stop here.", "answers":["Para aqui por favor", "Pode parar aqui", "Aqui está ótimo"] },
  { "d":1, "prompt":"Ask if they accept card.", "answers":["Aceita cartão?", "Pode pagar no cartão?", "Tem maquininha?"] },
  { "d":1, "prompt":"Ask roughly how much the ride costs.", "answers":["Quanto vai custar mais ou menos?", "Mais ou menos quanto é?", "Qual o valor?"] },
  { "d":1, "prompt":"Ask how long the ride will take.", "answers":["Quanto tempo leva?", "Quantos minutos?", "Quanto demora?"] },
  { "d":1, "prompt":"You've arrived. Pay and thank the driver.", "answers":["Obrigado/a quanto é?", "Muito obrigado/a", "Valeu bom dia!"] },
  { "d":2, "prompt":"Say a little further ahead please.", "answers":["Um pouco mais adiante", "Vai um pouco mais", "Mais pra frente"] },
  { "d":2, "prompt":"Say turn left.", "answers":["Vira à esquerda", "Dobra à esquerda", "Vira aqui à esquerda"] },
  { "d":2, "prompt":"Say turn right.", "answers":["Vira à direita", "Dobra à direita", "Vira aqui à direita"] },
  { "d":2, "prompt":"Say go straight ahead.", "answers":["Vai em frente", "Segue em linha reta", "Direto"] },
  { "d":2, "prompt":"Driver says cash only. Acknowledge.", "answers":["Ah tudo bem tenho dinheiro", "Não tem problema pago em dinheiro", "Ok tenho dinheiro"] },
  { "d":2, "prompt":"Ask for a receipt.", "answers":["O recibo por favor", "Pode me dar um comprovante?", "Preciso do recibo"] },
  { "d":2, "prompt":"Ask the driver to drive more carefully.", "answers":["Pode ir mais devagar?", "Um pouco mais calmo por favor", "Mais devagar obrigado/a"] },
  { "d":3, "prompt":"Ask the driver to use GPS / fastest route.", "answers":["Usa o GPS por favor", "Vai pela rota mais rápida", "Pode ligar o GPS?"] },
  { "d":3, "prompt":"Traffic is bad. Ask if there's another route.", "answers":["Tem outro caminho?", "Podemos desviar do trânsito?", "Tem rota alternativa?"] },
  { "d":3, "prompt":"Confirm you're going the right way.", "answers":["Estamos indo para [destination]?", "É por aqui para [destination]?", "Estamos no caminho certo?"] },
  { "d":3, "prompt":"Ask the driver to wait a moment.", "answers":["Pode esperar um momento?", "Um segundo por favor", "Espera aí um instante"] },
  { "d":4, "prompt":"Ask the driver for a local restaurant recommendation.", "answers":["Conhece algum restaurante bom por aqui?", "Onde os locais costumam comer?", "Tem sugestão de restaurante?"] },
  { "d":4, "prompt":"The meter seems high. Politely question it.", "answers":["Com licença o taxímetro parece um pouco alto", "O valor parece alto para essa distância", "Está correto o valor?"] }
];
