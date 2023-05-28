// classe abstrata Conta (com os métodos sacar, depositar e getSaldo)
abstract class Conta {
  protected saldo: number;
  protected cliente: Cliente;
  protected agencia: string;

  constructor(cliente: Cliente) {
    this.saldo = 0;
    this.cliente = cliente;
    this.agencia = "0001";
  }

  abstract tipoConta(): string;

  // Método que faz o depósito de um valor na conta e mostra o saldo atual
  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
      return;
    }

    this.saldo += valor; // deposita o valor na conta
    console.log(
      `Depósito de R$${valor.toFixed(
        // toFixed pra mostrar apenas duas casas decimais (ficar bonitinho :D)
        2
      )} realizado na conta ${this.tipoConta()} do cliente ${
        this.cliente.nome
      }. Saldo atual: R$${this.saldo.toFixed(2)}.`
    );
  }

  // Método que faz o saque de um valor na conta e mostra o saldo atual
  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
      return;
    }

    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
      return;
    }

    this.saldo -= valor; // saca o valor da conta
    console.log(
      `Saque de R$${valor.toFixed(
        2
      )} realizado na conta ${this.tipoConta()} do cliente ${
        this.cliente.nome
      }. Saldo atual: R$${this.saldo.toFixed(2)}.`
    );
  }

  // Método que retorna o saldo atual da conta
  getSaldo(): number {
    return this.saldo;
  }
}

// classes PessoaFisica e PessoaJuridica (que herdam de Conta)
class PessoaFisica extends Conta {
  private cpf: string;

  constructor(cliente: Cliente, cpf: string) {
    super(cliente);
    this.cpf = cpf;
  }

  // Método que retorna o tipo da conta
  tipoConta(): string {
    return "Pessoa Física";
  }
}

class PessoaJuridica extends Conta {
  private cnpj: string;

  constructor(cliente: Cliente, cnpj: string) {
    super(cliente);
    this.cnpj = cnpj;
  }

  tipoConta(): string {
    return "Pessoa Jurídica";
  }
}

// classe Cliente (com os atributos nome e contas) e o método adicionarConta
class Cliente {
  nome: string;
  contas: Conta[];

  constructor(nome: string) {
    this.nome = nome;
    this.contas = [];
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
}

// Criando alguns clientes e contas de exemplo
const cliente1 = new Cliente("João");
const pf1 = new PessoaFisica(cliente1, "123.456.789-00");
const pj1 = new PessoaJuridica(cliente1, "12.345.678/0001-00");
cliente1.adicionarConta(pf1);
cliente1.adicionarConta(pj1);

const cliente2 = new Cliente("Maria");
const pf2 = new PessoaFisica(cliente2, "987.654.321-00");
cliente2.adicionarConta(pf2);

// Realizando operações nas contas
pf1.depositar(1000);
pf1.sacar(500);

pj1.depositar(5000);
pj1.sacar(2000);

pf2.depositar(200);
pf2.sacar(300);

// Mostrando os clientes e suas contas
const clientes: Cliente[] = [cliente1, cliente2];
for (const cliente of clientes) {
  console.log(`Cliente: ${cliente.nome}`);
  for (const conta of cliente.contas) {
    console.log(`- Tipo de conta: ${conta.tipoConta()}`);
    console.log(`  Saldo: R$${conta.getSaldo().toFixed(2)}`);
  }
  console.log("-------------------------");
}
