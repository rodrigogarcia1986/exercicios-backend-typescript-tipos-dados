type Usuario02 = {
    nome: string,
    idade: number,
    status: boolean

}
const usuarios: Usuario02[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscaUsuarioPorNome = (lista: Usuario02[], nome: string): Usuario02[] => {
    return lista
        .filter(usuario => usuario.nome.toLowerCase().includes(nome.toLowerCase()))
}

console.log(buscaUsuarioPorNome(usuarios,'jo'))