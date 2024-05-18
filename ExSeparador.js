// Função para verificar se um valor é numérico
function ehNumerico(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Função para separar dados numéricos de strings
function separarDados(entrada) {
    const valores = entrada.split(',').map(item => item.trim()); // Divide a string e remove espaços em branco
    const numeros = [];
    const strings = [];

    valores.forEach(valor => {
        if (ehNumerico(valor)) {
            numeros.push(parseFloat(valor)); // Converte para número e adiciona ao array de números
        } else {
            strings.push(valor); // Adiciona ao array de strings
        }
    });

    return { numeros, strings };
}

// Exemplo de uso
const entrada = "Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999, Roberto, 30, 20, 10, Ruberlan";
const { numeros, strings } = separarDados(entrada);

console.log("Números:", numeros);
console.log("Strings:", strings);