class Carro {
    constructor(imagem, nome, portas, trans, bag, comb, preco, classe, ano, arCond) {
        this.imagem = imagem;
        this.nome = nome;
        this.portas = portas;
        this.trans = trans;
        this.bag = bag;
        this.comb = comb;
        this.preco = preco;
        this.classe = classe;
        this.ano = ano;
        this.arCond = arCond;
    }
}

const sally = new Carro("/imagens/sally.png", "Sally", 2, "Automático", "Pequeno", "Gasolina", 70, "S", 2015, "Sim");
const mcqueen = new Carro("/imagens/mcqueen.png", "Relâmpago McQueen", 2, "Manual", "Não", "Diesel", 100, "S", 2016, "Não");
const mate = new Carro("/imagens/mate.png", "Tom Mate", 2, "Manual", "Grande", "Gasolina", 23, "B", 1955, "Não");
const mack = new Carro("/imagens/mack.png", "Mack", 2, "Manual", "Grande", "Diesel", 90, "A", 2010, "Sim");
const xerife = new Carro("/imagens/xerife.png", "Xerife", 2, "Manual", "Grande", "Gasolina", 30, "B", 1940, "Não");
const fillmore = new Carro("imagens/fillmore.png", "Fillmore", 3, "Manual", "Grande", "Gasolina", 50, "B", 1960, "Não");
const ramone = new Carro("/imagens/ramone.png", "Ramone", 4, "Manual", "Grande", "Gasolina", 60, "A", 1965, "Sim");
const sarge = new Carro("/imagens/sarge.png", "Sargento", 2, "Manual", "Médio", "Gasolina", 40, "B", 2005, "Sim");
const ruivo = new Carro("/imagens/ruivo.png", "Ruivo", 2, "Manual", "Grande", "Diesel", 90, "A", 2012, "Sim");
const guido = new Carro("/imagens/guido.png", "Guido", 2, "Manual", "Minúsculo", "Gasolina", 10, "B", 1955, "Não");
const chick = new Carro("/imagens/chick hicks.png", "Chick Hicks", 2, "Manual", "Não", "Diesel", 95, "S", 2014, "Sim");

const carros = [sally, mcqueen, mate, mack, xerife, fillmore, ramone, sarge, ruivo, guido, chick];
