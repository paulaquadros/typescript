// função callback

const musicas = ["Juice", "Shake It Off", "What's Up"];

function executarMusicas(longMusica: (index: number) => string) {
  for (let i = 0; i < musicas.length; i++) {
    console.log(longMusica(i));
  }
}

function longMusica(index: number): string {
  return musicas[index];
}

executarMusicas(longMusica);

// função void

function anunciarMusica(musica: string, cantor?: string): void {
  console.log(`Música: ${musica}`);
  if (cantor) {
    console.log(`Cantor: ${cantor}`);
  }
}
anunciarMusica("Musica");
anunciarMusica("Música", undefined);
anunciarMusica("Música", "Cantor");

// função retorno

function tamanhoNome(cantor: string): boolean | number {
  if (cantor.length == 6) {
    return true;
  }
  return cantor.length;
}
console.log("Tamanho 6?: " + tamanhoNome("Music"));

// parâmetro padrão

function pontuarMusica(musica: string, pontuacao = 0) {
  console.log(`Música: ${musica}`);
  console.log(`Pontuacao: ${pontuacao}`);
}
pontuarMusica("Musica");
pontuarMusica("Música", 5);

// função rest

function tocarMusicas(cantor: string, ...musicas: string[]) {
  for (const musica of musicas) {
    console.log(`Cantor: ${cantor}`);
    console.log(`Música: ${musica}`);
  }
}
tocarMusicas("Cantor", "música1", "música2", "música3");

// função never

function fail(message: string): never {
  throw new Error(`Falha ${message}`);
}
function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }
  param.toUpperCase();
}
workWithUnsafeParam(123);

// alias de função

type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length;
// stringToNumber = (input) => input.toUpperCase();

console.log(stringToNumber("Paula"));
