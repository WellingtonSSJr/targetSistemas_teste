
// 1)
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K
    console.log(SOMA);   
}

// 2)
const sequenceFibonacci = (number) => {
    if (number < 0) return false;
    let number1 = 0, number2 = 1;
  
    while (number1 <= number) {
      if (number1 === number) return `${number} pertence à sequência.`;
      
      const proximo = number1 + number2;
      number1 = number2;
      number2 = proximo;
    }
  
    return `${number} não pertence à sequência.`;
}
  
  const numero = 5;
  console.log(sequenceFibonacci(numero));


// 3)

const dados = fetch('./dados.json')

async function dadosDiarios() {
    try {
        const dados = await fetch('./dados.json');
        const dadosJson = await dados.json();
        const diasComFaturamento = dadosJson.filter(dia => dia.valor > 0);

        const menorValor = diasComFaturamento.reduce((valMinAcc, dia) => {
            return dia.valor < valMinAcc ? dia.valor : valMinAcc;
        }, diasComFaturamento[0].valor); 

        const maiorValor = diasComFaturamento.reduce((valMaxAcc, dia) => {
            return dia.valor > valMaxAcc ? dia.valor : valMaxAcc;
        }, diasComFaturamento[0].valor); 

        const mediaDiaMes = 

        console.log(`O menor valor de faturamento diário foi: ${menorValor}`);
        console.log(`O maior valor de faturamento diário foi: ${maiorValor}`);
    } catch (error) {
        console.error("Erro ao buscar ou processar os dados:", error);
    }
}

dadosDiarios();

  