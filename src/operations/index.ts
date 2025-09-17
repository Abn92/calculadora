export function soma(a: number, b: number): number {
    return a + b;
}

export function subtracao(a: number, b: number): number {
    return a - b;
}

export function multiplicacao(a: number, b: number): number {
    return a * b;
}

export function divisao(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}