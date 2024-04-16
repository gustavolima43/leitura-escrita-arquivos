const fs = require('fs/promises');

console.log('antes de ler');
// leitura de arquivos síncrono
// const a = fs.readFileSync('a.txt').toString();
// console.log(a);

//const a = fs.readFile('a.txt');

// a.then((data) => {
//     console.log(data.toString());
// })

// a.catch(() => {
//     console.log(erro);
// })


(async function(){
    const a = await fs.readFile('a.txt');
    
    console.log(a.toString());

})();


console.log('depois de ler');