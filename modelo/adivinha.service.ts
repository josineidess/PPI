import { Injectable } from '@angular/core';

@Injectable()
export class AdivinhaService {
  gerado: number;
  constructor() {
  }


gerarNumero(ini: number, fim: number): number {
  this.gerado = Math.floor(Math.random() * (fim - ini + 1)) + ini;
  return this.gerado;
}
sortear(n: number): string {
  if ((n != null) && (n > 0 && n < 21)) {
  if (n == this.gerado) {
     return 'Parabéns você acertou! Aperte f5 para jogar novamente.';
  } else if (n > this.gerado) {
    return 'Tente um número menor...';
  } else if (n < this.gerado) {
    return 'Tente um número maior...';
  }
  }
  else {
    return 'Digite um número entre 1 e 20.';
}}

}

