
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

        const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);

        const mediaMensal = somaFaturamento / diasComFaturamento.length;
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        console.log(`O menor valor de faturamento diário foi: ${menorValor}`);
        console.log(`O maior valor de faturamento diário foi: ${maiorValor}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    } catch (error) {
        console.error("Erro ao buscar ou processar os dados:", error);
    }
}

dadosDiarios();


// 4)

const FaturamentoDistribuidora = [
    {
      "estado": "SP",
      "valor": 67836.43
    },
    {
      "estado": "RJ",
      "valor": 36678.66
    },
    {
      "estado": "MG",
      "valor": 29229.88
    },
    {
      "estado": "ES",
      "valor": 27165.48
    },
    {
      "estado": "Outros",
      "valor": 19849.53
    }
]

const fatDistribuidora = (dados) => {
    const totalFaturamento = dados.reduce((soma, item) => soma + item.valor, 0);
    // console.log(dados);

    dados.forEach(({estado, valor})=>{
        const porcentagem = (valor / totalFaturamento) * 100;
        console.log(`Estado: ${estado}, Porcentagem: ${porcentagem.toFixed(2)}%`);
    });

    // console.log('tot',totalFaturamento);
    
}

console.log(fatDistribuidora(FaturamentoDistribuidora));

// 5)

const reverseString = (str)=>{

    let strInvetida = ''

    for(let i = str.length - 1; i >= 0; i--) strInvetida += str[i]
    
    console.log(`String não invertida: ${str}`);
    console.log(`String invertida: ${strInvetida}`);
    
}

const strData = 'TRAGET'
reverseString(strData)