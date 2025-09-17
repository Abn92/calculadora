export type Operacao = 'soma' | 'subtracao' | 'multiplicacao' | 'divisao';

export interface Resultado {
    valor: number;
    operacao: Operacao;
}