"use strict";
// classe abstrata Conta (com os métodos sacar, depositar e getSaldo)
class Conta {
    constructor(cliente, agencia) {
        this.saldo = 0;
        this.cliente = cliente;
        this.agencia = agencia;
    }
    // Método que faz o depósito de um valor na conta e mostra o saldo atual
    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this.saldo += valor; // deposita o valor na conta
        console.log(`Depósito de R$${valor.toFixed(
        // toFixed pra mostrar apenas duas casas decimais (ficar bonitinho :D)
        2)} realizado na conta ${this.tipoConta()} do cliente ${this.cliente.nome}. Saldo atual: R$${this.saldo.toFixed(2)}.`);
    }
    // Método que faz o saque de um valor na conta e mostra o saldo atual
    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this.saldo -= valor; // saca o valor da conta
        console.log(`Saque de R$${valor.toFixed(2)} realizado na conta ${this.tipoConta()} do cliente ${this.cliente.nome}. Saldo atual: R$${this.saldo.toFixed(2)}.`);
    }
    // Método que retorna o saldo atual da conta
    getSaldo() {
        return this.saldo;
    }
}
// classes PessoaFisica e PessoaJuridica (que herdam de Conta)
class PessoaFisica extends Conta {
    constructor(cliente, cpf, agencia) {
        super(cliente, agencia);
        this.cpf = cpf;
    }
    // Método que retorna o tipo da conta
    tipoConta() {
        return "Pessoa Física";
    }
}
class PessoaJuridica extends Conta {
    constructor(cliente, cnpj, agencia) {
        super(cliente, agencia);
        this.cnpj = cnpj;
    }
    tipoConta() {
        return "Pessoa Jurídica";
    }
}
// classe Cliente (com os atributos nome e contas) e o método adicionarConta
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.contas = [];
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
}
// Criando alguns clientes e contas de exemplo
const cliente1 = new Cliente("João");
const pf1 = new PessoaFisica(cliente1, "123.456.789-00", "001");
const pj1 = new PessoaJuridica(cliente1, "12.345.678/0001-00", "001");
cliente1.adicionarConta(pf1);
cliente1.adicionarConta(pj1);
const cliente2 = new Cliente("Paula");
const pf2 = new PessoaFisica(cliente2, "987.654.321-00", "002");
cliente2.adicionarConta(pf2);
// Realizando operações nas contas
pf1.depositar(1000);
pf1.sacar(500);
pj1.depositar(5000);
pj1.sacar(2000);
pf2.depositar(200);
pf2.sacar(300);
// Mostrando os clientes e suas contas
const clientes = [cliente1, cliente2];
for (const cliente of clientes) {
    console.log(`Cliente: ${cliente.nome}`);
    for (const conta of cliente.contas) {
        console.log(`- Tipo de conta: ${conta.tipoConta()}`);
        console.log(`  Saldo: R$${conta.getSaldo().toFixed(2)}`);
    }
    console.log("-------------------------");
}
