const readlineSync = require('readline-sync');

const ignorar = ["de", "da", "das", "do", "dos", "e"];

function formatarnome(nomecompleto) {
   
    // Divide o nome completo em partes usando espaço como delimitador
    const separarnome = nomecompleto.split(' ');

    // Filtra as partes para remover os conectores listados em `ignorar`
    const filtrarnome = separarnome.filter(part => !ignorar.includes(part.toLowerCase()));

    // Extrai o último nome (considerado o sobrenome)
    const ultimonome = filtrarnome.pop().toUpperCase();

    // Gera as iniciais dos nomes restantes
    const initials = filtrarnome.map(name => name.charAt(0).toUpperCase()).join('. ') + '.';

    // Retorna a string no formato "SOBRENOME, INICIAIS"
    return `${ultimonome}, ${initials}`;
}

const nomecompleto = readlineSync.question("Digite o nome completo do colaborador: ");
const nomeformatado = formatarnome(nomecompleto);
console.log(`Nome formatado para o crachá: ${nomeformatado}`);