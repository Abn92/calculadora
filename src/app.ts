// Este arquivo é o ponto de entrada da aplicação. Ele inicializa a calculadora, gerencia a entrada do usuário e chama as operações apropriadas.

import * as readline from 'readline';
import { soma, subtracao, multiplicacao, divisao } from './operations/index';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcular = (operacao: string, num1: number, num2: number): number | null => {
    switch (operacao) {
        case 'soma':
            return soma(num1, num2);
        case 'subtracao':
            return subtracao(num1, num2);
        case 'multiplicacao':
            return multiplicacao(num1, num2);
        case 'divisao':
            return divisao(num1, num2);
        default:
            console.log('Operação inválida');
            return null;
    }
};

const iniciarCalculadora = () => {
    rl.question('Digite a operação (soma, subtracao, multiplicacao, divisao): ', (operacao) => {
        rl.question('Digite o primeiro número: ', (num1) => {
            rl.question('Digite o segundo número: ', (num2) => {
                const resultado = calcular(operacao, parseFloat(num1), parseFloat(num2));
                if (resultado !== null) {
                    console.log(`Resultado: ${resultado}`);
                }
                rl.close();
            });
        });
    });
};

iniciarCalculadora();