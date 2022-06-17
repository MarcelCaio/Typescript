type pessoa = {
    nome: string,
    idade: number,
    profissao: profissao
}

enum profissao {
    Atriz,
    Padeiro
}


let pessoa1: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};


let pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
}

let pessoa3: pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
}