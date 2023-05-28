"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Turno;
(function (Turno) {
    Turno["Manh\u00E3"] = "manh\u00E3";
    Turno["Tarde"] = "tarde";
    Turno["Noite"] = "noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["Humanas"] = "humanas";
    Area["Biol\u00F3gicas"] = "biol\u00F3gicas";
    Area["Exatas"] = "exatas";
})(Area || (Area = {}));
function ValidarTamanho(minLength) {
    return function (target, key) {
        let value = target[key];
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
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
    constructor(descricao, turno, cursoDescricao, cursoArea) {
        this.id = Turma.idCounter++;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = {
            descricao: cursoDescricao,
            area: cursoArea,
        };
    }
    setDescricao(value) {
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
Turma.idCounter = 1;
__decorate([
    ValidarTamanho(10),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Turma.prototype, "setDescricao", null);
class GerenciadorTurmas {
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
        this.turmas.push(turma);
    }
    excluirTurma(id) {
        const index = this.turmas.findIndex((turma) => turma.id === id);
        if (index !== -1) {
            this.turmas.splice(index, 1);
        }
    }
    alterarTurma(id, novaDescricao) {
        const turma = this.buscarTurma(id);
        if (turma) {
            turma.setDescricao(novaDescricao);
        }
    }
    buscarTurma(id) {
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
const turma1 = new Turma("Turma de Matemática", Turno.Manhã, "Matemática", Area.Exatas);
const turma2 = new Turma("Turma de História", Turno.Tarde, "História", Area.Humanas);
gerenciador.adicionarTurma(turma1);
gerenciador.adicionarTurma(turma2);
gerenciador.imprimirTurmas();
console.log("--- Após alteração ---");
gerenciador.alterarTurma(1, "Nova descrição da turma de Matemática");
gerenciador.imprimirTurmas();
