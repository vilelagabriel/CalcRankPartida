let qtvitorias;
let qtderrotas;

function Rankeadas(qtvitorias, qtderrotas){
    let rank = qtvitorias - qtderrotas;

    if (rank <= 10) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Ferro");
    } else if (rank <= 20) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Bronze");
    } else if (rank <= 50) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Prata");
    } else if (rank <= 80) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Ouro");
    } else if (rank <= 90) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Diamante");
    } else if (rank <= 100) {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Lendário");
    } else {
        console.log("O Herói tem de saldo de " + rank + " está no nível de Imortal");
    }
}

Rankeadas(10, 1);
Rankeadas(25, 5);