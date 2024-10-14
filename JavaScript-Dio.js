const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o nome do herói
readline.question('Digite o nome do herói: ', (nomeHeroi) => {
  
  // Pergunta a quantidade de experiência (XP)
  readline.question('Digite a quantidade de experiência (XP) do herói: ', (xpHeroi) => {
    
    let xp = parseInt(xpHeroi);  // Converte a string para número inteiro
    let nivel = '';

    // Estrutura de decisão para determinar o nível do herói
    if (xp < 1000) nivel = 'Ferro';
    else if (xp <= 2000) nivel = 'Bronze';
    else if (xp <= 5000) nivel = 'Prata';
    else if (xp <= 7000) nivel = 'Ouro';
    else if (xp <= 8000) nivel = 'Platina';
    else if (xp <= 9000) nivel = 'Ascendente';
    else if (xp <= 10000) nivel = 'Imortal';
    else nivel = 'Radiante';

    // Exibe o resultado no terminal
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);

    readline.close();  // Encerra a interface do readline
  });
});
