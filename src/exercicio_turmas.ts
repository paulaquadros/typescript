enum Turno {
  Manhã = "manhã",
  Tarde = "tarde",
  Noite = "noite",
}

enum Area {
  Humanas = "humanas",
  Biológicas = "biológicas",
  Exatas = "exatas",
}

function ValidarTamanho(minLength: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length < minLength) {
        throw new Error(`Deve haver no mínimo ${minLength} caracteres.`);
      }
      value = newValue;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class Turma {
  private static idCounter: number = 1;

  readonly id: number;
  private descricao: string;
  private turno: Turno;
  private curso: {
    descricao: string;
    area: Area;
  };

  constructor(
    descricao: string,
    turno: Turno,
    cursoDescricao: string,
    cursoArea: Area
  ) {
    this.id = Turma.idCounter++;
    this.descricao = descricao;
    this.turno = turno;
    this.curso = {
      descricao: cursoDescricao,
      area: cursoArea,
    };
  }
  @ValidarTamanho(10)
  setDescricao(value: string) {
    this.descricao = value;
  }

  getDescricao() {
    return this.descricao;
  }

  getTurno() {
    return this.turno;
  }

  getCurso() {
    return this.curso;
  }
}

class GerenciadorTurmas {
  private turmas: Turma[];

  constructor() {
    this.turmas = [];
  }

  adicionarTurma(turma: Turma) {
    this.turmas.push(turma);
  }

  excluirTurma(id: number) {
    const index = this.turmas.findIndex((turma) => turma.id === id);
    if (index !== -1) {
      this.turmas.splice(index, 1);
    }
  }

  alterarTurma(id: number, novaDescricao: string) {
    const turma = this.buscarTurma(id);
    if (turma) {
      turma.setDescricao(novaDescricao);
    }
  }

  buscarTurma(id: number) {
    return this.turmas.find((turma) => turma.id === id);
  }

  imprimirTurmas() {
    this.turmas.forEach((turma) => {
      console.log(`ID: ${turma.id}`);
      console.log(`Descrição: ${turma.getDescricao()}`);
      console.log(`Turno: ${turma.getTurno()}`);
      console.log(`Curso: ${turma.getCurso().descricao}`);
      console.log(`Área: ${turma.getCurso().area}`);
      console.log("-------------------------");
    });
  }
}

// Exemplo de uso
const gerenciador = new GerenciadorTurmas();

const turma1 = new Turma(
  "Turma de Matemática",
  Turno.Manhã,
  "Matemática",
  Area.Exatas
);
const turma2 = new Turma(
  "Turma de História",
  Turno.Tarde,
  "História",
  Area.Humanas
);

gerenciador.adicionarTurma(turma1);
gerenciador.adicionarTurma(turma2);

gerenciador.imprimirTurmas();

console.log("--- Após alteração ---");
gerenciador.alterarTurma(1, "Nova descrição da turma de Matemática");
gerenciador.imprimirTurmas();
