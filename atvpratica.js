class funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.cargo} na empresa`);
    }   
    trabalhar(){
        console.log(`${this.nome}, está estrabalhando como ${this.cargo}`)
    }
}
class gerente extends funcionario{
    constructor(nome, idade ,cargo, departamento){
    super(nome,idade,cargo);
    this.departamento = departamento
}
gerenciar(){
    console.log(`${this.nome}, está gerenciando o departamento ${this.departamento}.`);
}
}
class desenvolvedor extends funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem;
    }
    programar(){
        console.log(`O ${this.nome} está programando em ${this.linguagem}`);
    }
}
const Gerente = new gerente('Carlos', 25,'Gerente','Marketing');
Gerente.seApresentar();
Gerente.gerenciar()
Gerente.trabalhar()

const Desenvolvedor = new desenvolvedor('Kelvin', 25,'desenvolvedor','javascript');
Desenvolvedor.trabalhar()
Desenvolvedor.seApresentar()
Desenvolvedor.programar()